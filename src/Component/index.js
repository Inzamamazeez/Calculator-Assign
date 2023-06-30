import React, { useState } from 'react';
import style from './index.module.css';

export default function Counter (){

    const [input1,setInput1]=useState('')
    const [input2,setInput2]=useState('')
    const [value,setValue]=useState('')

    const handleInputChange = (e) => {
        const {name, value}=e.target;
        if(name === 'input1'){
            setInput1(value)
        }else if (name === 'input2'){
            setInput2(value)
        }
    };

    const isValidInputs =() =>{
        return(
            input1 !== '' && input2 !=='' &&
            !isNaN(parseFloat(input1)) && !isNaN(parseFloat(input2))
        )
    }

    const handleAddition = () => {
        if(isValidInputs()){
        const res= parseFloat(input1) + parseFloat(input2)
        setValue(res);
    }else{
        setValue('Invalid Input')
    }
}

const handleSubtraction = () => {
    if(isValidInputs()){
    const res= parseFloat(input1) - parseFloat(input2)
    setValue(res);
}else{
    setValue('Invalid Input')
}
}

const handleMultiplication = () => {
    if(isValidInputs()){
    const res= parseFloat(input1) * parseFloat(input2)
    setValue(res);
}else{
    setValue('Invalid Input')
}
}

const handleDivision = () => {
    if(isValidInputs()){
    const res= parseFloat(input1) / parseFloat(input2)
    setValue(res);
}else{
    setValue('Invalid Input')
}
}

const handleDelete = () => {
    if(isValidInputs()){
        setInput1('')
        setInput2('')
        setValue('')
    }
}


    return(
        <>
        <h1>CalCulAtoR</h1>
        <div className={style.Main_container}>
            <input className={ style.inputs} type='number' name='input1' value={input1} onChange={handleInputChange}/>
            <input  className={style.inputs} type='number' name='input2' value={input2} onChange={handleInputChange}/>
            <div className={style.buttons}>
                <button className={style.actions} onClick={handleAddition}>+</button>
                <button className={style.actions} onClick={handleSubtraction}>-</button>
                <button className={style.actions} onClick={handleMultiplication}>x</button>
                <button className={style.actions} onClick={handleDivision}>/</button>
            </div>
        </div>
        <h1>Result:{value}</h1>
        <button className={style.delete_action} onClick={handleDelete}>Delete</button>
        </>
    )
}