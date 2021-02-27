import { ADDTASK, DELETETASK, DONETASK, UPDATE } from "./Actiontype";

export const addtask = (payload) => {
  return {
    type: ADDTASK,
    payload,
  };
};
export const deletetask = (payload) => {
  return {
    type: DELETETASK,
    payload,
  };
};
export const update = (id, newtask) => {
  return {
    type: UPDATE,
    payload: { id, newtask },
  };
};
export const donetask = (id) => {
  return { type: DONETASK, payload: id };
};
