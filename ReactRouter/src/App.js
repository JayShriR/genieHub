import { NavLink, Route  , Routes} from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import About from './components/About';
import MainHeader from './components/MainHeader';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Support">Support</NavLink></li>
          <li><NavLink to="/labs">labs</NavLink></li>
          <li><NavLink to="*">NotFound</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          {/* Default route */}
          <Route index element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Support' element={<Support/>}/>
            <Route path='/labs' element={<Labs/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
