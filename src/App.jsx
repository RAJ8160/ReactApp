import './App.css';
import Home from './Home/Home';
import Contact from './contact';
import About from './About';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Faculty from './Faculty';
import { Create } from './Facultyapi/cretae';
import { Read } from './Facultyapi/read';
import { Update } from './Facultyapi/Update';
import { LMS } from './LMS/LMS';
import Layout from './Layout';

function App() {

  
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faculty' element={<Faculty/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/lms' element={<LMS/>}/>
         {/* <Route path='/student' element={<Student/>}/> */}
          </Route> 
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
