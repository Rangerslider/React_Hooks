// import { useState } from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     let i = 0;
//     const addFive = () => {
//         while (i < 10) {
//             setCount((prevState) => prevState + 1);
//             i += 1;
//         }
//     };

//     return (
//         <div>
//             {count}
//             <p>
//                 <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
//                     +1
//                 </button>
//             </p>
//             <p>
//                 <button type="button" onClick={addFive}>
//                     +10
//                 </button>
//             </p>
//         </div>
//     );
// }

// export default Counter;



import { useState } from 'react';

function Counter() {


    const [count, setCount] = useState(0);

    return (
        <div>
            <h1> Count: {count} </h1>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
export default Counter;