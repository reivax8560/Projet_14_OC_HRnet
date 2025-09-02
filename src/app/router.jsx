import { Outlet, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Home from '../pages/home/Home'
import EmployeeList from '../pages/employeeList/EmployeeList';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "employee-list",
                element: <EmployeeList />,
            }
        ]
    },
]);

function Root() {
    return <>
        <Outlet />
        <ScrollRestoration />
    </>

}
