import React from "react";

function todo(){
    return 
    <>
    <div>
        <h1>Todo</h1>
        <input type="text" />
        <select name="status" id="status">
            <option value="todo">todo</option>
            <option value="todo">pending</option>
            <option value="todo">completed</option>
        </select>
    </div>
    </>
}

export default todo