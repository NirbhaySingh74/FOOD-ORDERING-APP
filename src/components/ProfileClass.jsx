import { Component } from "react";
import PropTypes from "prop-types";
class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>This is class profile commponent</h1>
        <h2>Name : {this.props.name}</h2>
        <h2>{count}</h2>
        <button
          style={{ padding: "5px", cursor: "pointer" }}
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}
ProfileClass.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ProfileClass;
