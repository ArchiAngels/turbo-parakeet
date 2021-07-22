import React from 'react';
import '../../style/first-block.scss';

const BlockFirst = ()=>{

    return (
        <div className='BlockFirst'>
            <div className='wrap-backgroung-video'>
                <video 
                    autoPlay
                    muted
                    loop
                    >
                    <source
                        src="https://video.wixstatic.com/video/db026d_edd93a68873545b594fd9ea0b281e98e/1080p/mp4/file.mp4"
                        type="video/mp4"
                    />
                    
                </video>
                <div className="shadow-screen"></div>
                

            </div>
            <div className="wrap-text-content">
                <div className="wrap-max-width">
                    <div className='wrap-text'>
                        <div className="text">
                            <h1>Вкуснейший обед за одну минуту</h1>
                            <p>Обеденный ресторан iLunch в Минске украсит ваш обед вкуснейшими блюдами от профессионалов</p>
                        </div>
                        <div className='makeOrderBtn g-w b-f block-first-btn'>
                            <p>Сделать заказ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default BlockFirst;