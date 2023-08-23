import { createReducer } from 'reduxsauce';
import { AppTypes } from '../actions';
import storeInitialState from '../store/initial-state';
export const INITIAL_STATE = storeInitialState.app;

const updateQuestion1 = (state, action) => ({
  ...state,
  question1: action.data,
});
const updateQuestion2 = (state, action) => ({
  ...state,
  question2: action.data,
});
const updateQuestion3 = (state, action) => ({
  ...state,
  question3: action.data,
});
const updateQuestion4 = (state, action) => ({
  ...state,
  question4: action.data,
});
const updateQuestion5 = (state, action) => ({
  ...state,
  question5: action.data,
});
const updateQuestion6 = (state, action) => ({
  ...state,
  question6: action.data,
});
const updateQuestion7 = (state, action) => ({
  ...state,
  question7: action.data,
});
const updateQuestion8 = (state, action) => ({
  ...state,
  question8: action.data,
});
const updateQuestion9 = (state, action) => ({
  ...state,
  question9: action.data,
});
const updateQuestion10 = (state, action) => ({
  ...state,
  question10: action.data,
});
const updateQuestion11 = (state, action) => ({
  ...state,
  question11: action.data,
});
const updateQuestion12 = (state, action) => ({
  ...state,
  question12: action.data,
});

const resetQuestions = (state, action) => ({
  ...state,
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question9: "",
});

export const HANDLERS = {
  [AppTypes.UPDATE_QUESTION1]: updateQuestion1,
  [AppTypes.UPDATE_QUESTION2]: updateQuestion2,
  [AppTypes.UPDATE_QUESTION3]: updateQuestion3,
  [AppTypes.UPDATE_QUESTION4]: updateQuestion4,
  [AppTypes.UPDATE_QUESTION5]: updateQuestion5,
  [AppTypes.UPDATE_QUESTION6]: updateQuestion6,
  [AppTypes.UPDATE_QUESTION7]: updateQuestion7,
  [AppTypes.UPDATE_QUESTION8]: updateQuestion8,
  [AppTypes.UPDATE_QUESTION9]: updateQuestion9,
  [AppTypes.UPDATE_QUESTION10]: updateQuestion10,
  [AppTypes.UPDATE_QUESTION11]: updateQuestion11,
  [AppTypes.UPDATE_QUESTION12]: updateQuestion12,

  [AppTypes.RESET_QUESTIONS]: resetQuestions,
};

export default createReducer(INITIAL_STATE, HANDLERS);
