import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { IActivity } from '../models/activity';
import {format} from 'date-fns';

export default class ActivityStore {

    activityRegistry = new Map<string, IActivity>();
    selectedActivity: IActivity | undefined = undefined;
    editMode: boolean = false;
    loading: boolean = false;
    loadingInitial: boolean = false;

    /** Test Data */
    testTitle: string = 'Hello from MobX';

    constructor() {

        /**
         * Alternative to makeObservable
         */
        makeAutoObservable(this)


        // makeObservable(this, {
        //     title: observable,
        //     //setTitle: action.bound
        //     setTitle: action
        // })

    }


    get activitiesByDate() {
        return Array.from(this.activityRegistry.values()).sort((a, b) => 
            // Date.parse(a.date) - Date.parse(b.date));
            a.date!.getTime() - b.date!.getTime());
    }

    /** Functions with get is called computed functions */
    get groupedActivities() {
        /** Returning objects with key of date and IActivity object */
        return Object.entries(
            /** Reduce runs over each element of the activitiesByDate */
            this.activitiesByDate.reduce((activities, activity) => {
                // const date = activity.date;
                const date = format(activity.date!, 'dd MMM yyyy');
                /** 
                 * Is excuted on each callback element of the activitiesByDate array
                 * We are looking for for dates where there is activities.
                 * Checking if we have a match for this activity on this date
                 * If it is a match, then what we're going to do is spread the activities.
                 * specify in square brackets the objects property accessor again with the date there.
                 * Then add the activty that we're executing this callback function on
                 * and if not we are going to create a new array with that activity
                */
                activities[date] = activities[date] ? [...activities[date], activity] : [activity];
                return activities;
                /** We define activities to be an object with key of date and array of activities */
            }, {} as {[key: string]: IActivity[]})
        )
    }

    /** We utilize async await instead of promises */
    loadActivities = async () => {

        /** 
         * Can cause flicker on some browsers 
         * Solution is set it to true in the beginning
         * if it is a problem
        */
   
        this.loadingInitial = true;

        try {

            const activities = await agent.Activities.list();

            runInAction(() => {

                activities.forEach(activity => {

                    this.setActivity(activity);
                    
                })

                this.loadingInitial = false;

            })
            
        } catch (error) {

            console.log(error);

            // runInAction (() => {

            //     this.loadingInitial = false;

            // })

            /** The above code can be replaced with an action */
            this.setLoadingInitial(false);
            
        }
    }

    loadActivity = async (id: string) => {

        let activity = this.getActivity(id);

        if (activity) {

            this.selectedActivity = activity;
            return activity;

        } else {

            this.loadingInitial = true;

            try {

                activity = await agent.Activities.details(id);
                this.setActivity(activity);
                
                runInAction(() => {
                    this.selectedActivity = activity;
                })

                
                this.setLoadingInitial(false);
                return activity;

            } catch (error) {

                console.log(error);

                this.setLoadingInitial(false);

            }
        }
        
    }

    private getActivity = (id: string) => {
        return this.activityRegistry.get(id);
    }

    /** We need to do this to avoid warnings from objects telling that i'm trying to modify an observable outside an action */
    private setActivity = (activity: IActivity) => {

        /**
         * Based on the format of the data, we change it to fit the date form. 
         * (We can inspect it in the Network repsonse from the server)
         * We split the date based on the T, and take the first part now two elements. 
         */
        //  activity.date = activity.date.split('T')[0];
        activity.date = new Date(activity.date!);

         /** 
          * Mutating state directly, would seem odd 
          * would be seen as a anti pattern in redux.
          * as we would not directly mutate the state
          * but this is a core pattern of MobX
          * */
         this.activityRegistry.set(activity.id, activity);

    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createActivity = async (activity: IActivity) => {

        this.loading = true;

        try {

            await agent.Activities.create(activity);

            runInAction(() => {
                this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;
            })

        } catch (error) {

            console.log(error);

            runInAction(() => {
                this.loading = false;
            })
            
        }
    }

    updateActivity = async (activity: IActivity) => {

        this.loading = true;

        try {

            await agent.Activities.update(activity);

            runInAction(() => {

                // Filter creates an array without the activity that will be replaced
                //this.activities = [...this.activities.filter(a => a.id !== activity.id)];
                //this.activities.push(activity);

                /** The code above can be replace my map.set */
                this.activityRegistry.set(activity.id, activity);

                this.selectedActivity = activity;
                this.editMode = false;
                this.loading = false;

            })

        } catch (error) {

            console.log(error);

            runInAction(() => {
                this.loading = false;
            })

        }

    }

    deleteActivity = async (id: string) => {
        this.loading = true;
        try {
            await agent.Activities.delete(id);
            runInAction(() => {
                //this.activities = [...this.activities.filter(a => a.id !== id)];
                this.activityRegistry.delete(id);
                /** cancelSelectedActivity if selectedActivity is not null */
                /** Was used before routing */
                //if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
                this.loading = false;
            })
        } catch (error) {

            runInAction(() => {
                this.loading = false;
            })

        }
    }

    /** 
     * By using lamda functions we autobind the function to the class
     * Therefore by using lamda functions we don't need to bind setTitle in makeObservable
     */
     setTitle = () => {
        this.testTitle = this.testTitle + '!';
    }

}