import "./App.css";
import { useState } from "react";
import Item from "./components/Item.jsx";

function App() {
  const [task, setTask] = useState({});
  const [items, changeItems] = useState([]);
  function addItem(task) {
    const newTask = {
      id: Date.now(),
      name: task,
    };
    changeItems([newTask, ...items]);
    setTask({ id: "", name: "" });
  }

  function deleteItem(id) {
    changeItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <div className="bg-white rounded-3xl w-[20rem] p-[4px] flex justify-between shadow-xl m-auto mt-[10rem]">
        <input
          type="text"
          placeholder="Add task"
          className="text-green-600 text-left self-center  w-[90%] h-[100%] ml-[12px] focus:outline-none cursor-text uppercase"
          value={task.name}
          onChange={(event) => setTask(event.target.value)}
        />
        <button
          className="bg-green-500  hover:bg-green-700 size-10 rounded-3xl text-xl text-white cursor-pointer transition delay-50"
          onClick={() => addItem(task)}
        >
          +
        </button>
      </div>
      <div className="mt-[1rem]" id="user-items-container">
        {items.map((item) => (
          <Item key={item.id}>
            <div className="w-[20rem] h-[40px] p-[4px] mb-[1rem] bg-white m-auto flex justify-between items-center">
              <p className="ml-[12px] font-light uppercase">
                {item.name + " "}
              </p>
              <button
                onClick={() => deleteItem(item.id)}
                className="rounded-2xl text-black text-xl font-bold size-9 cursor-pointer hover:text-gray-700"
              >
                X
              </button>
            </div>
          </Item>
        ))}
      </div>
    </div>
  );
}

export default App;
