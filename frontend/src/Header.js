import React from 'react';

// export default function Header(){  assim sem prop
//     return(
//     <header>
//         <h1>Be The Hero</h1>
//     </header>
//     );

/**utilizando props para cada pagina ter um title */

//   export default function Header(props){
//          return(
//      <header>
//          <h1>{props.title}</h1>
//      </header>
//       );

export default function Header({children}){
    return(
<header>
    <h1>{children}</h1>
</header>
 );
}

 