import '../App.css'
import {useState} from "react";
import { FaPlus } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const mocks = [
        {name: "Leche Entera", category: "Lácteos", estante: "02", marca: "Pascual", precio: "0.99€"},
        {name: "Detergente Líquido", category: "Limpieza", estante: "15", marca: "Ariel", precio: "8.50€"},
        {name: "Galletas María", category: "Desayuno", estante: "07", marca: "Fontaneda", precio: "2.15€"},
        {name: "Gel de Ducha", category: "Baño", estante: "13", marca: "Sanex", precio: "2.95€"},
        {name: "Macarrones", category: "Despensa", estante: "04", marca: "Gallo", precio: "1.20€"},
        {name: "Atún Claro", category: "Conservas", estante: "05", marca: "Calvo", precio: "4.50€"}
]
const filtros = [
    {
        name: "Categoria",
        values: ["Lacteos", "Fruta", "Verduras"]
    },
    {
        name: "Estante",
        values: ["Estante1", "Estante2", "Estante3"]
    },
    {
        name: "Marca",
        values: ["Millac", "H&S", "Danone"]
    },
]

function Filters({setFilterSelector, setselectedFilter, selectedFilter})
{
    return (
        <div className="fixed bg-black/80 inset-0 flex items-center m-0 justify-center z-40" >
            <div className="bg-gray-200 w-70 h-100 mt-6 mx-auto rounded-2xl z-50">
                <div className={"flex justify-between mx-5"}>
                    <p className="text-4xl text-center py-5">Filtros</p>
                    <button className={"font-medium text-4xl"} onClick={() => {
                        setFilterSelector(false);
                        setselectedFilter(null)
                    }}>X</button>
                </div>
                <ul className="grid text-2xl font-medium ml-4 mt-4 gap-y-4">
                    {filtros.map((filtro) => {
                        return (
                            <li className="grid items-center gap-x-2" key={filtro.name} onClick={() => {
                                selectedFilter === filtro.name ? setselectedFilter(null) : setselectedFilter(filtro.name)
                            }}>
                                <div className="flex items-center gap-x-2">
                                    {selectedFilter === filtro.name ?  <FaMinus/>: <FaPlus/>}
                                    {filtro.name}
                                </div>
                                {selectedFilter === filtro.name&&(
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {filtro.values.map((value) => {
                                            return (
                                                <button className="bg-gray-300 p-1 rounded-md" key={value}>{value}</button>
                                            )
                                        })}
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
function Items({items})
{
    return (
        <section className="grid grid-cols-2 gap-2 mt-5">
            {items.map((item) => {
                return (
                    <button key={item.name} className="bg-gray-200 rounded-xl p-2 focus:ring-2 text-left" onClick={() => console.log(item.name)}>
                        <div className={"absolute bg-blue-500 w-full"}></div>
                        <h2 className="text-xl text-center font-bold mb-8">{item.name}</h2>
                        <p><span className="font-bold ">Categoria:</span> {item.category}</p>
                        <p><span className="font-bold ">Estante:</span> {item.estante}</p>
                        <p><span className="font-bold ">Marca:</span> {item.marca}</p>
                        <p><span className="font-bold ">Precio:</span> {item.precio}</p>
                    </button>
                )
            })}
        </section>
    )

}

function Productos() {
    const [filterSelector, setFilterSelector] = useState(false)
    const [selectedFilter, setselectedFilter] = useState(null)
    return (
        <div>
            <div className="flex flex-col items-center justify-center space-y-4 mt-20 w-80 mx-auto">
                <h1 className="text-4xl">Productos</h1>
                <div className="w-full bg-green-400 px-1 py-0.5"></div>
                {filterSelector && (
                    <Filters setFilterSelector={setFilterSelector} selectedFilter={selectedFilter} setselectedFilter={setselectedFilter}/>
                )}
                <div className="">
                    <button className="flex items-center gap-x-2 font-medium text-lg px-3 py-2 bg-gray-200 rounded-xl" onClick={() => setFilterSelector(prev => !prev)}><FaFilter/>Filtros</button>
                    <Items items={mocks}/>

                </div>
            </div>
        </div>
    )
}



export default Productos
