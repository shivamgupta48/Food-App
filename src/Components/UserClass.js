import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userinfo : {
            name : "dummy",
            location: "Default value",
        }

    };
  }

async componentDidMount() {
    // console.log("child componentDidMount");
  const data = await fetch("https://api.github.com/users/shivamgupta48");
  const json = await data.json();
  
  this.setState({
  userinfo:json ,
  });

}

  render() {
    const { name, location } = this.state.userinfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Mail : Shivam.gupta75098@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
