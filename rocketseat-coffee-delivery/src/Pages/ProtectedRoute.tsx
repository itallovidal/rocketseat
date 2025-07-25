import React, {ReactNode} from "react";
import {UserContext} from "../Context/UserContextProvider.tsx";
import {Navigate} from "react-router-dom";

function ProtectedRoute({children} : {children: ReactNode}) {
    const {userData} = React.useContext(UserContext)

    return userData.shoppingCart !== null ? children : <Navigate to={'/'}/>;
}

export default ProtectedRoute;