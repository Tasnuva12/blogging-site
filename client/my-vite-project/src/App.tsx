// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Navbar from './Components/Navbar';
import Home from './Components/Home';



const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Signup />} />
     <Route path="/login" element={<Signin />} />
     <Route path="/home" element={<Home />} />
     

     </Routes>
    </Router>
  );
};

export default App;
