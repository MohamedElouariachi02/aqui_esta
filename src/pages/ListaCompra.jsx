import '../App.css'


function ListaCompra() {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-10 mt-20 w-80 mx-auto">
                <h1 className="text-4xl">Lista de la compra</h1>
                <button className="border px-2 py-1 font-bold text-white bg-green-400 rounded-2xl mr-50">+ Crear lista</button>
                <div className="bg-black w-full p-1 h-48 mt-5"></div>
            </div>
        </>
    )
}

export default ListaCompra
