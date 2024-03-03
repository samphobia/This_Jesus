/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the editor's CSS

const FormContainer = styled.div`
  width: 80%;
  max-width: 1250px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: auto;

  button {
    border: none;
    border-radius: 5px;
  }

  .can {
    margin-left: 3rem;
    background: red;
  }
`;

const EditNewsForm = ({ selectedBlogs, setSelectedBlogs }) => {
  const [title, setTitle] = useState(selectedBlogs ? selectedBlogs.title : "");
  const [body, setBody] = useState(selectedBlogs ? selectedBlogs.body : "");
  const isEdit = Boolean(selectedBlogs);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogContentData = {
      title,
      body,
    };

    console.log("Submitted data:", blogContentData);

    // Handle updating or creating the news based on isEdit
    if (isEdit) {
      console.log("Update existing news:", selectedBlogs.id);
    } else {
      console.log("Create new news.");
    }

    setSelectedBlogs(null);
  };

  return (
    <FormContainer>
      <h2>{isEdit ? "Edit News" : "Create News"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />
        <label>Body:</label>
        <ReactQuill value={body} onChange={(value) => setBody(value)} />
        <br />
        <button type="submit">{isEdit ? "Update" : "Submit"}</button>
        <button
          className="can"
          type="button"
          onClick={() => setSelectedBlogs(null)}
        >
          Cancel
        </button>
      </form>
    </FormContainer>
  );
};

export default EditNewsForm;
