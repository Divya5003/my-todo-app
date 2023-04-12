import React from "react";
import { Card } from "@mui/material";

function ItemList(props) {
    const ulStyle = { border: '2px solid #A4BC92', margin: "auto", width: '50%', listStyleType: 'none' }
    const cardStyle = { fontSize: "18px", margin: "10px", background: "#DDFFBB" }
    return (
        <ul style={ulStyle}>
            {props.items && props.items.length > 0 && props.items.map((item) => (
                <Card style={cardStyle}>
                <li key={item.id}>
                    Title :{item.title}
                    <br />
                    Completion Status: {item.completed ? "Completed" : "Not completed"}
                    <br />
                    ID: {item.id}
                </li>
                </Card>
            ))}
        </ul>
    );
}

export default ItemList;