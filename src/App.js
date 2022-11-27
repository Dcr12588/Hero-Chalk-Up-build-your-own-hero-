import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MyHero from './components/MyHero/MyHero'
import AddHero from './components/AddHero/AddHero'
import Auth from './components/Auth/Auth'
import Header from './components/nav/header'
import Heros from './components/Heros/Heros'


  function App() {

  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/addhero' element={<AddHero/>}/>
      <Route path='/myhero' element={<MyHero/>}/>
      <Route path='/heros/:id' element={<Heros/>}/>
      <Route path='/auth' element={<Auth/>}/>
     </Routes>
    </div>
  );
}

export default App;
