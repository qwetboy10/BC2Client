import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const data = [
    {
        name: "Bob",
        division: "Novice",
        score: 320
    }
];
const columns = [
    
]

export default function (props) {
    return (
        <BootstrapTable keyField="name" data={data} columns={}
    )
}
