import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import ForgetPassWord from './components/ForgetPassWord/ForgetPassWord';
import Header from './components/Header/Hedaer';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import RegPage from './components/RegPage/RegPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/blog" element = {<Blog/>}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/register" element = {<RegPage/>}/>
        <Route path="/forgotpassword" element = {<ForgetPassWord/>}/>
        <Route path="*" element = {<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
