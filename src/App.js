import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} >
            <Route exact path="/" element={<Info />} />
            <Route path="/home/projects" element={<Projects />} />
            <Route path="/home/info" element={<Info />} />
            <Route path="/home/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
