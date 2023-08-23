import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  updateQuestion1: ["data"],
  updateQuestion2: ["data"],
  updateQuestion3: ["data"],
  updateQuestion4: ["data"],
  updateQuestion5: ["data"],
  updateQuestion6: ["data"],
  updateQuestion7: ["data"],
  updateQuestion8: ["data"],
  updateQuestion9: ["data"],
  updateQuestion10: ["data"],
  updateQuestion11: ["data"],
  updateQuestion12: ["data"],

  resetQuestions: null,
});

export const AppTypes = Types;
export const AppCreators = Creators;
