import React from "react";

class UserInfoClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="border p-[10px] italic">
        Name:{name}
        location:{location};
        <div>
          this is count:{this.state.count}
          <button
            className="bg-slate-600 rounded m-[5px] p-[10px]"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            add to inc
          </button>
        </div>
      </div>
    );
  }
}
export default UserInfoClass;
