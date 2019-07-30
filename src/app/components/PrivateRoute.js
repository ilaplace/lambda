import React, { Component } from 'react'
import { isLoggedIn } from "../../service/auth"
import {navigate } from "gatsby"

export default class PrivateRoute extends Component {
    componentDidMount = () => {
        const { location } = this.props
        if(!isLoggedIn() && location.pathname !== `/app/login`){
            // if user is not logged in, redirect to the login page
            navigate(`/app/login`)
            return null
        }
    }
    render() {
         
            const {component: Component, location, ...rest} = this.props
            return isLoggedIn() ? <Component {...rest} /> : null
        
    }
}
