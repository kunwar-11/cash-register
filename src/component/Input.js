import React , { useState } from 'react'

function Input({bill , setBill , paid , setPaid , rem , setRem  , setMsg , isDark}) {
    const [isBill , setIsBill] = useState(false)
    const billHandler = (e) => {
            if(e.target.value !== ''){
            setIsBill(true)
           }
            else {
                setIsBill(false)
            }
            setBill(parseInt(e.target.value) || '')
    }
    const paidHandler = (e) => {
        setPaid(parseInt(e.target.value) || '')
    }
    //console.log(paid,bill)
    const formSubmitHandler = (e) => {
        e.preventDefault();
        //console.log(parseInt(paid) - parseInt(bill))
        if((bill <= paid) && (bill !== '' && paid !== '')) {
            console.log(typeof(bill) , typeof(paid))
            setRem(paid - bill)
            setMsg('Total Amount to be Paid :')
        }
        else if((bill === '' || paid === '')){
            setMsg('Please enter amount')
            setRem('')
        }
        else if(bill > paid) {
            // console.log(typeof(bill) , typeof(paid))
            // console.log(rem)
            setMsg('Paid amount should be greater than bill')
            setRem('')
        }
        
        setBill('')
        setPaid('')
        setIsBill(false)    
    }
    return (
        <form  className = 'form' onSubmit = {formSubmitHandler}>
          <input className = {`bill ${isDark ? 'darkIP' : 'lightIP'}`} onChange = {billHandler} type="number" value = {bill} placeholder = 'enter total bill amount'/>
          <input className = {`${isBill ? 'paidTrue':'notpaid'} ${isDark ? 'darkIP' : 'lightIP'}`} onChange = {paidHandler} type="number" value = {paid} placeholder = "enter amount paid by customer"/>
          <button className = {`${isDark ? 'dark' : 'light'}`}>Calculate</button>  
        </form>
    )
}

export default Input
