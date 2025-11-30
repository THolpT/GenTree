import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditorPage from './components/Pages/EditorPage';
import RelativeCard from './components/Pages/RelativeCard';
import AuthPage from './components/Pages/AuthPage';
import RegPage from './components/Pages/RegPage';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
      <Route path='/'element={<AuthPage/>} />
      <Route path='/reg' element={<RegPage/>}/>
      <Route path='/editor' element={<EditorPage/>}/>
      <Route path='/persons' element={<RelativeCard/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
