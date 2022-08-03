// Simple JS functions which returns html/jsx
// Name should start with capital letter
// There should be one component per file
// which should be exported with default export
// Although Named export and non capital names are also supported

import React from 'react';
import Card from "./Card";
import Products from "../mockData/Products";
import "./app.css";

function App() {
  const renderCard = () => {
    return Products.map((data)=>{
      return <Card data={data}/>
    })
  }

  return (
    <div className="app">
      {renderCard()}
    </div>
  );
}

export default App;


