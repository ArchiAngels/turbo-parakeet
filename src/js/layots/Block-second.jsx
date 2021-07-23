import React from 'react';
import '../../style/second-block.scss';

const SecondBlock = () =>{
    return <div className='Block-second'>

        <div className="wrap">
            <div className="logo">
                <img src="/assets/big-logo.png" alt="logo i lunch" />
            </div>
            <div className="text-content">
                <div className="text-wrap">
                    <div className="left-side">
                        <p>
                            <span>Ресторан iLunch </span>
                             - это идейные соображения высшего порядка, 
                            а также дальнейшее развитие различных форм деятельности в 
                            особенности же реализация намеченных плановых заданий играет 
                            важную роль в формировании системы обучения кадров, соответствует 
                            насущным Равным образом сложившаяся структура организации требуют
                            от нас анализа системы обучения кадров, соответствует насущным 
                            потребностям. Равным образом новая модель  деятельности способствует
                            подготовки и реализации существенных финансовых и административных 
                            условий.Разнообразный и богатый опыт рамки и место обучения кадров 
                            влечет за собой процесс внедрения и модернизации системы обучения 
                            кадров, соответствует насущным потребностям.
                        </p>
                    </div>
                        <div className="right-side">
                            <div className="wrap-abilities">

                                <div className="item">
                                    <img src="../../assets/bot.png" alt="robot bot" />
                                    <p>Инновации</p>
                                </div>

                                <div className="item">
                                    <img src="../../assets/coins.png" alt="money coins" />
                                    <p>Приятные цены</p>
                                </div>

                                <div className="item">
                                    <img src="../../assets/green.png" alt="green food" />
                                    <p>Качественные продукты</p>
                                </div>

                            </div>
                            <div className="wrap-img">
                                <img src="../../assets/tables.jpg" alt="tables" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
}


export default SecondBlock;