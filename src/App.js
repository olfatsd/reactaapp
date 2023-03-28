import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Menu from './components/Menu';
import Page1 from './components/Page1';
import Page2 from './components/page2';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
