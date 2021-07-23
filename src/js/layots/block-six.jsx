import React , {useEffect} from 'react';
import '../../style/six-block.scss';

const BlockSix = () =>{

    useEffect(function(){
        let time = 0;
        let current = 1;
        let styles = {
            0:'left',
            1:'current',
            2:'right'
        }
        let stateFeed = {
            0:null,
            1:null,
            2:null
        }
        let stateStyles = {
            0:null,
            1:null,
            2:null
        }
        window.feedbacks = document.getElementsByClassName('feedback-card');
        let feedback = window.feedbacks;


        function nextCard(){
            console.log('CHANGE');
            for(let i =0; i < feedback.length; i++){
                if(time == 0){
                    feedback[i].classList.add(styles[i]);
                    stateStyles[i] = styles[i];
                }else{
                    let nextInt = i + current >= feedback.length ? (i+current)%feedback.length : i+current;
                    feedback[i].classList.remove(stateStyles[i]);
                    console.log(nextInt);
                    stateStyles[i] = styles[nextInt];
                    feedback[i].classList.add(stateStyles[i]);
                    


                }
            }
            time++;
            current++;
            setTimeout(()=>{
                nextCard();
            },5000);
        }
        nextCard();
    })

    return <div className='block-six'>
        <div className="container-block-six">
            <div className="wrap-content">
                <div className="text">
                    <h2>Отзывы наших любимых клиентов</h2>
                </div>
                <div className="wrap-rate-us">
                    <div className="feedback-container">
                        <div className="feedback-card ">
                            <img src="../../assets/fb1.png" alt="feedback" />
                        </div>

                        <div className="feedback-card ">
                            <img src="../../assets/fb2.png" alt="feedback" />
                        </div>

                        <div className="feedback-card ">
                            <img src="../../assets/fb3.png" alt="feedback" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BlockSix;