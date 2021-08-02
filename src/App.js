import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Welcome from './pages/Welcome/Welcome';
import Voting from './pages/Voting/Voting'
import Breeds from './pages/Breeds/Breeds'
import Gallery from './pages/Gallery/Gallery'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { DogState } from './store/DogStore/DogState';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <div className="content">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/voting" component={Voting} />
            <Route path="/breeds" component={Breeds} />
            <Route path="/gallery" component={Gallery} />
          </Switch>

        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;


