import React, { Component, useState } from 'react'

 const  App=()=> {
    const [checked,setChecked]=useState(false);
    return (
        <div>
            <input
                checked={checked}
                onChange= {()=> setChecked(!checked)}></input>
                {checked? <div>carror</div>: <div>peach</div>}
        </div>
    );
}
export default App
