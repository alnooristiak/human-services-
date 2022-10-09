import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Survices from './Pages/Home/Survices';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/survices/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/survices' element={<Survices></Survices>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
