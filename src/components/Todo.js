// class component  ke functionnal component e use korer jonnousestate hook use  kora hoi


import { useState } from 'react';
import React from 'react';

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'pls not use this'
            : null;

        setTodo(inputValue);
        setWarning(warning);
    };


        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={handleInput} />
                </p>
                <hr />
                <h2>{warning || 'nice!'}</h2>
            </div>
        );
    
}

export default Todo;
