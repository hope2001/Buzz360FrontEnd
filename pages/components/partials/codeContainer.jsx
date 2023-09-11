import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";



function CodeEditor({children}) {
    const code = `function helloWorld() {
      console.log("Hello, world!");
    }`;

    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={children}
        readOnly={true}
        editorProps={{ $blockScrolling: false }}
        className="w-full mx-auto"
      />
    );
  }

  export default CodeEditor;
