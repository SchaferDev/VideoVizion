import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './paginas/Home';
import Erro from './paginas/Erro';
import Filme from './paginas/Filme';
import Favoritos from './paginas/Favoritos';

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/filme/:id' element={ <Filme/> }/>
                <Route path='/favoritos' element={ <Favoritos />}/>
                <Route path='*' element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}