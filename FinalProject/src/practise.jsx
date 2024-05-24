import React from "react"

function Practise() {
    let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // items = [];
    return (
        <>
            <h1>Practise</h1>
            { items.length === 0 && <p>No Item found</p>}
            {items.map(item => <li key={item}> {item} </li>)}
            {/* {numbers.map((item) => (<span>{item * 2+ ' '}</span>))} */}
        </>
    )

}

export default Practise