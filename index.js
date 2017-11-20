/**
 * Created by MHC on 2017/11/20.
 */
import React from 'react';
import ReactDom from 'react-dom';
import ReactJS from 'js/reactJS';
import 'css/main';

function rootElem (){
    const divElem = document.createElement('div');
    divElem.setAttribute('id','app');
    divElem.innerHTML='this is a study';
    return divElem;
}

document.body.appendChild(rootElem());

ReactDom.render(
    <div>
        <h1 className="redColor">Study 2017-11-20</h1>
        <ReactJS></ReactJS>
    </div>,
    document.getElementById('app')
);