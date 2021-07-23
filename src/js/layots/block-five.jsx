import React from 'react';
import '../../style/five-block.scss';

const FiveBlock = () =>{
    return <div className='Block-five'>
        <div className="container-block-five">
            <div className="wrap-pictures">

                <div className="picture-regular">
                    <img  className='ANIMPICTURE small-picture' src="../../assets/glass.jpg" alt="glass" />
                    <img  className='ANIMPICTURE small-picture' src="../../assets/glass.jpg" alt="glass" />
                    <img className='ANIMPICTURE large-picture' src="../../assets/lamps-m.jpg" alt="lamps" />
                </div>

                <div className="picture-large">
                    <img  className='ANIMPICTURE focused-picture' src="../../assets/kitchen.jpg" alt="kitchen" />
                </div>

                <div className="picture-regular">
                    <img className='ANIMPICTURE large-picture' src="../../assets/lamps-m.jpg" alt="lamps"/>
                    <img className='ANIMPICTURE small-picture' src="../../assets/glass.jpg" alt="glass" />
                    <img className='ANIMPICTURE small-picture' src="../../assets/glass.jpg" alt="glass" />

                </div>

                <div className="picture-small">
                    <img className='ANIMPICTURE focused-picture' src="../../assets/lamps.jpg" alt="lamps" />
                </div>

            </div>
        </div>
    </div>
}

export default FiveBlock;