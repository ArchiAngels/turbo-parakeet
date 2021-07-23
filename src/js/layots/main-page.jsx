import React from 'react';

import Nav from '../components/navigator.jsx';
import BlockHello from '../layots/Block-first.jsx';
import SecondBlock from '../layots/Block-second.jsx';
import ThirdBlock from '../layots/block-three.jsx';
import FourBlock from '../layots/block-four.jsx';
import FiveBlock from '../layots/block-five.jsx';

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
    </>
}

export default mainPage;