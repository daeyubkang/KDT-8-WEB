// import BugComponent from "./BugComponent";
// import ClassComponent from "./ClassComponent";
// import FunctionComponent from "./FunctionComponent";
// import Test1 from "./test1";
// import Test2 from "./test2";
// import Event from "./Event";
// import EventClass from "./EventClass";
// import Counter from "./Counter";
// import Practice01 from "./practice01";
// import Board from "./Board";
// import CounterFunc from "./CounterFunc";
// import ToggleFunc from "./ToggleFunc";
// import ColorFunc from "./colorFunc";
// import FuncPractice from "./FuncPractice02";
// import FuncPractice03 from "./FuncPractice03";
// import FuncPractice04 from "./FuncPractice04";
// import RefPractice01 from "./refPractice01";
// import RefPractice02 from "./refPractice02";
// import Board02 from "./Board02";
// import LifePrac1 from "./LifePrac1";
// import LifePrac2 from "./LifePrac2";
// import LifeCycleClass from "./LifeCycleClass";
// import LifeCycleFunc from "./LifeCycleFunc";
// import RefPractice03 from "./refPractice03";
// import RefPractice04 from "./refPractice04";
// import Board03 from "./Board03";
// import UseMemo from "./UseMemo";
// import UseCallback from "./UseCallback";
// import UseReducer from "./UseReducer";
// import LoginPage from "./LoginPage";
// import Style from "./10_style/Style";
// import SassComponent from "./10_style/SassComponent";
// import StyledComponent from "./10_style/StyledComponent";
// import { Outlet } from "react-router-dom";
// import Header from "./12_router/Header";
// import Router from "./Router";
// import Practice01 from "./12_router/Practice01";
// import StyledPractice01 from "./10_style/StyledPractice01";
// import StyledPractice02 from "./10_style/StyledPractice02";
// import Form from "./13_Form/Form";
// import FormPractice from "./13_Form/FormPractice";
// import { useState } from "react";
// import MyContext from "./14_Context/store/lang-context";
import LangSelector from "./14_Context/LangSelector";
import LanguageProvider from "./14_Context/LangProvider";
// import MyContextPractice01 from "./14_Context/store/context-practice01";
import ProviderPractice01 from "./14_Context/ProviderPractice01";
import SelectorPractice01 from "./14_Context/SelectorPractice01";
import ProviderPractice02 from "./14_Context/ProviderPractice02";
import SelectorPractice02 from "./14_Context/SelectorPractice02";
import Cart from "./14_Context/Cart";

function App() {
  return (
    <>
      <ProviderPractice02>
        <SelectorPractice02></SelectorPractice02>
        <Cart></Cart>
      </ProviderPractice02>
      {/* <ProviderPractice01>
        <SelectorPractice01></SelectorPractice01>
      </ProviderPractice01> */}
      {/* <LanguageProvider>
        <LangSelector></LangSelector>
      </LanguageProvider> */}
      {/* <MyContext.Provider value={{ language, setLanguage }}>
        <LangSelector></LangSelector>
      </MyContext.Provider> */}
      {/* <FormPractice></FormPractice> */}
      {/* <Form></Form> */}
      {/* ver2 */}
      {/* <Practice01></Practice01>
      <Outlet></Outlet> */}
      {/* ver1 */}
      {/* <Router></Router> */}
      {/* <StyledPractice02></StyledPractice02> */}
      {/* <StyledPractice01></StyledPractice01> */}
      {/* <StyledComponent></StyledComponent> */}
      {/* <SassComponent></SassComponent> */}
      {/* <Style></Style> */}
      {/* <LoginPage></LoginPage> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseCallback></UseCallback> */}
      {/* <UseMemo></UseMemo>
      <Board03></Board03>
      <RefPractice03></RefPractice03>
      <RefPractice04></RefPractice04> */}
      {/* <LifeCycleClass></LifeCycleClass>
      <LifeCycleFunc></LifeCycleFunc>
      <LifePrac1></LifePrac1>
      <LifePrac2></LifePrac2>
      <Board02></Board02> */}
      {/* <Board></Board> */}
      {/* <RefPractice02></RefPractice02> */}
      {/* <RefPractice01></RefPractice01> */}
      {/* <FuncPractice04></FuncPractice04> */}
      {/* <FuncPractice03></FuncPractice03> */}
      {/* <FuncPractice></FuncPractice> */}
      {/* <ColorFunc></ColorFunc> */}
      {/* <ToggleFunc></ToggleFunc> */}
      {/* <CounterFunc></CounterFunc> */}
      {/* <Board></Board> */}
      {/* <Practice01></Practice01> */}
      {/* <Counter></Counter> */}
      {/* <Event></Event>
      <EventClass></EventClass> */}
      {/* <Test1></Test1>
      <Test2></Test2> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      >
        안녕
      </FunctionComponent> */}
      {/* <BugComponent></BugComponent> */}
    </>
  );
}

export default App;
