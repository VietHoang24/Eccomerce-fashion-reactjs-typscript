import {Outlet} from 'react-router-dom'
import Footer from '../partitials/footer/footer'
import { Navbar } from '../partitials/Navbar'

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