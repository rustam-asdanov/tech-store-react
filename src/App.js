import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./product-management/ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
      </header>

      <Router>
        <Link to="/productList">
          <button>Go To Product List</button>
        </Link>
        <Routes>
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
