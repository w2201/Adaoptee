import {NavLink} from "react-router-dom";

export default function Header(){
    return (
        <header>
            <p>Adaopte</p>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
            </nav>
        </header>
    );
}
