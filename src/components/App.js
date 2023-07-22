import React from 'react';
import Cart from './Cart'
import Item from './Item';
// import Sidebar from './Sidebar';

function App() {
    return (
        <div>
            <h1><Cart /></h1>
            {/* <Sidebar /> */}
            <div className='container'>
                <div className='row'> 
                    <div className='col-xs-6'>
                        <Item />
                    </div>
                    <div className='col-xs-6'>
                        <Item />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default App;