import './App.scss';
import {Routes, Route, NavLink} from 'react-router-dom';
import {Welcome} from './Welcome';
import  {Home}  from './Home';
import { Products } from './Products';
import { Product } from './Product';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/' className={({isActive})=>isActive?'active':'notActive'}>HOME</NavLink>
        <NavLink to='/welcome' className={({isActive})=>isActive?'active':'notActive'}>WELCOME</NavLink>
        <NavLink to='/products' className={({isActive})=>isActive?'active':'notActive'}>Products</NavLink>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
