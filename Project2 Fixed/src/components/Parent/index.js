import React, { useEffect, useState } from "react";
import { TextField } from '@material-ui/core';
import { Child } from "../Child";

export const Parent = () => {
  const [forms, setForms] = useState({
    author: "",
    text: "",
  });

  const handleChange = (e) => {
    const name = e.target.getAttribute("name");
    switch (name) {
      case "author": {
        setForms({ ...forms, author: e.target.value });
        break;
      }

      case "text": {
        setForms({ ...forms, text: e.target.value });
        break;
      }

      default: return
    }
  };

  return (
    <div>
      <span>This is a parent component</span>
      <input name="author" value={forms.author} onChange={handleChange} />
      <TextField id="standard-basic" label="Standard" />
    </div>
  );
};
