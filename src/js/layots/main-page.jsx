import React from 'react';

import Nav from '../components/navigator.jsx';
import BlockHello from '../layots/Block-first.jsx';
import SecondBlock from '../layots/Block-second.jsx';
import ThirdBlock from '../layots/block-three.jsx';
import FourBlock from '../layots/block-four.jsx';
import FiveBlock from '../layots/block-five.jsx';
import SixBlock from '../layots/block-six.jsx';
import SevenBlock from '../layots/Block-seven.jsx';

const mainPage = (props) =>{
    return <>
        <Nav></Nav>
        <BlockHello></BlockHello>
        <SecondBlock></SecondBlock>
        <ThirdBlock></ThirdBlock>
        <FourBlock></FourBlock>
        {/* TODO ANIM PICTURE */}
        <FiveBlock></FiveBlock>
        {/* TODO ANIM PICTURE */}
        {/* TODO fine animation feedback */}
        <SixBlock></SixBlock>
        {/* TODO fine animation feedback */}
        <SevenBlock></SevenBlock>
        <div className="footer-text">© 2021 iLunch</div>
    </>
}

export default mainPage;