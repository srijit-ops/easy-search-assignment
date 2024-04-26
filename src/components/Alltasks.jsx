import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { filterTask } from "../actions/actionCreators";

function Alltasks() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All",
  });
  const filterOptions = [
    {
      value: "completed",
      label: "Completed",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "all",
      label: "All",
    },
  ];

  useEffect(() => {
    dispatch(filterTask({ filter: selectedOption.value }));
  }, [selectedOption]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    } else if (filter === "pending") {
      return todo.completed === false;
    }
    return todo;
  });

  return todos?.length === 0 ? (
    <div className="flex justify-center items-center">
      <p className="text-gray-400 tracking-wider text-xl font-semibold mt-32">
        No task available. Add some tasks.
      </p>
    </div>
  ) : (
    <div>
      <div className="w-full flex justify-start items-center mb-8">
        <Select
          styles={{
            menu: (base) => ({
              ...base,
              width: "max-content",
              minWidth: "100%",
            }),
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={filterOptions}
        />
      </div>
      {filteredTodos?.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-gray-400 tracking-wider text-xl font-semibold mt-20">
            No task available.
          </p>
        </div>
      ) : (
        <div className="flex sm:justify-start justify-center items-start flex-wrap 2xl:gap-9 xl:gap-7 lg:gap-8 md:gap-7 sm:gap-11">
          {filteredTodos.map((todo) => {
            return (
              <div
                className="xl:w-[18%] lg:w-[22%] md:w-[30%] sm:w-[45%] w-full"
                key={todo.id}
              >
                <TaskCard
                  status={todo.completed}
                  name={todo.taskDetail}
                  date={todo.date}
                  time={todo.time}
                  id={todo.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Alltasks;
