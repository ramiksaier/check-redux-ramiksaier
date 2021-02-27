import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../Redux/Action";
const Inpute = () => {
  const [title, settitle] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    settitle("");
    addtask({ title });
  };
  const dispatch = useDispatch();
  return (
    <form onSubmit={handelSubmit}>
      <input
        className="inputtext"
        type="text"
        placeholder="add new task"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button
        className="btndelete"
        onClick={() =>
          dispatch(addtask({ id: Math.random(), title, isDone: false }))
        }
      >
        add new exercice
      </button>
    </form>
  );
};

export default Inpute;
