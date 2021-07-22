import React from 'react';
import '../../style/nav.scss';
// import ReactDOM from 'react-dom';

const NavigatorLinks = ()=>{

    return (
        <div className='wrap-absolute'>
            <div className='wrap-navigator'>
                <nav className='navigator'>
                    <ul>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Галерея</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">О нас</a></li>

                        <li>
                            <div className="nav-logo"></div>
                        </li>

                        <li><a href="#">Меню</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li>
                            <div className='makeOrderBtn w-g nav-btn'>
                                <p>Доставка</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}


export default NavigatorLinks;