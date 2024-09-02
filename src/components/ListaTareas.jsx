import React from "react";
import { useState, useEffect } from "react";

const ListaTareas = () => {
  const [taskValue, setTaskValue] = useState("");
  const [taskToDo, setTaskToDo] = useState([
    "pasear al perro",
    "estudiar javascript",
    "lavar los platos",
    "comer",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskToDo([...taskToDo, taskValue]);
    setTaskValue("");
  };
  const deleteTask = (index) => {
    const confirmed = confirm("Esta seguro que desea borrar la tarea?");
    console.log(confirmed);
    if (confirmed) {
      setTaskToDo(taskToDo.filter((_, i) => i !== index));
    }
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskToDo));
  }, [taskToDo]);

  return (
    <div>
      <div className="d-flex container-fluid justify-content-center mb-5 mt-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese tarea a agendar"
            className="form-control border-3"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
          />
        </form>
      </div>
      <section className="d-flex flex-column align-items-center text-center mb-5">
        {taskToDo.map((tarea, index) => (
          <div key={index} className="card col-md-6 mb-3 mt-3 border-2">
            <div className="card-body fs-3">{tarea}</div>
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-danger col-md-2 align-self-center mb-4"
            >
              borrar
            </button>
          </div>
        ))}
        ;
      </section>
    </div>
  );
};

export default ListaTareas;
