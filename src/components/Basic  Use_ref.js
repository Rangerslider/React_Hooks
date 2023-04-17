//useRef returns a mutable reference object with a single property field called current which is set to the passed argument’s value. The returned object will be retained .
//syntex:
// Creating a reference an providing an initial value
// const reference = useRef(initialValue);

// const handler = () => {
//   // Accessing the reference value
//   const referenceValue = reference.current;

//   // Updating reference value
//   reference.current = reference.current + 1;
// };


//details:https://dmitripavlutin.com/react-useref/



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