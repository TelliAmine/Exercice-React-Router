import React, { Component } from "react";

export class Profile extends Component {
  state = {
    id: null,
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="container mt-3">
        <h1>profile</h1>
        <ul className="list-group list-group_flush">
          <li className="list-group-item">ID:</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
