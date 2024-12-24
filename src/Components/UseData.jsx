import React, { Component } from "react";

export default class UseData extends Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    console.log("component did Mount called");
    const data = await fetch("https://api.github.com/users/sawlucky");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount ");
  }
  render() {
    console.log("render method called");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
        <img
          className="w-32 h-32 rounded-full border-4 border-blue-500"
          src={avatar_url}
          alt={`${name}'s avatar`}
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">{name}</h1>
        <p className="text-gray-600 mt-2">
          {location || "Location not available"}
        </p>
      </div>
    );
  }
}
