import { Menu } from 'lucide-react';
import {useState} from "react";
import { NavLink } from 'react-router'

const rutas = [
    { to: '/LocalizarProducto', nombre: 'Localizar producto'},
    { to: '/ListaCompra', nombre: 'Lista de la compra' },
    { to: '/Productos', nombre: 'Productos'},
]


function Header() {
    const [isDesplegado, setIsDesplegado] = useState(false);

    return (
        <header className={`fixed bg-gray-100 top-0 left-0 right-0 z-50 h-18`}>
            <Menu className={`fixed top-2 z-50 size-12 left-3 transition-transform duration-300 ease-in-out ${isDesplegado ? "translate-x-52" : "translate-x-0"}`} onClick={() => setIsDesplegado(prev => !prev)}/>
            {!isDesplegado && (
                <img src="/aquiEsta.png" className={"fixed top-2 right-3 size-12"}/>
            )}
            <aside className={`
            fixed top-0 left-0 z-40
            flex flex-col h-screen w-70 
            bg-green-400
            transition-transform duration-300 ease-in-out
            ${isDesplegado ? "translate-x-0" : "-translate-x-full"}
            `}>
                <nav className={"flex flex-col font-medium text-xl ml-4 gap-y-6 mt-40"}>
                    {rutas.map(({to, nombre}) => (
                        <NavLink
                            onClick={() => setIsDesplegado(prev => !prev)}
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({isActive}) =>
                                ` ${isActive ? 'text-white' : 'text-black'
                                }`
                            }
                        >
                            {nombre}
                        </NavLink>
                    ))}
                </nav>
                <div className={"bg-white rounded-full mx-auto p-6 mb-10 mt-auto"}>
                    < img src="/aquiEsta.png" className="size-29"/>
                </div>
            </aside>
            {isDesplegado && (
                <button onClick={() => setIsDesplegado(false)} className={`fixed bg-black/25 inset-0 z-30`}/>
            )}

        </header>
    )


    
}

export default Header
