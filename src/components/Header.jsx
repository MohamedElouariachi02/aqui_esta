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
        <header className={`flex absolute w-full ${isDesplegado ? "h-screen" : "h-17"}`}>
            <div className={`flex flex-col ${isDesplegado ? "w-70 bg-green-400" : "w-full"}`}>
                <div className={`flex px-3 py-2 ${isDesplegado ? "justify-end" : "justify-between"}`}>
                    <Menu className={`size-12 `} onClick={() => setIsDesplegado(!isDesplegado)}/>
                    {!isDesplegado &&
                        <img src="/aquiEsta.png" className={"size-12"}/>}
                </div>
                {isDesplegado&&
                    <div>
                        <div className={`w-60`}>
                            <nav className={"flex flex-col font-medium text-xl ml-4 gap-y-6 mt-10"}>
                                {rutas.map(({to, nombre}) => (
                                    <NavLink
                                        onClick={() => setIsDesplegado(!isDesplegado)}
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
                        </div>
                        <div className={"bg-white flex justify-center mt-80 rounded-full size-44 mx-auto"}>
                            <img src={"/aquiEsta.png"} className={"size-30"} />
                        </div>
                    </div>

                }

            </div>
            {isDesplegado &&
                <div className={"bg-black/20 w-full"}>
                </div>
            }
        </header>
    )

    
}

export default Header
