import netlifyIdentity from "netlify-identity-widget"
export const isBrowser = () => typeof window !== "undefined"
export const initAuth = () => {
    if(isBrowser()){
        window.netlifyIdentity = netlifyIdentity
        netlifyIdentity.init()
    }
}

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("netlifyUser")
        ? JSON.parse(window.localStorage.getItem("netlifyUser"))
        : {}

export const setUser = user => 
    window.localStorage.setItem("netlifyUser", JSON.stringify(user))


export const handleLogin = callback => {
    if(isLoggedIn()){
        callback(getUser())
    }else{
    
        netlifyIdentity.open()
        netlifyIdentity.on("login", user => {
            console.log("logmein");        
            setUser(user)
            callback(user)
        })
    }
}

export const isLoggedIn = () => {
    if(!isBrowser()) return false
    const user = netlifyIdentity.currentUser()
    return !!user
}

export const logout = callback => {
    netlifyIdentity.logout()
    netlifyIdentity.on("logout", ()=> {
        setUser({})
        callback()
    })
}