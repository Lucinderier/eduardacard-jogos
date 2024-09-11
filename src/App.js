import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from './Sobre/Sobre';
import Layout from './Layout/Layout';
import NovosJogos from './Catalogo/Catalogo';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<NovosJogos />} />
                    <Route path='sobre' element={<Sobre />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;