import logo from './logo.svg';
import './App.css';
import { Header } from './layout/Header';
import { Link, Outlet, Route, Router } from 'react-router-dom';
import { Switch } from '@mui/material';

function App() {
  return (
    <div className="App">
      {/* pass to header which page it is in */}
        <Header />
      <nav>
      <Link to='/login'>Login page</Link>       
      <Link to='/temas'>Themes</Link>
      </nav>
     <Outlet />
     
    
     
    </div>
  );
}

export default App;
