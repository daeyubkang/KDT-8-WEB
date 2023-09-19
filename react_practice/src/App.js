import BugComponent from "./BugComponent";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Test1 from "./test1";
import Test2 from "./test2";

function App() {
  return (
    <>
      {/* <Test1></Test1>
      <Test2></Test2> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <ClassComponent></ClassComponent> */}
      <FunctionComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      >
        안녕
      </FunctionComponent>
      {/* <BugComponent></BugComponent> */}
    </>
  );
}

export default App;
