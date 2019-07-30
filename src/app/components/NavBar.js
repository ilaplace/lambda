import React from 'react'
import {Link, navigate} from 'gatsby'
import { getUser, isLoggedIn, logout} from "../../service/auth"

export const NavBar = () => {
    const content = {message: "", login: true }
    const user = getUser()
    if(isLoggedIn()){
        content.message = `hello, ${user.user_metadata && user.user_metadata.fullname}`
    }else {
        content.message = "Bro you are not logged in"
    }
    
    return (
        <div>
            <span>{content.message}</span>
            <nav>
                <Link to="/app/">Main</Link>
                {` `}
                <Link to="/app/profile">Profile</Link>
                {` `}
                {isLoggedIn() ? (
                    <a
                        href="/"
                        onClick={event => {
                            event.preventDefault()
                            logout(()=>navigate(`/app/login`))
                        }}
                    >
                        Logout
                    </a>
                ) :( 
                    <Link to="/app/login">Login</Link>
                )}
            </nav>
        </div>
            

    )
}

export default NavBar
