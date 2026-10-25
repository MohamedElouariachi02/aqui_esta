import { Outlet } from 'react-router'
import Header from "./Header.jsx";

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="mx-auto p-4 pb-20">
                <Outlet />
            </main>

        </div>
    )
}