import React from 'react';


const WithProp = (props: any) =>{
    console.log(props)  
    // props.name = "smith"                     /** props are immuatable, the value cannot be changed */
   return(
    <div>
    <h1>Hello {props.name} {props.lastName}</h1>
    </div>
   )

}
export default WithProp