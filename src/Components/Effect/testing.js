import {useState} from 'react';

function EffectTest (){
    let [countOne, SetcountOne] = useState(0);
    let [countTwo, SetcountTwo] = useState(0);

    function increaseCount1(){
        SetcountOne(countOne + 1);
       
    }

    function increaseCount2(){
        SetcountTwo(countTwo + 2);
    }
    return(
        <div>
            <button onClick={increaseCount1}>First</button>
            <p>{countOne}</p>

            <button onClick={increaseCount2}>Second</button>
            <p>{countTwo}</p>
        </div>
    )
}

export default EffectTest;