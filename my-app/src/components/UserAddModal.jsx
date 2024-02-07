import React, { useState } from "react";
import "./Modal.css";
import {
    Button,
    Select,
    InputLabel,
    MenuItem,
    Box,
    FormControl,
  } from "@mui/material";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [newExpense, setNewExpense] = useState({ selection: '', name: '', category: '', type: '', amount: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newExpense.selection === 1){
    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        ADD
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add Income and Expensses</h2>
            <form>
            <form style={{ textAlign: 'left', marginLeft: "30px" }} onSubmit={handleOnSubmit}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl style={{ width: '80%' }}>
              <InputLabel
                id="demo-simple-select-label"
                style={{ display: "flex", alignItems: "center" }}
                required
              >
                Select
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                style={{ backgroundColor: "#fff", height: "5.128vh" }}
                id="demo-simple-select"
                value={newExpense.selection}
                label=""
                onChange={(e) => setNewExpense({ ...newExpense, selection: e.target.value })}
              >
                <MenuItem value={1}>Income</MenuItem>
                <MenuItem value={2}>Expense</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={newExpense.name}
            onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
          />
          <br /><br />
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
          />
          <br /><br />
          <label htmlFor="type">Type: </label>
          <input
            type="text"
            name="type"
            value={newExpense.type}
            onChange={(e) => setNewExpense({ ...newExpense, type: e.target.value })}
          />
          <br /><br />
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          />
          <br /><br />
          <Button variant='contained' >Add</Button>
        </form>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}

    </>
  );
}