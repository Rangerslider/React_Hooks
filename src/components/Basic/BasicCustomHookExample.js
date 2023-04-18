import Custom from './Custom';

function BasicCustomHookExample() {
  
  // ! Custom theke value , setValue ber kore nicchi . mone rakhty hobe je 
  // ! value ber korar somoi always [ ] ta use kortyt hobe 
  // ! useState , UseEffect sob somoi { } diye import korty hobe 

  
  const [value,setValue] = Custom(0);

  return (
    <>
      <div className="container">
        <div
          className="xx"
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>{value}</h1>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              display: "flex",
              border: "1px solid red",
            }}
            onClick={() => setValue(value + 1)}
          >
            Click To Update Value
          </button>
        </div>
      </div>
    </>
  );
}

export default BasicCustomHookExample;