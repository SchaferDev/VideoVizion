import './index.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link className='logo' to='/'>VideoVizion</Link>
            <Link className='favoritos' to='/favoritos'>Meus Favoritos</Link>
        </header>
    )
}