import '../App.css'

const mocks = [
        {name: "Leche Entera", category: "Lácteos", estante: "02", marca: "Pascual", precio: "0.99€"},
        {name: "Detergente Líquido", category: "Limpieza", estante: "15", marca: "Ariel", precio: "8.50€"},
        {name: "Galletas María", category: "Desayuno", estante: "07", marca: "Fontaneda", precio: "2.15€"},
        {name: "Gel de Ducha", category: "Baño", estante: "13", marca: "Sanex", precio: "2.95€"},
        {name: "Macarrones", category: "Despensa", estante: "04", marca: "Gallo", precio: "1.20€"},
        {name: "Atún Claro", category: "Conservas", estante: "05", marca: "Calvo", precio: "4.50€"}
]
function Productos() {
    const items = mocks.map((item) => {
        return (
            <button key={item.name} className="bg-gray-200 rounded-xl p-2 focus:ring-2" onClick={() => console.log(item.name)}>
                <h2 className="text-xl font-bold mb-8">{item.name}</h2>
                <p className="text-left"><span className="font-bold ">Categoria:</span> {item.category}</p>
                <p className="text-left"><span className="font-bold ">Estante:</span> {item.estante}</p>
                <p className="text-left"><span className="font-bold ">Marca:</span> {item.marca}</p>
                <p className="text-left"><span className="font-bold ">Precio:</span> {item.precio}</p>
            </button>
        )
    })
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-4 mt-20 w-80 mx-auto">
                <h1 className="text-4xl">Productos</h1>
                <div className="w-full bg-green-400 px-1 py-0.5"></div>
                <div className="">
                    <button className="px-2 bg-gray-200 rounded-xs mr-50">Filtros</button>
                    <section className="grid grid-cols-2 gap-2 mt-5">
                        {items}
                    </section>
                </div>
            </div>
        </>
    )
}



export default Productos
