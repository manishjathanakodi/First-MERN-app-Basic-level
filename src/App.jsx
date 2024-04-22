import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Appbar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddAnime from './AddAnime';
import Animes from './Animes';
import Anime from './Anime';

function App() {

  return (
    <>
    <Router>
      <Appbar/>
      <Routes>
        <Route path={"/admin/signup"} element={<SignUp/>}/>
        <Route path={"/admin/login"} element={<SignIn/>}/>
        <Route path={"/admin/addcontent"} element={<AddAnime/>}/>
        <Route path={"/admin/animes"} element={<Animes/>}/>
        <Route path={"/admin/animes/:id"} element={<Anime/>}/>





      </Routes>
    </Router>
      
    </>
  )
}

export default App
