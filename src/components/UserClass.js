import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child UserClass");
    this.state = {
      userInfo: {
        name: "will",
        location: "dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/wilsonkr56");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        > 
          Increase Count
        </button>*/}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9693129739</h4>
      </div>
    );
  }
}

export default UserClass;
