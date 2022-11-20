import tequila from "./Img/tequila.jfif";
import ron from "./Img/ron.jfif";
import aguardiente from "./Img/aguardiente.jfif";
import jagermeister from "./Img/jagermeister.jfif";
import vino from "./Img/vino.jfif";
import baileys from "./Img/baileys.jfif";
import amaretto from "./Img/amaretto.jfif";
import buchanans from "./Img/buchanans.jfif";
import pilsen from "./Img/pilsen.jfif";
import corona from "./Img/corona.jfif";

const licoresApi = [
    {
      id: 1,
      category: "tequila",
      licor: "TEQUILA",
      image: tequila,
      precio: 80000,
      description: "Bebida originaria de Mexico, proveniente de la destilacion"
    },
    {
      id: 2,
      category: "ron",
      licor: "RON",
      image: ron,
      precio: 50000,
      description: "Bebida proveniente de la destilacion del jugo de la caña"
    },
    {
      id: 3,
      category: "aguardiente",
      licor: "AGUARDIENTE",
      image: aguardiente,
      precio: 45000,
      description: "Bebida proveniente de la destilacion del anis"
    },
    {
      id: 4,
      category: "whisky",
      licor: "JAGERMEISTER",
      image: jagermeister,
      precio: 90000,
      description: "Licor de hierbas endulzado"
    },
    {
      id: 5,
      category: "vino",
      licor: "VINO",
      image: vino,
      precio: 25000,
      description: "Bebida proveniente de la fermentacion de la uva"
    },
    {
      id: 6,
      category: "crema",
      licor: "BAILEYS",
      image: baileys,
      precio: 80000,
      description: "Bebida que se obtiene del whisky y la crema de leche"
    },
    {
      id: 7,
      category: "ron",
      licor: "AMARETTO",
      image: amaretto,
      precio: 40000,
      description: "Bebida proveniente de huesos de albaricoque y almendras"
    },
    {
      id: 8,
      category: "whisky",
      licor: "BUCHANANS",
      image: buchanans,
      precio: 500000,
      description: "Bebida a base de whisky, malta y grano"
    },
    {
      id: 10,
      category: "cerveza",
      licor: "PILSEN",
      image: pilsen,
      precio: 7000,
      description: "Bebida proveniente de la fermentacion de la cebada"
    },
    {
      id: 11,
      category: "cerveza",
      licor: "CORONA",
      image: corona,
      precio: 9000,
      description: "Bebida proveniente de la fermentacion de la cebada"
    },
  ]; 
     
export default licoresApi;