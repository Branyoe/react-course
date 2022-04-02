//importaciones
import { useState , Component } from 'react';
//************************Login ejemplo*********************++ */
// //componente en función
// function App() {
//   //definición de variables de estado
//   const [email, setEmail] = useState("");
//   //useState es un hook/función el cual permite manejar el estado de un componente
//   const [password, setPassword] = useState("");

//   //setea el valor de input segun el evento enviado
//   const handleEmailChange = (event) => setEmail(event.target.value);
//   //setea el valor de input segun el evento enviado
//   const handlePasswordChange = ({target: {value}}) => setPassword(value);

//   //Modelo de la definicion basica de un submit
//   const handleFormSubmit = (event) => {
//     event.preventDefault();//importante para que no se refresque la pagina
//     alert(`Usuario: ${email}\nContraseña: ${password}`);
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleFormSubmit}>
//         <h2>Iniciar Sesión</h2>
//         <label>
//           Correo
//           {/* {input reactivo el cual se enlaza con la vairable de estado email y se actualiza con el evento onChange} */}
//           <input type="text" value={email} onChange={handleEmailChange} />
//         </label>
//         <label>
//           Contraseña
//           {/* {input reactivo el cual se enlaza con la vairable de estado password y se actualiza con el evento onChange} */}
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <button type="submit" >Enter</button>
//       </form>
//     </div>
//   );
// }

//componente en clase
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     }
//   }

//   render() {
//     const { email, password } = this.state;
//     return (
//       <div className="App">
//         <form onSubmit={this.handleFormSubmit}>
//           <h2>Iniciar Sesión</h2>
//           <label>
//             Correo
//             {/* {input reactivo el cual se enlaza con la vairable de estado email y se actualiza con el evento onChange} */}
//             <input type="text" value={email} onChange={this.handleEmailChange} />
//           </label>
//           <label>
//             Contraseña
//             {/* {input reactivo el cual se enlaza con la vairable de estado password y se actualiza con el evento onChange} */}
//             <input type="password" value={password} onChange={this.handlePasswordChange} />
//           </label>
//           <button type="submit" >Enter</button>
//         </form>
//       </div>
//     );
//   }

//   handleEmailChange = (event) => this.setState({ email: event.target.value });
//   handlePasswordChange = ({ target: { value } }) => this.setState({ email: value });

//   handleformChange({preventDefault}) {
//     preventDefault();
//     alert(`Usuario: ${this.state.email}\nContraseña: ${this.state.password}`);
//   }
// }

//********************************************************************************* */
//ejemplo setState
// function App() {
//   const [turn, setTurn] = useState(false);

//   const handldeChangeBtn = () => setTurn(!turn);

//   return (
//     <div className="App">
//       <h2>
//         Hola {turn ? "Brandon" : "Yoel"}
//       </h2>
//       <button onClick={handldeChangeBtn}>Change</button>
//     </div>
//   );
// }

//******************************************************************************************* */
//ciclo de vida
class App extends Component{
  constructor(props) { //se ejecuta cuando se inicializa el componente
    super(props);
    console.log("Contructor");
    this.state = {name: ""};
  }

  componentDidMount(){
    console.log("didMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot/*es el valor que retorna getSnapshot*/) {//se ejecuta cuando actualizas el estado del componente (setState)
    console.log("didUpdate", snapshot);
  }

  // shouldComponentUpdate(){ //permite cancelar el rerenderizado
  //   return false;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {//se ejecuta antes de update y te da el estado y las porps anteriores a este mismo
    console.log(prevProps, prevState);
    return "yes";
  }

  render() {

    return (
      <div>
        <h1>Ciclo de vida de un componente</h1>
        <div>
          <input placeholder='escribe algo' value={this.state.name} onChange={({ target: { value } }) => this.setState({ name: value })}/>
        </div>
      </div>
    );
  }
}


export default App;
