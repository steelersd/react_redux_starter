import * as types from "./actionTypes";

export const updateGUID = guid => ({
  type: types.UPDATE_RANDOM_GUID,
  guid
});

export const fetching = isFetching => ({
  type: types.FETCHING,
  isFetching
});

const wait = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const delayedGetGuidAwait = async url => {
  await wait(2000);
  let response = await fetch(url);
  return response.json();
};

async function handleGuidAjaxAwait(url, dispatch) {
  dispatch(fetching(true));
  let json = await delayedGetGuidAwait(url).catch(alert); // This code will actually pause...
  dispatch(updateGUID(json));
  dispatch(fetching(false));
}

export const updateGUIDAjax = url => {
  return function(dispatch, state) {
    handleGuidAjaxAwait(url, dispatch);
  };
};
