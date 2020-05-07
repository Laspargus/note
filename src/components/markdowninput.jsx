import React, { useEffect, useState } from "react";

const MarkDownInput = ({ defTitle, defContent, handleChange, handleClick }) => {
  const [input, setInput] = useState({});
  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  useEffect(() => {
    handleChange(input);
  }, [input]);

  return (
    <form>
      <div className="form-group">
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          name="title"
          placeholder="title"
          value={defTitle}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="content"
          onChange={handleInputChange}
          rows="10"
          placeholder="content"
          value={defContent}
        ></textarea>
      </div>
      <input
        onClick={(e) => handleClick(e, input)}
        className="btn btn-warning"
        type="submit"
      />
    </form>
  );
};

export default MarkDownInput;
