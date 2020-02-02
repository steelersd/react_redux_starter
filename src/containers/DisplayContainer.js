import Display from "../components/Display";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.guid
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
