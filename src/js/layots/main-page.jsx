import React from 'react';

import Nav from '../components/navigator.jsx';
import BlockHello from '../layots/Block-first.jsx';
import SecondBlock from '../layots/Block-second.jsx';


const mainPage = (props) =>{
    return <>
        <Nav></Nav>
        <BlockHello></BlockHello>
        <SecondBlock></SecondBlock>
    </>
}

export default mainPage;