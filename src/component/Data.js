import React from 'react'

function Data({rem , msg}) {
    const moneyArray = [2000 , 500 , 200 , 100 , 50 , 20 , 10 , 5 , 2 , 1];
    const register = new Map()
    let displayString = ``
    let r =rem
    moneyArray.forEach( each => {
        let numberOfNotes = Math.floor(rem/each);
        register.set(each , numberOfNotes);
        rem -= numberOfNotes*each
    })
    return (
        <div>
            <h3>
                { rem !== null ? `${msg}  ${r}` : `${msg}`}
            </h3>
            {register.forEach((numberOfNotes , note) => {
                   displayString += `${note} : ${numberOfNotes}\n`
                })}
            <h4>
                {displayString}
            </h4>
        </div>
    )
}

export default Data
