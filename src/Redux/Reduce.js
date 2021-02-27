import { ADDTASK, DELETETASK, DONETASK, UPDATE } from "./Actiontype";

const initialState = {
  tasks: [
    { id: Math.random(), title: "React", isDONE: false },
    { id: Math.random(), title: "Node", isDONE: false },
    { id: Math.random(), title: "Java", isDONE: false },
  ],
};

const reduce = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case UPDATE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload.id ? { ...el, title: payload.newtask } : el
        ),
      };
    case DONETASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDONE: !el.isDONE } : el
        ),
      };

    default:
      return state;
  }
};
export default reduce;
