import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {

    const [user, setUser] = useState<AuthUser | null>({} as AuthUser);
    const handleLogin = () => {
        // setisLoggedIn(true)
        setUser({
            name:"Jiya",
            email:"jiya@gmail.com"
        })
    }
    const handleLogout = () => {
        // setisLoggedIn(false)
    }

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User is {user?.name}</p>
            <p>User is {user?.email}</p>
        </>
    )
}

export default User