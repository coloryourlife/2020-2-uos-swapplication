import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Switch>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
