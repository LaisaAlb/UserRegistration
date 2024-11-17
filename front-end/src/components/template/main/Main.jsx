import './Main.css'
import React from 'react'
import Header from '../header/Header'

export default props =>
    <React.Fragment>
        {/* Serve para importar mais de um elemento jsx e não da erro  */}
        <Header {...props}/>  
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

