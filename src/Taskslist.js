import React, { useState } from "react";
import { useSelector } from "react-redux";
import Inpute from "./Component/Inpute";
import TaskCard from "./Component/TaskCard";

const Taskslist = () => {
  const [statut, setStatut] = useState("all");
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="bordr">
      <Inpute />

      <button className="btnfinal" onClick={() => setStatut("all")}>
        all
      </button>
      <button className="btnfinal" onClick={() => setStatut("done")}>
        done
      </button>
      <button className="btnfinal" onClick={() => setStatut("undone")}>
        undone
      </button>
      {statut === "done"
        ? tasks
            .filter((el) => el.isDONE === true)
            .map((task) => <TaskCard task={task} key={task.id} />)
        : statut === "undone"
        ? tasks
            .filter((el) => el.isDONE === false)
            .map((task) => <TaskCard task={task} key={task.id} />)
        : tasks.map((task) => <TaskCard task={task} key={task.id} />)}
    </div>
  );
};

export default Taskslist;
