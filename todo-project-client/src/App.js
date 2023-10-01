import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  let [inputTodo, setInputTodo] = useState("");
  const [editedItem, setEditedItem] = useState(null);

  const inputChange = (e) => {
    setInputTodo((inputTodo = e.target.value));
    console.log(inputTodo);
  };

  useEffect(() => {
    const todoData = async () => {
      const res = await axios({
        method: "GET",
        url: "http://localhost:8000/todos",
      });
      console.log(res.data);
      setTodos(res.data);
      setLoading(false);
    };
    todoData();
  }, []);

  const addButton = () => {
    const todoData = async () => {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8000/todo",
        data: {
          title: inputTodo,
          done: 0,
        },
      });
      console.log(res.data);
      setTodos([...todos, res.data]);
    };
    todoData().then(setInputTodo((inputTodo = "")));
  };

  const deleteButton = (e) => {
    console.log(e.target.value);
    const todoData = async () => {
      const res = await axios({
        method: "DELETE",
        url: `http://localhost:8000/todo/${e.target.value}`,
        data: {
          id: e.target.value,
        },
      });
      console.log(res.data);
      const newArray = todos.filter(
        (item, index) => Number(item.id) !== Number(e.target.value)
      );
      console.log(newArray);
      setTodos(newArray);
    };
    todoData();
  };

  const checkboxButton = (e) => {
    const todoData = async () => {
      const res = await axios({
        method: "PATCH",
        url: `http://localhost:8000/todo/${e.target.value}`,
        data: {
          id: e.target.value,
          title: title,
          done: e.target.checked,
        },
      });
      console.log(res.data);
    };

    let title = "";
    const updatedItems = todos.map((item) => {
      if (Number(item.id) === Number(e.target.value)) {
        title = item.title;
        return { ...item, done: e.target.checked };
      }
      return item;
    });
    todoData();
    console.log(updatedItems);
    setTodos(updatedItems); // 상태 업데이트
  };

  const patchTodo = (e, id, newValue, done) => {
    if (e.key === "Enter") {
      const todoData = async () => {
        const res = await axios({
          method: "PATCH",
          url: `http://localhost:8000/todo/${id}`,
          data: {
            id: id,
            title: newValue,
            done: done,
          },
        });
        console.log(res.data);
      };
      todoData();
      e.target.readOnly = true;
      setEditedItem(null); // 수정 상태 해제
    }
  };

  const patchInput = (id, newValue) => {
    const updatedItems = todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: newValue };
      }
      return item;
    });
    setTodos(updatedItems);
  };

  const handleInputBlur = (id) => {
    if (editedItem && editedItem.id === id) {
      // 수정한 내용을 원래 값으로 되돌립니다.
      patchInput(id, editedItem.title);
      setEditedItem(null); // 수정 상태 해제
    }
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "tan",
        height: "90vh",
        marginLeft: "5%",
        marginTop: "20px",
      }}
    >
      <nav
        style={{
          fontWeight: "bold",
          fontSize: "x-large",
          backgroundColor: "antiquewhite",
          height: "50px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ToDoList
      </nav>
      <div style={{ margin: "30px 0px 0px 45px" }}>
        <input
          type="text"
          placeholder="Add your new Todo"
          value={inputTodo}
          onChange={inputChange}
        />
        <button
          style={{
            marginLeft: "5px",
            backgroundColor: "antiquewhite",
            borderRadius: "15%",
          }}
          onClick={addButton}
        >
          ADD
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos.map((value) => {
            return (
              <li
                style={{
                  listStyleType: "none",
                  display: "flex",
                  margin: "5px 0px",
                }}
                key={value.id}
              >
                <input
                  type="checkbox"
                  value={value.id}
                  onChange={checkboxButton}
                  checked={value.done}
                />
                <input
                  type="text"
                  readOnly
                  value={value.title}
                  onKeyPress={(e) =>
                    patchTodo(e, value.id, e.target.value, value.done)
                  }
                  onChange={(e) => patchInput(value.id, e.target.value)}
                  onClick={(e) => (e.target.readOnly = false)}
                  onBlur={() => handleInputBlur(value.id)}
                  onFocus={() => setEditedItem(value)}
                />
                <button
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "coral",
                    borderRadius: "10%",
                  }}
                  onClick={deleteButton}
                  value={value.id}
                >
                  DELETE
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
