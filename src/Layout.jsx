import Footer from "./Footer";
import Header from "./Header/Header";
import {Link,Outlet} from "react-router-dom"
function Layout(){
    return(
        <>
        <div className="container">
        <div className="row">
             <Header/>
        </div>
       
         <Outlet/>
         <div className="row">
              <Footer/>
         </div>
         </div>
        </>
    );
}

export default Layout   