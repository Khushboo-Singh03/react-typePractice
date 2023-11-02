import { useState } from "react"

const LoggedIn = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleLogin = () => {
        setisLoggedIn(true)
    }
    const handleLogout = () => {
        setisLoggedIn(false)
    }

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
        </>
    )
}

export default LoggedIn;