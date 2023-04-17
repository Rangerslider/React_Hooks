import React from 'react';

function ShowCount(props){

    const {count,title} = props;

    console.log("This is rendering",title,"from showcount");
    
    return (
        <>
           <p> 
            {title} is {count}
           </p>
        
        </>
    )
}

// export default ShowCount;
export default React.memo(ShowCount);