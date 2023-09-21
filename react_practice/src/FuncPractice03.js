import { useState } from "react";

export default function FuncPractice03() {
  let [inputValue, setInputValues] = useState({
    inputWriter: "", //작성자
    inputTitle: "", //제목
    comments: [], //입력한 내용
    inputSearch: "", //검색내용
    searchType: "title", //검색타입
    results: [], //검색결과
  });

  //   const onChangeInput = (event) => {
  //     const { value, name: inputName } = event.target;
  //     setInputValues({ ...inputValue, [inputName]: value }); //spread 연산자
  //   };

  const addComment = () => {
    const newComment = {
      writer: inputValue.inputWriter,
      title: inputValue.inputTitle,
    };
    setInputValues({
      ...inputValue,
      comments: [...inputValue.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    });
  };

  const onChange1 = (e) => {
    setInputValues({ ...inputValue, inputWriter: e.target.value });
  };

  const onChange2 = (e) => {
    setInputValues({ ...inputValue, inputTitle: e.target.value });
  };

  const searchComment = () => {
    const searchResult = inputValue.comments.filter((value) => {
      console.log(value[inputValue.searchType]);
      console.log(
        value[inputValue.searchType].includes(inputValue.inputSearch)
      );
      const type = value[inputValue.searchType];
      const include = type.includes(inputValue.inputSearch);
      if (!include) {
        return false;
      }
      return true;
      // if (value[this.state.searchType].includes(this.state.inputSearch)) {
      //     return true;
      // } else {
      //     return false;
      // }
    });
    setInputValues({ ...inputValue, results: searchResult });
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          type="text"
          id="writer"
          value={inputValue.inputWriter}
          onChange={(e) => onChange1(e)}
        />
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={inputValue.inputTitle}
          onChange={(e) => onChange2(e)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <form>
        <select
          value={inputValue.searchType}
          onChange={(e) =>
            setInputValues({ ...inputValue, searchType: e.target.value })
          }
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputValue.inputSearch}
          onChange={(e) =>
            setInputValues({ ...inputValue, inputSearch: e.target.value })
          }
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* [ {title, writer},{title, writer},{title, writer}... ] */}
          {inputValue.comments.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {inputValue.results.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
