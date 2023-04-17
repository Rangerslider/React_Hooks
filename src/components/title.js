import React from 'react';

function Title(){

    console.log("I am rendering from title component");
    
    return (

      <div className="title">
        <h2 style={{color:"blue"}}>Hello this is UseCallback_UseMemo Example </h2>
        <p>
          The  useCallback and useMemo Hooks are similar. The
          main difference is that useMemo returns a <strong>  memoized value </strong>  and
          useCallback returns a <strong> memoized function</strong>. 
        </p>
      </div>
    )
}

export default React.memo(Title);
// export default Title;