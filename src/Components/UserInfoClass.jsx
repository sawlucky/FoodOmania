import React from "react";

class UserInfoClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="border p-[10px] italic">
        Name:{name}
        location:{location};
      </div>
    );
  }
}
export default UserInfoClass;
