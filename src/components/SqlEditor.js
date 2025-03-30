import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

function SqlEditor({ setValue, value }) {
  return (
    <div className="p-4 w-full bg-gray-300 border border-gray-500 rounded-lg shadow-lg">
      <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        theme="sqlserver"
        name="editor"
        width="100%"
        fontSize={18}
        minLines={20}  // Increased minimum lines for height
        maxLines={20}  // Increased maximum lines for height
        showPrintMargin={false}
        showGutter
        placeholder="Write your query here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={(value) => setValue(value)}
        showLineNumbers
      />
    </div>
  );
}

export default SqlEditor;
