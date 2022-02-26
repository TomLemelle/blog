import { FC } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import LoginComponent from "../LoginComponent"
import Users from "../Users"
import RouteGuard from "./RouteGuard"

const CustomRouter: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element=
                    {
                        <RouteGuard>
                            <Users />
                        </RouteGuard>
                    }
                />
                <Route path="/auth" element={<LoginComponent />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter;