import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => setUsers(users))
    .catch(error => console.log(error))
  },[])


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home users={users} />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/:id' element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
