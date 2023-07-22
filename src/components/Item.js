import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Item extends React.Component {

    constructor(){
        super();
        this.state = {
            price : 100,
            quantity : 5,
            name : "Mobile Phone",
            image : ''
        }
    }
    increaseQuantity =()=>{
        console.log("this", this.state);
        this.setState ({
            quantity : this.state.quantity + 1
        }, () =>{
            console.log('this.state', this.state);
        });

    }

    decreaseQuantity =()=>{
        console.log("this", this.state);
        const { quantity }  = this.state;
        if(quantity === 0){
            return;
        }
        this.setState((previous)=>{
            return {        
                quantity : previous.quantity-1
            }
        }

        )
        this.setState((previous) =>{
            return{
                quantity : previous.quantity-1
            }
        })

    }

    render() {
        const {price, name, quantity} = this.state;

        return (
        
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <img style={styles.image} />
                    </div>
                  
                    <div className="col-sm-2">
                        <div style={{ color: '#200', fontSize:20 }}>{this.state.name}</div>
                        <div style={{ color: '#777' }}>Rs.{price}</div>
                        <div style={{color: '#777'}}>quantity:{quantity}</div>
                    </div>
                </div>
                <div >
                    <img style={iconsStyle.image} alt="minus" src="https://cdn-icons-png.flaticon.com/128/1082/1082187.png" onClick={this.decreaseQuantity}/>
                    <img style={iconsStyle.image} alt="plus" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" onClick={this.increaseQuantity  } />
                    <img style={iconsStyle.image} alt="delete" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
                </div>

            </div>
        );
    };

}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

const iconsStyle = {
    image:{
        height:25,
        width:25,
        borderRadius:4
    }
}








export default Item;