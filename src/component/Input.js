import React from 'react'

function Input({bill , setBill , paid , setPaid , setRem  , setMsg}) {
    const billHandler = (e) => {
        setBill(parseInt(e.target.value))
    }
    const paidHandler = (e) => {
        setPaid(parseInt(e.target.value))
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        //console.log(parseInt(paid) - parseInt(bill))
        if((bill <= paid) && (bill !== '' && paid !== '') ) {
            setRem(paid - bill)
            setMsg('Total Amount to be Paid :')
        }
        else if((bill <= paid) && (bill === '' || paid === '')){
            setMsg('Please enter amount')
            setRem('')
        }
        else if(bill > paid) {
            setMsg('Paid amount should be greater than bill')
            setRem('')
        }
        setBill('')
        setPaid('')
        
    }
    return (
        <form onSubmit = {formSubmitHandler}>
          <input onChange = {billHandler} type="number" value = {bill} placeholder = 'enter total bill amount'/>
          <input onChange = {paidHandler} type="number" value = {paid} placeholder = "enter amount paid by customer"/>
          <button>Calculate</button>  
        </form>
    )
}

export default Input
