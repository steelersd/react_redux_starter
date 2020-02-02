import NameForm from "../components/SampleForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { partial } from "ramda";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.guid
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  const wait = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const delayedGetGuidAwait = async url => {
    await wait(2000);
    let response = await fetch(url);
    return response.json();
  };

  async function handleGuidAjaxAwait(url) {
    dispatch(actions.fetching(true));
    let json = await delayedGetGuidAwait(url).catch(alert); // This code will actually pause...
    dispatch(actions.updateGUID(json));
    dispatch(actions.fetching(false));
  }

  return {
    onGuid: partial(handleGuidAjaxAwait, ["https://helloacm.com/api/random/?n=12"]),
    fetchIt: val => bindActionCreators(actions.fetching, dispatch)(val), // Just showing how this works...
    updateGUIDAjaxThunk: bindActionCreators(partial(actions.updateGUIDAjax, ["https://helloacm.com/api/random/?n=12"]), dispatch) // Logic lives in actions, redux-thunk in action
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameForm);
