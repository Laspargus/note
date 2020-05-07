import React, { useEffect, useState } from "react";

const MarkDownInput = ({ handleClick }) => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <form>
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
        className="btn btn-warning"
        type="submit"
        onClick={(e) => handleClick(e, input)}
      />
    </form>
  );
};

export default MarkDownInput;
