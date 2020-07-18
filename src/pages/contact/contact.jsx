import React, { useContext, useEffect } from 'react'
import { BackPathContext } from '../../context/backPathContext'
import BackButton from '../../components/back-button/back-button'
import { CurrentPageContext } from '../../context/currentPageContext'

const Contact = () => {
  const {setBackPath} = useContext(BackPathContext)
  const {setCurrentPage} = useContext(CurrentPageContext)

  useEffect(() => {
    setBackPath('/')
    setCurrentPage("CONTACT")
  })

  return(
    <div>
      <BackButton></BackButton>
      Contact page</div>
  )
}
export default Contact