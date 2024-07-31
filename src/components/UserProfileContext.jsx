import { createContext, useState } from "react";

export const UserProfileContext = createContext();

export const UserProfileProvider = (props) => {
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        age: '',
        birthDate: '',
        city: '',
        gender: ''
    });

    return (
        <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
            {props.children}
        </UserProfileContext.Provider>
    )
}