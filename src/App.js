import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import BooksList from './components/booksList';
import CreateBook from './components/createBook';
import PricesList from './components/pricesPage'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar />
        <Route path="/" exact component={BooksList} />
        <Route path="/create" component={CreateBook} />
        <Route path="/pricing" component={PricesList} />
      </div>
    </Router>
  );
}

export default App;
