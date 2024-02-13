import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageActions } from "@xeger/quill-image-actions";
import { ImageFormats } from "@xeger/quill-image-formats";
import imageHandler from "./ImageHandler";
import { useMemo, useRef } from "react";

Quill.register("modules/imageActions", ImageActions);
Quill.register("modules/imageFormats", ImageFormats);

function QuillComponent({ value, onChange, randomId }) {
  const quillRef = useRef(null);

  const toolbarOptions = [
    ["link", "image"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"], // 굵기, 기울기, 밑줄 등 설정
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ], // 기호 매기기 설정
    [{ color: [] }, { background: [] }, { align: [] }],
  ];

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: function () {
            // 이미지 삽입 및 업로드 기능
            imageHandler(quillRef);
          },
          link: function (value) {
            //링크 삽입하기 기능
            if (value) {
              var href = prompt("Enter the URL");
              this.quill.format("link", href);
            } else {
              this.quill.format("link", false);
            }
          },
        },
      },
      imageActions: {},
      imageFormats: {},
    };
  }, []);

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
    "width",
    "float",
    "width",
    "height",
  ];

  return (
    <ReactQuill
      theme="snow"
      placeholder="내용을 작성해주세요."
      style={{ height: "600px", width: "60%" }}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      toolbarOptions={toolbarOptions}
      randomId={randomId}
      ref={quillRef}
    />
  );
}

export default QuillComponent;
