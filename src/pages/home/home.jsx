import React, { Fragment, useContext, useEffect } from 'react'
import Menu from '../../components/menu/menu'
import { CurrentPageContext } from '../../context/currentPageContext'

const Home = () => {
  const {setCurrentPage} = useContext(CurrentPageContext)

  useEffect(() => {
    setCurrentPage("HOME")
  })
  
  return(
    <Fragment>
      <Menu></Menu>
      <h1>Home page</h1>

    </Fragment>
  )
}
export default Home