import React, { useContext, useEffect } from 'react'
import { BackPathContext } from '../../context/backPathContext'

const BackButton = () => {
  const {backPath} = useContext(BackPathContext)

  return (
    <a href={backPath}>Back</a>
  )
}
export default BackButton