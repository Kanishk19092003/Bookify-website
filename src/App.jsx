import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import MyNavbar from "./components/MyNavbar";

// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import List from "./pages/List";
import Home from "./pages/Home";
import BookDetailPage from "./pages/Detail";

function App() {

  return (
    <div>
      <MyNavbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/book/list' element={<List/>}/>
      <Route path='/book/view/:bookId' element={<BookDetailPage/>}/>

    </Routes>
    </div>
  )
}

export default App
