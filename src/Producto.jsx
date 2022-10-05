import React, {Component} from "react";
import Imagen from "./Imagen";
import Titulo from "./Titulo";
import Precio from './Precio';

class Producto extends Component{
    render(){
        return(
            <div className="producto">
                <Imagen />
                <Titulo />

            </div>
        )
    }
}

export default Producto;