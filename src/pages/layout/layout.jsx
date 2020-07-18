import React, { Fragment, useState } from 'react'
import Home from '../home/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../about/about'
import Contact from '../contact/contact'
import { CurrentPageContext } from '../../context/currentPageContext'
import { BackPathContext } from '../../context/backPathContext'
import styles from './layout.module.scss'

const Layout = () => {
  const [currentPage, setCurrentPage] = useState(null)
  const [backPath, setBackPath] = useState(null)

  switch(currentPage){
    case 'HOME':
      console.log('home page')
      break
  }
  return (
    <Fragment>
      <Router>
        <Switch>
          <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
            <BackPathContext.Provider value={{backPath, setBackPath}}>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
            </BackPathContext.Provider>
          </CurrentPageContext.Provider>
        </Switch>
      </Router>
    </Fragment>
  )
}
export default Layout