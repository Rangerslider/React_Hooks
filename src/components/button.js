import React from 'react';

function Button(props) {

  const {handleClick, text }= props;

  console.log("randering button",text,"from button");

  return (
    <p>
      <button onClick={handleClick}>{text}</button>
    </p>
  );
}
export default React.memo(Button);
// export default Button;