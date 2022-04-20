import React, {Fragment} from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import LoginForm from './components/LoginForm.jsx';
import BookPage from './components/BookPage.jsx';
import BooksCatalog from './components/BooksCatalog.jsx';
import Profile from './components/Profile.jsx';
import ChangeProfile from './components/ChangeProfile.jsx';
import ReviewPage from './components/ReviewPage.jsx';
import UserBooks from './components/UserBooks.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';

function App() {

return (
  <div className="App">
    <Header/>
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/change_profile" element={<ChangeProfile />}/>
          <Route path="/catalog" element={<BooksCatalog/>}/>
          <Route path="/books/:slug" element={<BookPage />}/>
          <Route path="/write_review" element={<ReviewPage />}/>
          <Route path="/admin" element={<AdminPanel />}/>
          <Route exec path="/my_books:_type" element={<UserBooks />}/>
        </Routes>
      </Fragment>
    </Router>
  </div>

)}

export default App;