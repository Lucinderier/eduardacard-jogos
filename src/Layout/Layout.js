import '../App.css';
import { Outlet } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';

export default function Layout() {
    return (<div className="App">
        <Cabecalho/>
        <Outlet/>
    </div>
    );
}