import React from "react";

class Cart extends React.Component{
    render(){
        return(
        <div style={style2.xyz}>
           <div style={style1.abc}>Cart</div>
        </div>) 
        
        
    };
}

const style1 =  { abc : {
    backgroundColor: '#333', /* Set the background color */
    color: '#fff', /* Set the text color */
    padding: '10', /* Add padding to the Navbar */
    display: 'flex', /* Use flexbox to align content */
    justifyContent: 'center', /* Center the content horizontally */
    alignItems: 'center' /* Center the content vertically */
}
    
}
  
  /* Styling for the Navbar title (Cart) */
const style2 = {
    xyz :{
        fontSize: 50 /* Set the font size */
    }
}

export default Cart;