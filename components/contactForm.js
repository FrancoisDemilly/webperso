import {useEffect} from "react"
import {useForm, ValidationError} from '@formspree/react'
import styles from '../styles/contactForm.module.css'
import Image from 'next/image'


export default function ContactForm(){

  const [state, handleSubmit] = useForm("contactForm")


  if (state.succeeded) {
    return (<div className={`${styles.message}`}>
      <div className={`${styles.description}`}>
      <div className={`${styles.iconClose}`} onClick={() => window.location.reload(false)}>
      {/*window.location.reload(true) the browser will skip the cache and reload the page
       from the server. window.location.reload(false) will do the opposite, and load the
       page from cache if possible.*/}
      <Image  
        src="/icon/iconClose.svg"
        width={20}
        height={20} />
    </div>
       <p >Merci, je reviendrai vers vous au plus vite.</p> 
      </div>    
  </div>)
  }

  return (
    <>
    
    <form className={`${styles.contactForm}`} onSubmit={handleSubmit}>
      <input className={`${styles.inputBox}`} id="name" type="text" name="name" placeholder="Nom"/>
      <input className={`${styles.inputBox}`} id="email" type="email" name="email" placeholder="Email" />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <textarea className={`${styles.inputBox} ${styles.comment}`}  id="comment" type="text" name="comment" placeholder="Commentaires" />
      <button className={`${styles.contactButton}`} type="submit" disabled={state.submitting}>Contactez-moi</button>
      <ValidationError errors={state.errors} />
    </form>
     
    </>
  )
}

