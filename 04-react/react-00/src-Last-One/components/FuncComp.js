import React from 'react';

function FuncComp(parms) {

    function onClick(e) {
        
        parms.callback('something Important');
    }

    return <h1 onClick={onClick}>Hello from FuncComp {JSON.stringify(parms.stuff)}</h1>;
}

export default FuncComp;