import React from "react";
import { useDispatch } from "react-redux";
import { deletetask, donetask } from "../Redux/Action";
import Edit from "./Edit";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span className={task.isDONE ? "done" : "h2title"}>{task.title} </span>
      <button
        className="btndelete"
        onClick={() => dispatch(deletetask(task.id))}
      >
        delete
      </button>
      <Edit task={task} />
      <button className="btndelete" onClick={() => dispatch(donetask(task.id))}>
        done
      </button>
    </div>
  );
};

export default TaskCard;
