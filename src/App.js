//importaciones
import { useState, Component } from 'react';
// //componente en función
// function App() {
//   //definición de variables de estado
//   const [email, setEmail] = useState("");
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <h2>Iniciar Sesión</h2>
          <label>
            Correo
            {/* {input reactivo el cual se enlaza con la vairable de estado email y se actualiza con el evento onChange} */}
            <input type="text" value={email} onChange={this.handleEmailChange} />
          </label>
          <label>
            Contraseña
            {/* {input reactivo el cual se enlaza con la vairable de estado password y se actualiza con el evento onChange} */}
            <input type="password" value={password} onChange={this.handlePasswordChange} />
          </label>
          <button type="submit" >Enter</button>
        </form>
      </div>
    );
  }

  handleEmailChange = (event) => this.setState({ email: event.target.value });
  handlePasswordChange = ({ target: { value } }) => this.setState({ email: value });

  handleformChange({preventDefault}) {
    preventDefault();
    alert(`Usuario: ${this.state.email}\nContraseña: ${this.state.password}`);
  }
}


export default App;
