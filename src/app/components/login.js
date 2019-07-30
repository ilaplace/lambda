import React, { Component } from 'react'
import {navigate } from "gatsby"
import {handleLogin, isLoggedin } from "../../service/auth"

export default class Login extends Component {
    handleSubmit = () => {
        console.log("logloglog")
        
        handleLogin(user => navigate(`/app/profile`))
    }
    render() {
        return (
            <>
            <h1>Hey man wanna Log in?</h1>
            <button onClick={this.handleSubmit}>log in</button>
            </>
        )
    }
}
