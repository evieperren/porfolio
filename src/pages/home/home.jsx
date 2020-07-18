import React, { Fragment, useContext, useEffect } from 'react'
import Menu from '../../components/menu/menu'
import { CurrentPageContext } from '../../context/currentPageContext'
import styles from './home.module.scss'
import hr_desktop from '../../assets/imgs/hr-desktop.png'

const Home = () => {
  const {setCurrentPage} = useContext(CurrentPageContext)

  useEffect(() => {
    setCurrentPage("HOME")
  })

  return(
    <Fragment>
      <div className={styles.parallax}>
        <Menu></Menu>
        <div className={styles.content}>
          <h1>Evie
            <span>Perren</span>
          </h1>
          <p>Junior Front-End Software Developer. Currently working full time as at a health insurance company, applying my skills to work on exciting projects and support the business. Initially self-taught, I have recently completed an apprenticeship with Firebrand recieving a distinction. Developing strong UI/UX for customers, and building JavaScript knowledge.
          </p>
        </div>
      </div>
      <div className={styles.showcase}>
        <div className={styles.grid__two_cards}>
          <h2>FRONT END <br/> SOFTWARE DEVELOPER</h2>
          <p>Web development is a passion of mine as it gives me the ability to plan, structure and implement over a full-scale project. I enjoy challenging myself with complex projects whilst setting myself strict deadlines to adhere to. 

          Despite my core skills being in front-end web development, I most recently lead a project that involved building a complex API that was used to retrieve, create, edit or delete data from a MongoDB database. 

          Below are examples of some of my most complex work I have completed.
          </p>
        </div>
        <div className={styles.grid__single_card}>
          <img src={hr_desktop} alt="image of work"/>
        </div>
      </div>

    </Fragment>
  )
}
export default Home