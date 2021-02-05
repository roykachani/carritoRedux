import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Components/common/Header';
import List from './Components/logical/List';
import Carry from './Page/Carry';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact component={List} />
        <Route path="/shoppingCart" exact component={Carry} />
      </Router>
    </Provider>
  );
}

export default App;
