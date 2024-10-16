import { useEffect } from 'react';
import Navbar from "./../components/navbar.js"
import Footer from "./../components/footer.js";
import React from 'react';
import { Outlet } from 'react-router-dom';

const spinner = () => {
  setTimeout(() => {
      const spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
          spinnerElement.classList.remove('show');
      }
  }, 1);
};



function App({ children }) {

  useEffect(() => {

    // window.onload = function(){ 
    //   document.getElementById("spinner").classList.remove("show");
    // }
    spinner();
  });

  return (
    <>
      <Navbar/>
      <main>
      <Outlet />
      </main>

      <Footer/>
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
              </div>
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
