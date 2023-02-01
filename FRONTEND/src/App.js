import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import Home from './pages/Home/Home';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
