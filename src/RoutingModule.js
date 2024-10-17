
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "../src/pages/create-acc/SignUp";
import NotesContainer from "../src/pages/dashboard_page/notes/NotesContainer";
import Reminders from "../src/pages/dashboard_page/reminder/Reminder";
import Trash from "../src/pages/dashboard_page/trash/TrashContainer";
import SignIn from "../src/pages/login/SignIn";
import Archive from "./pages/dashboard_page/archive/ArchiveContainer";
import Dashboard from "./pages/dashboard_page/Dashboard";

function RoutingModule() {
    const AppRoutes = createBrowserRouter([
        {
            path: "/SignUp",
            element: <SignUp />,
        },
        {
            path: "/",
            element: <SignIn />,
        },
    
        {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
                { path: "", element: <NotesContainer /> },
                { path: "reminder", element: <Reminders /> },
                { path: "archive", element: <Archive /> },
                { path: "trash", element: <Trash /> },
            ],
        },
    ]);

    return <RouterProvider router={AppRoutes} />;
}

export default RoutingModule;
