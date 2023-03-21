import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;

    //false : chua dang nhap
    //dat sử dụng chung
    const [isLogin, setisLogin] = useState(false);

    return (
        <AppContext.Provider value={{isLogin, setisLogin}}>
            {children}
        </AppContext.Provider>
    );
};