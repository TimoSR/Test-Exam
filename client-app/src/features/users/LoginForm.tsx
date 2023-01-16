import { ErrorMessage, Form, Formik} from 'formik';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Label, Segment } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from '../../app/stores/store';

export default observer (function LoginForm() {

    const {userStore, modalStore} = useStore();

    return(

  
            <Formik
                initialValues={{email: '', password: '', error: null}}
                onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => setErrors({error: 'Invalid email or password'}))}
            >

                {({handleSubmit, isSubmitting, errors}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' color='teal' content='' textAlign='center' />
                    <MyTextInput name='email' placeholder='Email' type='email'/>
                    <MyTextInput name='password' placeholder='Password' type='password'/>
                    <ErrorMessage
                        name='error'
                        render={() => <Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}
                    />
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid/>
                    <Button 
                        style={{marginTop: 10}} 
                        as={Link} to='/' 
                        onClick={() => modalStore.closeModal()} 
                        content='Cancel' 
                        color='red' 
                        fluid/>
                </Form>
                )}

            </Formik>

    )
})