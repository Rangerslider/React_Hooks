import React, { useRef } from 'react';

function App() {

   const email = useRef(null);
   const username = useRef(null);

   const fetchEmail = () => {
      email.current.value = 'nuri@gmail.com';
      email.current.focus();
   };
   const fetchUsername = () => {
      username.current.value = 'ishmothuranuri12';
      username.current.focus();
   };
   return (
      <>
         <div>
            <h1>Ishmoth Ura nuri</h1>
         </div>
         <div>
            <input placeholder="Username" ref={username} />
            <input placeholder="Email" ref={email} />
         </div>
         <button onClick={fetchUsername}>Username</button>
         <button onClick={fetchEmail}>Email</button>
      </>
   );
}
export default App;