
import {createContext, useState} from 'react'





export let UserContext = createContext();

export default function UserContextProvider(props) {


const [isLogin, setisLogin] = useState(localStorage.getItem("userToken") ? localStorage.getItem("userToken"): null)

    return <UserContext.Provider value={{isLogin, setisLogin}}>
        {props.children}
    </UserContext.Provider>
    
}
