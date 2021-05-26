import React, { useEffect, useState } from 'react';
import {BrowserRouter, BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import moonIcon from './assets/images/moon.svg'
import sunIcon from './assets/images/sun.svg'
import Layout from './componenets/Layout';
import About from './pages/About';
import Home from './pages/Home';



const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)


  useEffect(() => {
    if (window.localStorage.getItem('DarkTheme') !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem('DarkTheme')))
    }
  }, [])


  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }


    window.localStorage.setItem('DarkTheme', JSON.stringify(darkTheme))

  }, [darkTheme])



  return (
    <div>
      {/* <div onClick={() => setDarkTheme(!darkTheme)}>
        <img src={darkTheme ? sunIcon : moonIcon} alt="icon"
          className="mx-auto m-6"
        />
      </div>
      <h1 className="text-5xl rounded-md p-10 font-bold bg-white dark:bg-gray-600 text-gray-700 dark:text-white">
        I ❤ TailwindCSS

      </h1> */}
      <Router>
        <Switch>
        <Layout darkTheme={darkTheme} setDarkTheme={setDarkTheme} >
        <Route   exact path="/" component={Home}/>
         <Route path="/About" component={About}/>
        </Layout>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
