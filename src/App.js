//importaciones
import { useState, useEffect, Component } from 'react';
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
//ciclo de vida*********+
// class App extends Component{
//   constructor(props) { //se ejecuta cuando se inicializa el componente
//     super(props);
//     console.log("Contructor");
//     this.state = {name: ""};
//   }

//   componentDidMount(){ // se ejecuta cuando se monta el componente
//     console.log("didMount");
//   }

//   componentDidUpdate(prevProps, prevState, snapshot/*es el valor que retorna getSnapshot*/) {//se ejecuta cuando actualizas el estado del componente (setState)
//     console.log("didUpdate", snapshot);
//   }

//   // shouldComponentUpdate(){ //permite cancelar el rerenderizado
//   //   return false;
//   // }

//   getSnapshotBeforeUpdate(prevProps, prevState) {//se ejecuta antes de update y te da el estado y las porps anteriores a este mismo
//     console.log(prevProps, prevState);
//     return "yes";
//   }

//   render() {

//     return (
//       <div>
//         <h1>Ciclo de vida de un componente</h1>
//         <div>
//           <input placeholder='escribe algo' value={this.state.name} onChange={({ target: { value } }) => this.setState({ name: value })}/>
//         </div>
//       </div>
//     );
//   }
// }

// //******************************************************************************************** */
// //useEfect***********
// //nos ayuda a implementar el ciclo de vida en los hooks/componentes funcionales

// const App = () => {
//   const [name, setName] = useState("");//definicion de useState;
//   const [age, setAge] = useState(0);
//   //equicalente a componentDidMount
//   useEffect(() => {
//     console.log(`AppComponent montado`);

//     return () => { // se ejcuta cuando el componente se desmonta
//       console.log("AppComponent desmontado");
//     }
//   }, []);

//   //equivalente a componentDidUpdate (referencia a todo el componente)
//   useEffect(() => {
//     console.log("AppComponent actualizado");
//   });

//   //se ejecuta unicamente cuando el estado age del componente se actualiza
//   useEffect(() => console.log("AppComponent actualizado en Age: " + age), [age]);

//   //se ejecuta unicamente cuando el estado age del componente se actualiza
//   useEffect(() => console.log("AppComponent actualizado en Name: " + name), [name]);

//   //se ejecuta cuando el estado age o name del componente se actualiza
//   useEffect(() => console.log("AppComponent actualizado en Name o Age: "), [name, age]);

//   //render
//   return (
//     <div>
//       <h1>Ciclo de vida de un componente hook o funcional</h1>
//       <div>
//         <input placeholder='escribe algo' value={name} onChange={({ target: { value } }) => setName(value)} />
//         <br></br>
//         <input 
//           placeholder="edad"
//           type="number"
//           value={age}
//           onChange={({target: { value }}) => setAge(value)}
//         ></input>
//       </div>
//     </div>
//   );
// }

// //*************************************************************************************************++ */
// //renderizado condicional**************************+
// const App = () => {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogged, setIsLogged] = useState(false);

//   const handleLoginClick = () => {
//     setIsLogged(!isLogged);
//   };

//   return (
//     <div>
//       <h1>Renderizado condicional</h1>
//       <label>
//         Usuario
//         <input
//           placeholder="usuario"
//           value={user}
//           onChange={({ target: { value } }) => setUser(value)}
//         ></input>
//       </label>
//       <br></br>
//       <label>
//         Password
//         <input
//           placeholder="password"
//           type="password"
//           value={password}
//           onChange={({ target: { value }}) => setPassword(value)}
//         ></input>
//       </label>
//       <br></br>
//       <button
//         onClick={handleLoginClick}
//       >Iniciar sesion</button>
//       {/* {isLogged ? <h2>Sesion iniciada</h2> : null} renderizado condicional o ...*/}
//       {isLogged && <h2>Sesion iniciada</h2>}
//     </div>
//   )
// }

//************************************************************************************** */
//Listas y Keys***************************+

const jsonData = [
  {
    key: "1",
    name: "Yoel"
  },
  {
    key: "2",
    name: "Daniel"
  },
  {
    key: "3",
    name: "Mario"
  }
]

const ListsAndKesy = (props) => {
  //variable de estado
  const [isLoading, setIsLoading] = useState(true);

  //useEfect simula la carga de isLoading cuando se monta el componente
  useEffect(()=>{
    setTimeout(()=> setIsLoading(false), 3000);
  }, [])

  //function que recorre la lista de datos y las pinta en un p
  const renderData = () => {
    //if(isLoading) return <h3>Cargando...</h3>; //forma de condicionar el isLoading, no tan recomendado
    
    return jsonData?.map((v, i) => (
      <div key={v.key}>
        <p>{v.name}</p>
      </div>
    ));
  }

  return (
    <>
      <h1>Listas y Keys</h1>
      <div>
        {isLoading ? <h3>Cargando...</h3> : renderData()}
      </div>
    </>
  );
}

//App********************** */
const App = () => {
  return (
    <ListsAndKesy />
  );
}

export default App;
