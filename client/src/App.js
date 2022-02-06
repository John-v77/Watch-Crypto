import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import CoinList from './components/coinsList/CoinsList';
import ErrorPage from './components/auxiliars/errorPage/ErrorPage';
import NavBar from './components/auxiliars/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>

        <Routes>
          <Route path='/'             />
          <Route path='/register'     element={<Auth isLoging={false}/>}/>
          <Route path='/login'        element={<Auth isLoging={true}/>}/>
          <Route path='/coinsList'    element={<CoinList/>}/>
          <Route path='/*'            element={<ErrorPage/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
