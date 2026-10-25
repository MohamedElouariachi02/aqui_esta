import '../App.css'
import {useState} from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function addList(lista, item)
{
    if (item === "") return;
    lista.push({name: item})
}

function CrearLista({lista, newItem, setNewItem, setCrearLista})
{
    return (
        <div className="bg-gray-100 fixed inset-0 mt-40">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="relative w-75 items-center flex">
                    <button className="p-2 rounded-xl absolute right-1 font-bold text-2xl"
                            onClick={() => {
                                addList(lista, newItem);
                                setNewItem("")
                            }}>+</button>
                    <input className="border rounded-full border-gray-400 w-full h-10 pl-4" onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addList(lista, newItem)
                            setNewItem("")

                        }
                    }}
                           value={newItem}
                           onChange={(e) => setNewItem(e.target.value)}/>
                </div>

                <div className="flex flex-col justify-start w-60 mt-10 gap-y-4 overflow-auto" >
                    {lista.map(item => (
                        <label className="flex text-lg font-medium gap-x-2 items-center" key={item.name}>
                            <input type={"checkbox"} className="size-4 accent-green-400"/>
                            {item.name}
                        </label>
                    ))}
                </div>
                <div className="flex justify-between w-75 text-white font-medium text-xl mt-30 mb-10">
                    <button className="bg-red-500 p-2 rounded-xl" onClick={() => {
                        setCrearLista(false)
                    }}>Cancelar</button>
                    <button className="bg-green-400 p-2 rounded-xl" onClick={() => {
                        setCrearLista(false);
                        setNewItem("")
                    }}>Hecho</button>
                </div>
            </div>
        </div>
    )
}

function ListaView({setLista, setCrearLista, lista})
{
    return (
        <div className="bg-gray-300 p-4 mt-6 rounded-xl">
            <div className="flex justify-end gap-x-4">
                <MdDelete className="size-7 cursor-pointer" onClick={() => setLista([])} />
                <FaEdit className="size-7 cursor-pointer" onClick={() => setCrearLista(true)}/>
            </div>
            <div className="flex flex-wrap justify-between gap-3 mt-4 text-lg font-medium mx-2">
                {lista.map((item) => {
                    return (
                        <label className=" flex gap-x-2 items-center" key={item.name}>
                            <input type={"checkbox"} className="size-4 accent-green-400 text-white"/>
                            {item.name}
                        </label>
                    )
                })}
            </div>
        </div>
    )
}

function ListaCompra() {
    const [lista, setLista] = useState([])
    const [crearLista, setCrearLista] = useState(false)
    const [newItem, setNewItem] = useState("")

    return (
        <div className="flex flex-col items-center justify-center mt-20 w-80 mx-auto">
            {crearLista && (
                <CrearLista lista={lista} setCrearLista={setCrearLista} newItem={newItem} setNewItem={setNewItem} />
            )}
            <h1 className="text-4xl">Lista de la compra</h1>
            {lista.length !== 0 && (
                <ListaView setCrearLista={setCrearLista} lista={lista} setLista={setLista}/>
            )}
            <button
                className={`border px-2 py-1 font-bold text-white bg-green-400 rounded-2xl mr-50 mt-15 ${lista.length ? "hidden" : "visible"}`}
                onClick={() => setCrearLista(true)}>+ Crear lista</button>

            <div className="bg-black w-full p-1 h-48 mt-10"></div>
        </div>
    )
}

export default ListaCompra
