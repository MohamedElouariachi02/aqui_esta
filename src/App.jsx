import {Routes, Route} from "react-router";
import LocalizarProducto from './pages/LocalizarProducto';
import ListaCompra from './pages/ListaCompra.jsx'
import Productos from './pages/Productos.jsx';
import Layout from './components/Layout.jsx';


export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LocalizarProducto />} />
                <Route path="/localizarProducto" element={<LocalizarProducto />} />
                <Route path="/listaCompra" element={<ListaCompra />} />
                <Route path="/productos" element={<Productos />} />
            </Route>
        </Routes>
    )
}

