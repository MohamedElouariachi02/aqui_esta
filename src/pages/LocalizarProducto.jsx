import '../App.css'


function LocalizarProducto() {


    return (
        <div className="flex flex-col items-center justify-center space-y-10 mt-20 w-80 mx-auto">
            <h1 className="text-4xl">Localizar producto</h1>
            <input placeholder="Producto" className="border rounded-full pl-2 w-80 border-gray-400 text-xl"/>
            <div className="bg-black w-full p-1 h-48 mt-10"></div>
        </div>
    )
}

export default LocalizarProducto
