import React from 'react';
import '../../style/five-block.scss';

const FiveBlock = () =>{
    return <div className='Block-five'>
        <div className="container-block-five">
            <div className="wrap-pictures">

                <div className="picture-regular">
                    <img  className='ANIMPICTURE bottom-sf small-picture' src="../../assets/6.jpg" alt="glass" />
                    <img  className='ANIMPICTURE bottom-sl small-picture' src="../../assets/8.jpg" alt="glass" />
                    <img className='ANIMPICTURE top large-picture' src="../../assets/5.jpg" alt="lamps" />
                </div>

                <div className="picture-large">
                    <img  className='ANIMPICTURE focused-picture' src="../../assets/3.jpg" alt="kitchen" />
                </div>

                <div className="picture-regular">
                    <img className='ANIMPICTURE bottom large-picture' src="../../assets/2.jpg" alt="lamps"/>
                    <img className='ANIMPICTURE top-sf small-picture' src="../../assets/4.jpg" alt="glass" />
                    <img className='ANIMPICTURE top-sl small-picture' src="../../assets/0.jpg" alt="glass" />

                </div>

                <div className="picture-small">
                    <img className='ANIMPICTURE focused-picture' src="../../assets/1.jpg" alt="lamps" />
                </div>

            </div>
        </div>
    </div>
}

export default FiveBlock;