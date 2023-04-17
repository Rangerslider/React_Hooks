import Component3 from "../components/component3";

function Component2({user}) {

  const Pagestyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
  };

  return (
    <div className="parent" style={Pagestyle}>
      {`{
                Age : ${user.age}
            }`}
      <Component3 user={user} />
    </div>
  );
}

export default Component2;