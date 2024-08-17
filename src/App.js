import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Theme from './theme/Theme';
import Home from './pages/home/Home';
import GsapAnimation from './pages/gsap/GsapAnimation';
import FramerMotion from './pages/framer-motion/FramerMotion';

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Theme/>}>
  <Route path='/' element={<Home/>} />
  <Route path='/gsap' element={<GsapAnimation/>} />
  <Route path='/framer-motion' element={<FramerMotion/>} />
  </Route>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
