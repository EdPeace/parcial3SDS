import {Carro} from "../Carro";
import {NavBar} from "./styled";

export const Navbar = (props) => {
    return(
        <NavBar>
            <p>Logo</p>
            <Carro cantidad={props.cantidad} productos={props.productos}/>
        </NavBar>
    )
}