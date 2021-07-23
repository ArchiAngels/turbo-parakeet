import React, {useEffect} from 'react';
import '../../style/three-block.scss';

const threeBlock = () =>{

    useEffect(function(){
        let pic = document.getElementById('myParallax');
        let posZero = -800;
        let speed = 0.4;

        window.addEventListener('scroll',()=>{
            parallaxFunc();
        })

        let parallaxFunc = () =>{
            let newX =  posZero + (window.scrollY * speed);
            
            pic.style.marginTop = newX+'px';
        }
    })

    return <div className='block-three'>
                <div className="image-max-height">
                    <div id='myParallax' className="wrap-parallax">
                        <img src="../../assets/menu2.jpg" alt="food tasty" />
                    </div>
                </div>
                <div className="text">
                    <div className='makeOrderBtn b-w menu-btn '>
                        <p>Меню</p>
                    </div>
                </div>
            </div>
}


export default threeBlock;