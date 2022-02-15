import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Pages/auth/Auth';
import CoinList from './components/Pages/coinsList/CoinsList';
import ErrorPage from './components/auxiliars/errorPage/ErrorPage';
import NavBar from './components/auxiliars/navbar/NavBar';
import { UserContextProvider } from './components/auxiliars/Context';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
      <NavBar/>

        <Routes>
          <Route path='/'             />
          <Route path='/register'     element={<Auth isLoging={false}/>}/>
          <Route path='/login'        element={<Auth isLoging={true}/>}/>
          <Route path='/coinsList'    element={<CoinList/>}/>
          <Route path='/*'            element={<ErrorPage/>}/>
          
        </Routes>
    </UserContextProvider>
    </div>
  );
}

export default App;
