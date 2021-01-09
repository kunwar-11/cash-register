import React from 'react'

function Data({rem , msg}) {
    const moneyArray = [2000 , 500 , 200 , 100 , 50 , 20 , 10 , 5 , 2 , 1];
    let displayString = ``
    const register = new Map()
    let r =rem
    moneyArray.forEach( each => {
        let numberOfNotes = Math.floor(rem/each);
        register.set(each , numberOfNotes);
        rem -= numberOfNotes*each
    })
   
    return (
        <div className = 'data'>
            <h2>
                { rem !== null ? `${msg}  ${r}` : `${msg}`}
            </h2>
            {
                register.forEach((numberOfNotes , notes) => {
                    displayString += `₹${notes} : ${numberOfNotes}/`
                })
            }
            <div>
                {displayString.split('/').map( each => <h3 key ={each}>{each}</h3>)}
            </div>
        </div>
    )
}

export default Data
