import "./App.css";

function App() {
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  let item2 = users.filter((txt) => {
    return txt.age > 20;
  });
  console.log(item2);
  return (
    <>
      {users.map((txt, index) => {
        if (txt.vip) {
          return <h1 key={txt.id}>{txt.name}</h1>;
        }
      })}
      <br />
      <br />

      {item2.map((value, index) => {
        return <h1 key={value.id}>{value.name}</h1>;
      })}

      {/* {item2.map((value, index) => {
        return <h1>{value}</h1>;
      })} */}

      {/* <div className="test">{title}</div>
      <br />
      <div className="input">
        아이디: <input type="text" />
        <br />
        <br />
        비밀번호: <input type="text" />
      </div>

      <br />

      <div style={{ display: "flex" }}>
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div> */}
    </>
  );
}

export default App;
