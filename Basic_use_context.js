import React, { createContext, useContext } from "react";

const Context = createContext();

const Child5 = () => {
    const context = useContext(Context);
    return <div>{context.data}</div>;
  };
  
  const Child4 = () => {
    return <Child5 />;
  };
  
  const Child3 = () => {
    return <Child4 />;
  };
  
  const Child2 = () => {
    return <Child3 />;
  };

const Child = () => {
  const context = useContext(Context);
  return <div>{context.data}</div>;
};

const App = () => {
  return (
    <Context.Provider value={{ data: "Data from context!" }}>
      <Child />
    </Context.Provider>
  );
};
