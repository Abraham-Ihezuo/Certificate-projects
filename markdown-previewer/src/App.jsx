import { useState } from "react";

const App = () => {
  const [textInput, setTextInput] = useState("");

  const getText = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };
  return (
    <div className="container-fluid">
      <textarea id="editor" onChange={getText} />
      <div id="preview">{textInput}</div>
    </div>
  );
};

export default App;
