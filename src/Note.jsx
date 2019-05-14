import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  display: block;
  padding: 6px;
  margin-bottom: 3px;
  font-size: 20px;
`;

const Textarea = styled.textarea`
  border: none;
  outline: none;
  height: 10em;
  width: 20em;
  resize: none;
  padding: 6px;
  margin-top: 3px;
  font-size: 15px;
`;

class Note extends Component {
  state = { 
    id: null,
    title: null,
    content: null
   }

   handleValueChange(e) {
      this.setState({ [e.target.id]: e.target.value });
   }

  render() { 
    return (
      <div>
        <Input
          type="text"
          id="title"
          placeholder="Untitled"
          value={this.state.title}
          onChange={this.handleValueChange.bind(this)}
        />

        <Textarea
          id="content"
          placeholder="Note content"
          value={this.state.content}
          onChange={this.handleValueChange.bind(this)}
        />
      </div>
    );
  }
}


 
export default Note;