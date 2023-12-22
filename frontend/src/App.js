import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexComponent from './Component/index-component/index-component.js';
import HomeComponent from './Component/home-component/home-component.js';
import LoginComponent from './Component/login-component/login-component.js';
import RegisterComponent from './Component/register-component/register-component.js';
import AddComponent from './Component/add-component/add-component.js';
import PrivateComponent from './Component/private-component/private-component.js';
import ListComponent from './Component/list-component/list-component.js';
import UpdateComponent from './Component/update-component/update-component.js';
import Add from './Component/index-component/add.js';
import LandingComponent from './Component/landing-component/landing-component.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexComponent />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<HomeComponent />}></Route>
            <Route path='home' element={<HomeComponent />}></Route>
            <Route path='add-task' element={<AddComponent />} />
            <Route path='add-list' element={<ListComponent/>} />
            <Route path='update-task/:id' element={<UpdateComponent/>} />
            <Route path='add' element={<Add/>} />
          </Route>

          <Route path='/' element={<LoginComponent />}></Route>
          <Route path='signup' element={<RegisterComponent />}></Route>
          <Route path='login' element={<LoginComponent />}></Route>
          <Route path='/landing-page' element={<LandingComponent/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
