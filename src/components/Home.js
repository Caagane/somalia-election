import React from 'react'

import Farmajo from '../assets/farmajo.png'
import Khayre from '../assets/khayre.png'
import Xasan from '../assets/xasan.png'
import Dani from '../assets/dani.png'

export const Home = (props) => {

    return (
        <div className='app'>
            <div className="card">
                <img src={Farmajo} alt='' />
                <div>
                    <h5>Maxamed Cabdilahi Farmajo</h5>
                    <h1>{props.codadkaFarmajo} Cod</h1>
                </div>
            </div>

            <div className="card">
                <img src={Khayre} alt='' />
                <div>
                    <h5>Xasan Cali Khayre</h5>
                    <h1>{props.codadkaKhayre} Cod</h1>
                </div>
            </div>

            <div className="card">
                <img src={Xasan} alt='' />
                <div>
                    <h5>Xasan Sheekh Maxamuud</h5>
                </div>
                <h1>{props.codadkaXasan} Cod</h1>
            </div>

            <div className="card">
                <img src={Dani} alt='' />
                <div>
                    <h5>Saciid Cabdilahi Dani</h5>
                </div>
                <h1>{props.codadkaDani} Cod</h1>
            </div>


            <div className="login">
                <h4>Sign In Dheh si aa u Codayso</h4>
                <button className="btn" onClick={props.signInWithGoogle}>
                    Sign in with Google
                </button>
            </div>


            {props.codkaKaDib ? (
                <div className="login">
                    <h4>{props.codkaKaDib}</h4>
                </div>
            ) : ''}
        </div>
    )
}
