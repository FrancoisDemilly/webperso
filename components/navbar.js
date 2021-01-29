import {useState} from "react"
import styles from "../styles/navbar.module.css"
import Image from "next/image"


export default function Navbar() {

  const [open, setOpen] = useState(false)
  
  const handleMenu = () => {
    setOpen(!open)
  }

  let inputStyle = ""
  open ? 
    inputStyle = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : inputStyle = {transform : 'translate(-100%)', transition: 'all, 1s, ease in'}

  return(
    <>
    <div onClick={handleMenu} className={styles.hamburger}>
      <Image src="/icon/hamburger.svg" width={25} height={25}/>
    </div>
    <nav className={styles.navbar} style={inputStyle} >
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.navText}`}>
            <a href="#home" onClick={handleMenu}>Maison</a>
        </li>
        <li className={`${styles.listItem} ${styles.navText}`}>
            <a href="#about" onClick={handleMenu}>À propos</a>
        </li>
        <li className={`${styles.listItem} ${styles.navText}`}>
            <a href="#projects" onClick={handleMenu}>Projets</a>
        </li>
        <li className={`${styles.listItem} ${styles.navText}`}>
            <a href="#skills" onClick={handleMenu}>Technos</a>
        </li>
        <li className={`${styles.listItem} ${styles.navText}`}>
            <a href="#contact" onClick={handleMenu}>Contact</a>
        </li>
        <div className={`${styles.iconContainer}`}>
          <div >
            <a href='https://github.com/FrancoisDemilly' target='_blank'>
              <Image src="/icon/iconGitHub.svg" 
              width={30}
              height={30}
              />
            </a>
          </div>
          <div>
            <a href='https://ca.linkedin.com/in/francois-demilly-50378930' target='_blank'>
              <Image
                src="/icon/iconLinkedin.svg"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </ul>
    </nav>
 

    </>
  )


}