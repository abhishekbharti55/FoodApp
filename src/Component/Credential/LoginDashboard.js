import { Fragment } from "react";
import LoginPage from "./LoginPage";

const LoginDashboard= (props) => {

    const loginId = [{
        id: 1,
        username: 'Admin',
        access: 'admin',
        Pwd: 'Admin@123'
    },
    {
        id: 2,
        username: 'Abhishek',
        access: 'user',
        Pwd: 'Abhi@123'
    },
    {
        id: 3,
        username: 'Rahul',
        access: 'admin',
        Pwd: 'Rahul@123'
    },
    {
        id: 40,
        username: 'Admin',
        access: 'admin',
        Pwd: 'Admin@123'
    },
    ]

    return <Fragment>

        <LoginPage cred = {loginId} onClose = {props.onClose}/>

    </Fragment>

}

export default LoginDashboard;