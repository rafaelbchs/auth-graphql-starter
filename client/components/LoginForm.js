import React from "react";
import AuthForm from "./AuthForm";
import mutation from '../mutations/Login'
import {graphql} from 'react-apollo';
import query from '../queries/CurrentUser'

const LoginForm = (props) => {

    function onSubmit({email, password}){
        props.mutate({
            variables: {email, password},
            refetchQueries: [{query}]
        })
    }

    return (
        <div>
        <h3>Login</h3>
            <AuthForm onSubmit={onSubmit}/>
        </div>
    )
}

export default graphql(mutation)(LoginForm);