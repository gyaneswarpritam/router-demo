// App.js

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import RouteWrapper from './RouteWrapper';
// import Login from './components/Login';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<RouteWrapper component={About} isAuthenticated={isAuthenticated} />} />
//         <Route path="/contact" element={<RouteWrapper component={Contact} isAuthenticated={isAuthenticated} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <RouteWrapper>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </RouteWrapper>
      </Routes>
    </Router>
  );
};

export default App;
