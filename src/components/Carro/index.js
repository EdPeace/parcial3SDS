import { useState } from 'react'
import { Bubble } from '../bubble'
import {Container, CarroB, Lista, ListaContainer, Elemento, Borrar} from "./styled";

export const Carro = ({ cantidad, productos }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <Container>
            {cantidad > 0 && <Bubble qtt={productos.length} />}
            <CarroB onClick={handleMostrarCarro}>
                🛒
            </CarroB>
            {
                (cantidad > 0 && mostrarCarro) &&
                <Lista>
                    <ListaContainer >
                        {
                            productos.map(x => {
                                return (
                                    <Elemento>
                                        <img height={25} alt={x.nombre} src={x.imagen} />
                                        <span><Borrar onClick={()=>{productos.pop(x)}}>X</Borrar> {x.nombre}</span>
                                        <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                    </Elemento>
                                )
                            })
                        }
                        <Elemento >
                            <strong>Sub total</strong>
                            <strong>{subTotal.toLocaleString()}</strong>
                        </Elemento>
                        <Elemento>
                            <strong>Impuesto</strong>
                            <strong>{impto.toLocaleString()}</strong>
                        </Elemento>
                        <Elemento >
                            <strong>Total a pagar</strong>
                            <strong>{totalPagar.toLocaleString()}</strong>
                        </Elemento>
                    </ListaContainer>
                </Lista>
            }
        </Container>

    )
}