// import React, { useState} from 'react';
import React from 'react';
import './global.css';

import Routes from './routes';

function App(){
  return(
    <Routes />
  );
}

export default App;



/**JSX  */

// function App() { pode ser assim
//   return (
//     <Header />
//   );
// }

/**utilizando props */

// function App() {
//   return (
//     <Header title="Semana Omni"/>
//   );

// function App() {
//   return (
//     <Header>
//       Semana Omni
//     </Header>
//   );

// function App() {
//   const [counter, setCounter] = useState (0);

//   //useState - Array [valor, funcaoDeAtualizacao]

//   function increment (){
//     setCounter(counter +1);
//     console.log(counter);
//   }

//   return (
//     <div>
//     <Header> Contador: {counter}  </Header>
//     <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }

// export default App;
