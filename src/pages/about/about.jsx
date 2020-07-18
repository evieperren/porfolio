import React, { useContext, useEffect } from 'react'
import BackButton from '../../components/back-button/back-button'
import { BackPathContext } from '../../context/backPathContext'
import { CurrentPageContext } from '../../context/currentPageContext'

const About = () => {
  const {setBackPath} = useContext(BackPathContext)
  const {setCurrentPage} = useContext(CurrentPageContext)

  useEffect(() => {
    setBackPath('/')
    setCurrentPage('ABOUT')
  })
  return(
    <div>
      <BackButton></BackButton>
      About</div>
  )
}
export default About