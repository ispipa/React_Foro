import './App.css';
import Home from './components/Index/Home';
import Messages from './components/Index/Messages';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <>
    <Login />
    <Register/>
    {/* <Home/> */}
    <Messages/>
    </>
  );
}

export default App;
