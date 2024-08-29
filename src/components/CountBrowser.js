// function ke protekta rerander e call korer jonno useEffect use kora  hoi  ejonno. 
// ejonno react er class component e useeffect die  use kora jay class component er korer dorker hoi na .
// didmount, didUpdatte  egulo die ber ber update koreer dorker hoi naa automatic useEffect die 
// dinamecily update  kora jae  fuction  ke .

import { useEffect, useState } from 'react';


export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        // console.log(`clock ticking!`);
        setDate(new Date());
    };

    useEffect(() => {
        // console.log('updating document title');
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        // console.log('starting timer');
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            // console.log('component unmounted');
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}