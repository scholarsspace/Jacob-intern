import React from 'react'

import { Switch,Route } from 'react-router-dom'
import About from "./Component1/About/about"
import Home from "./Component1/Home"
import Blog from "./Component1/Blog/Blog"
import Contact from "./Component1/Contact/contact"
import Header from "./Component1/Header/Header"
import Footer from "./Component1/Footer/Footer"

let App = ()=>{ 
  return (
    <div>
      <Header />
      <Switch>
        
        <Route exact path="/">
          <Home />
          </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/blog">
        <Blog />
        </Route>
        <Route path="/contact">
        <Contact />
        </Route>
        <Route path="*">
          <h1>not found</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App