import React from 'react';
import '../../style/seven-block.scss';


const SevenBlock = () =>{
    return <div className = 'sevenBlock'>

        <div className="sevenBlock-container">
            <div className="container-wrap">

                <div>
                    <img src="../../assets/loc1.png" alt="1" />
                    <p>г. Минск, ул. Могилевская 1</p>
                </div>

                <div>
                    <img src="../../assets/clock.png" alt="2" />
                    <p>Будние дни: 11:00 - 15:00</p>
                </div>

                <div>
                    <img src="../../assets/instagram.png" alt="3" />
                    <p className='under'>Instagram</p>
                </div>

                <div >
                    <img src="../../assets/mobile1.png" alt="4" />
                    <p className='under double'><span>Google Play</span> <span>App Store</span></p>
                </div>

                <div>
                    <img src="../../assets/metro1.png" alt="5" />
                    <p>ст. м. Институт Культуры</p>
                </div>

                <div >
                    <img src="../../assets/phone2.png" alt="6" />
                    <p className='under'>+375447257400</p>
                </div>
                
                <div >
                    <img src="../../assets/facebook.png" alt="7" />
                    <p className='under'>Facebook</p>
                </div>
                <br/>
                <div >
                    
                    <p></p>
                </div>
                <div >
                    <img src="../../assets/map1.png" alt="8" />
                    <p className='under double'><span>Google Карты</span> <span>Яндекс.Карты</span></p>
                </div>

            </div>
        </div>

    </div>
}

export default SevenBlock;