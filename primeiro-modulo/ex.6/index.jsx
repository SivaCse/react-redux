import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './Member';

ReactDOM.render(
    <Family lastName='Ribeiro'>
        <Member name='Gabriel' />
        <Member name='Samantha' />
    </Family>,
    document.getElementById('app')
);