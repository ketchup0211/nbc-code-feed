import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuillComponent({ value, onChange }) {
  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
    // ImageResize: {
    //   parchment: Quill.import("parchment"),
    //   modules: ["Resize", "DisplaySize", "Toolbar"],
    // },
  };

  // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];

  return (
    <ReactQuill
      theme="snow"
      style={{ height: "600px" }}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      toolbarOptions={toolbarOptions}
    />
  );
}

export default QuillComponent;
