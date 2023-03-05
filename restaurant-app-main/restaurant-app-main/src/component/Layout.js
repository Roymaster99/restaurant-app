import { Outlet } from "react-router-dom"
import { Fooder } from "./Fooder"
import { Header } from "./Header"

const Layout = () => {
    return (
        <>
            <main>
                <Header />
                <Outlet />
            </main>
            <Fooder />
        </>
    )
}

export default Layout