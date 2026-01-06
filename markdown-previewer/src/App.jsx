import { useState } from "react";
import { marked } from "marked";

const App = () => {
  const [textInput, setTextInput] =
    useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);
  const [editorIsShowing, setEditorIsShowing] = useState(true);
  const [previewIsShowing, setPreviewIsShowing] = useState(true);

  const expandEditor = () => {
    setPreviewIsShowing(!previewIsShowing);
  };

  const expandPreview = () => {
    setEditorIsShowing(!editorIsShowing);
  };
  return (
    <div className="container-fluid">
      {editorIsShowing ? (
        <div
          className={`editorWrapper ${!previewIsShowing ? "maximized" : ""}`}
        >
          <div className="toolbar-editor-container">
            Editor
            {previewIsShowing ? (
              <img
                src="./images/arrows.png"
                onClick={expandEditor}
                alt="click to expand"
              />
            ) : (
              <img
                src="./images/minimize.png"
                onClick={expandEditor}
                alt="click to minimize"
              />
            )}
          </div>
          <textarea
            id="editor"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
      ) : null}

      {previewIsShowing ? (
        <div className="previewWrapper">
          <div className="toolbar-preview-container">
            Previewer
            {editorIsShowing ? (
              <img
                src="./images/arrows.png"
                onClick={expandPreview}
                alt="click to expand"
              />
            ) : (
              <img
                src="./images/minimize.png"
                onClick={expandPreview}
                alt="click to minimize"
              />
            )}
          </div>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{
              __html: marked.parse(textInput, { breaks: true }),
            }}
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
