// Props are Properties of a component
// Props are immutable - can't change
// Props data flows from parent to child


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


