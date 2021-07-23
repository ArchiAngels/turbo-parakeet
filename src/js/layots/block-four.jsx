import React from 'react';
import '../../style/four-block.scss';

const fourBlock = () =>{
    return <div className='block-four'>

        <div className="container">
            <div className="wrap-content">
                <div className="wrap-text">
                    <div className="text">
                        <p>Новости</p>
                    </div>
                </div>
                <div className="wrap-news">
                    <div className="wrap-cards">

                        <div className="card">
                            <div className="card-content">
                                <img src="../../assets/news-img.jpg" alt="what is up i lunch" />
                                <p>Повседневная практика</p>
                                <p>22.07.2021</p>
                                <p className='text-news'>Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности.</p>
                                <button className='link-news' >Читать далее...</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <img src="../../assets/news-img.jpg" alt="what is up i lunch" />
                                <p>Повседневная практика</p>
                                <p>22.07.2021</p>
                                <p className='text-news'>Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности.</p>
                                <button className='link-news' >Читать далее...</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <img src="../../assets/news-img.jpg" alt="what is up i lunch" />
                                <p>Повседневная практика</p>
                                <p>22.07.2021</p>
                                <p className='text-news'>Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности.</p>
                                <button className='link-news' >Читать далее...</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default fourBlock;