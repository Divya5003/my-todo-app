import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import { Switch, FormGroup, FormControlLabel, TextField, Button } from "@mui/material";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
          setItems(res.data);
          setFiltered(res.data);
        });
      }, [])

    const [filtered, setFiltered] = useState();

    function handleChangeCompleted(event) {
        setFiltered(items.filter(item => {
            return item.completed === event.target.checked;
        }));
    }

    const [searched, setSearched] = useState("");

    function handleChangeSearch(event) {
        setSearched(event.target.value);
    }

    function handleClick() {
        setFiltered(items.filter(item => {
            return item.title === searched;
        }));
    }

    const textStyle = {padding: "9px", textAlign: "center", color: "#539165"};
    const inputStyle = {width: "20%"}

    return (
        <main>
            <header>
                <h1 style={textStyle}>ToDo App</h1>
            </header>
            <FormGroup>
                <FormControlLabel control={<Switch
                    onChange={handleChangeCompleted}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} style={textStyle} label="Completed Tasks" />
            </FormGroup>
            <FormGroup style={inputStyle}>
                <TextField onChange={handleChangeSearch} id="outlined-basic" label="Search" variant="outlined" />
                <Button className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn" onClick={handleClick} variant="contained" color="success">Search</Button>
            </FormGroup>
            <h3 style={textStyle}>Item List</h3>
            <ItemList
                items={filtered}
            />

        </main>
    );
}

export default App;