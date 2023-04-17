function Component3({ user }) {
    const Pagestyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px",
    };
  
    return (
      <div className="parent" style={Pagestyle}>
        {`{
                  Email : ${user.email} 
                  Profession: ${user.pro}
              }`}
      </div>
    );
  }
  
  export default Component3;