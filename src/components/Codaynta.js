import React from 'react'

import Farmajo from '../assets/farmajo.png'
import Khayre from '../assets/khayre.png'
import Xasan from '../assets/xasan.png'
import Dani from '../assets/dani.png'

export const Codaynta = (props) => {

    // const magaca = props.setMagaca
    // const sawirka = props.setSawirka
    // const musharaxOne = (magaca, sawirka) => {
    //     magaca = 'Maxamed Cabdilahi Farmaajo'
    //     magaca = 'Maxamed Cabdilahi Farmaajo'
    // }

    return (
        <>
            <h2>Wareega 2aad Doorashada M JFS</h2>
            <div className="app">
                <div className="card">
                    <img src={Farmajo} alt='' />
                    <div>
                        <h4>Maxamed Cabdilahi Farmajo</h4>
                        <button className='btn'
                            onClick={() => {
                                props.codee('Maxamed Cabdilahi Farmajo');
                            }}
                        >U Codee</button>
                    </div>
                </div>

                <div className="card">
                    <img src={Khayre} alt='' />
                    <div>
                        <h4>Xasan Cali Khayre</h4>
                        <button className='btn'
                            onClick={() => {
                                props.codee('Xasan Cali Khayre');
                            }}
                        >U Codee</button>
                    </div>
                </div>

                <div className="card">
                    <img src={Xasan} alt='' />
                    <div>
                        <h4>Xasan Sheekh Maxamuud</h4>
                        <button className='btn'
                            onClick={() => {
                                props.codee('Xasan Sheekh Maxamuud');
                            }}
                        >U Codee</button>
                    </div>
                </div>

                <div className="card">
                    <img src={Dani} alt='' />
                    <div>
                        <h4>Saciid Cabdilahi Dani</h4>
                        <button className='btn'
                            onClick={() => {
                                props.codee('Saciid Cabdilahi Dani');
                            }}
                        >U Codee</button>
                    </div>
                </div>
            </div>
        </>
    )
}
