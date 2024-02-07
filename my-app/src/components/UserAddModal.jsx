
import React from 'react'
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  Box,
  FormControl,
} from "@mui/material";

const UserAddModal = ({ hide }) => {
 
  return (
    <div>
      <div
        className="modal-wrapper"
        onClick={() => hide()}
        style={{
          position: ' fixed',
          left: '0',
          right: '0',
          bottom: '0',
          top: '0',
          backgroundColor: 'rgba(230, 226, 226, 0.804)'
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          bottom: '27vh',
          backgroundColor: '#fff',
          borderRadius: '10px',
          width: '35vw',
          height: '48vh'
        }}
      >
        <h4>New Expense Details</h4>
        <form style={{ textAlign: 'left', marginLeft: "30px" }}>
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
                // id="demo-simple-select"
                // value={newExpense.selection}
                label=""
                // onChange={(e) => setNewExpense({ ...newExpense, selection: e.target.value })}
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
            // name="name"
            // value={newExpense.name}
            // onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
          />
          <br /><br />
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            // value={newExpense.category}
            // onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
          />
          <br /><br />
          <label htmlFor="type">Type: </label>
          <input
            type="text"
            name="type"
            // value={newExpense.type}
            // onChange={(e) => setNewExpense({ ...newExpense, type: e.target.value })}
          />
          <br /><br />
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            // value={newExpense.amount}
            // onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          />
          <br /><br />
          <Button variant='contained' onClick={hide}>Add</Button>
        </form>
      </div>
    </div>
  )
}
export default UserAddModal