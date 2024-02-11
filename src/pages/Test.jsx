import React from "react";
import DOMPurify from "dompurify";
// import { useLocation } from "react-router-dom";

function Test({ quillValue }) {
  //   const location = useLocation();
  //   console.log("state", location);
  //   const { quillValue } = location.state || "";
  const sanitizer = DOMPurify.sanitize;
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizer(quillValue) }}></div>
  );
}

export default Test;
