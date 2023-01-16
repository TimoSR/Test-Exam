import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { IActivity } from '../models/activity';
import { history } from '../../index';
import { store } from '../stores/store';
import { User, UserFormValues } from '../models/user';

/** Setting a delay to simulate page loading */
const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    /** Creating the auth request to the backend, that will understand */
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
    return config;
})


axios.interceptors.response.use(async response => {
        if(process.env.NODE_ENV === 'development') await sleep(1000);
        /** Delay the response with a seconds delay*/
        return response;
}, (error: AxiosError) => {
    /** Deconstructering the Json object based on model of inspection */
    const {data, status, config} = error.response!;
    switch (status) {
        case 400:
            if (typeof data === 'string') {
                toast.error(data);
            }
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
            }
            if (data.errors) {

                const modalStateErrors = [];
                
                for(const key in data.errors) {

                    if (data.errors[key]) {

                        modalStateErrors.push(data.errors[key])

                    }

                }

                throw modalStateErrors.flat();
            } else {
                toast.error(data);
            }
            break;
        case 401:
            toast.error('unauthorized');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 500:
            store.commonStore.setServerError(data); 
            history.push('/server-error');
            break
    }
    
    return Promise.reject(error);

})

/**
 * I want to request a responsebody with my requested type 
 **/ 

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

/** 
 * Should be read as a object with lamda functions
 * Object initializers / object literals
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 * https://www.youtube.com/watch?v=7d9H34ZVRPg&ab_channel=TheNetNinja 
 **/

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
    list: () => requests.get<IActivity[]>('/activities'),
    details: (id: string) => requests.get<IActivity>(`/activities/${id}`),
    create: (activity: IActivity) => requests.post<void>(`/activities`, activity),
    update: (activity: IActivity) => requests.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del<void>(`/activities/${id}`)
};

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const agent = {
    Activities,
    Account
};

export default agent;