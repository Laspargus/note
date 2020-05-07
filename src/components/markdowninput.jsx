import React, { useEffect, useState } from "react";

const MarkDownInput = ({ handleChange, handleClick }) => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <form
      onChange={() => {
        handleChange(input);
      }}
    >
      <div className="form-group">
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          name="title"
          placeholder="title"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="content"
          onChange={handleInputChange}
          rows="10"
          placeholder="content"
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
