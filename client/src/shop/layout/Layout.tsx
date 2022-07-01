import {Outlet} from 'react-router-dom'
import Footer from './footer/footer'
import { Navbar } from './header/Navbar'

const Layout= ()=>{
    return (
      <main className="App">
        <Navbar />
        <div style={{ height : "90px" }}></div>
        <Outlet />
        <Footer />
      </main>
    );
}

export default Layout