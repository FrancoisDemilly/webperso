import Head from 'next/head'
import HomeStyles from '../styles/Home.module.css'

import Navbar from '../components/navbar'
import ContactForm from '../components/contactForm'

import LandingStyles from '../styles/Landing.module.css'
import AboutStyles from '../styles/About.module.css'
import ProjectsStyles from '../styles/Projects.module.css'
import SkillsStyles from '../styles/Skills.module.css'
import ContactStyles from '../styles/Contact.module.css'

import Image from 'next/image'
import {useState, useLayoutEffect, useRef} from "react"



export default function Home() {
 
  /*project  section animation transition  slide in*/
  const [show, doShow] = useState({contDiv: false, gitDiv: false, recDiv: false,
    calcDic: false, simDiv: false, ticDic: false, pomDiv: false})

  const contact = useRef(null)
  const github = useRef(null)
  const recipe = useRef(null)
  const calculator = useRef(null)
  const simon = useRef(null)
  const tictactoe = useRef(null)
  const pomodoro = useRef(null)



  useLayoutEffect(() => {
    const topPos = elt => elt.getBoundingClientRect().top
    const bottomPos = elt => elt.getBoundingClientRect().bottom
    const conPos = topPos(contact.current) - ((topPos(contact.current) - bottomPos(contact.current)) / 3)
    const gitPos = topPos(github.current) - ((topPos(github.current) - bottomPos(github.current)) / 3)
    const recPos = topPos(recipe.current) - ((topPos(recipe.current) - bottomPos(recipe.current)) / 3)
    const calcPos = topPos(calculator.current) - ((topPos(calculator.current) - bottomPos(calculator.current)) / 3)
    const simPos = topPos(simon.current) - ((topPos(simon.current) - bottomPos(simon.current)) / 3)
    const ticPos = topPos(tictactoe.current) - ((topPos(tictactoe.current) - bottomPos(tictactoe.current)) / 3)
    const pomPos = topPos(pomodoro.current) - ((topPos(pomodoro.current) - bottomPos(pomodoro.current)) / 3)


    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
    
      if(conPos < scrollPos) {
        doShow(state => ({...state, contDiv: true}))
      }
      if ( gitPos < scrollPos) {
        doShow(state => ({...state, gitDiv: true}))
      }
      if ( recPos < scrollPos) {
        doShow(state => ({...state, recDiv: true}))
      }
      if ( calcPos < scrollPos) {
        doShow(state => ({...state, calcDiv: true}))
      }
      if ( simPos < scrollPos) {
        doShow(state => ({...state, simDiv: true}))
      }
      if ( ticPos < scrollPos) {
        doShow(state => ({...state, ticDiv: true}))
      }
      if ( pomPos < scrollPos) {
        doShow(state => ({...state, pomDiv: true}))
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
    /*
      remove the event listener in the cleanup function
      to prevent memory leaks
    */
  }, [])


  let animeCont = "" /*fom right to left*/
    show.contDiv ?  animeCont = {transform : 'translate(0%)', transition: 'all, 0.1s, ease in'}  
    : animeCont = {transform : 'translate(-100%)', transition: 'all, 1s, ease in'}

    let animeGit = "" 
    show.gitDiv ?  animeGit = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : animeGit = {transform : 'translate(100%)', transition: 'all, 1s, ease in'}

    let animeRec = "" /*fom right to left*/
    show.recDiv ?  animeRec = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : animeRec = {transform : 'translate(-100%)', transition: 'all, 1s, ease in'}

    let animeCalc = ""
    show.calcDiv ?  animeCalc = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : animeCalc = {transform : 'translate(100%)', transition: 'all, 1s, ease in'}

    let animeSim = "" /*fom right to left*/
    show.simDiv ?  animeSim = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : animeSim = {transform : 'translate(-100%)', transition: 'all, 1s, ease in'}

    let animeTic = "" 
    show.ticDiv ?  animeTic = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : animeTic = {transform : 'translate(100%)', transition: 'all, 1s, ease in'}

    let animePom = "" /*fom right to left*/
    show.pomDiv ?  animePom = {transform : 'translate(0%)', transition: 'all, 1s, ease in'}  
    : animePom = {transform : 'translate(-100%)', transition: 'all, 1s, ease in'}

    /* end off project  section animation transition  slide in*/

  return (


  <div className={HomeStyles.container}>
    <Head>
      <title>Francois Demilly Portfolio</title>.
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* *********** Navbar *********** */}
    <Navbar/>
    {/* *********** Landing *********** */}
    <div id="home" className={`${LandingStyles.bgWrap}`}>
      <Image src="/images/myfuture1-min-bw.jpg" 
        layout="fill"
        objectFit="cover"
        quality={100} 
      />
      <div className={`${LandingStyles.titleContainer}`} >
        <h1 className={`${LandingStyles.h1first}`}>François<span className={`${LandingStyles.h1last}`}>Demilly</span></h1>
        <h3 className={`${LandingStyles.h3}`}>Développeur Web</h3>
      </div>
    </div>
    {/* *********** About *********** */}
    <div id="about" className={`${AboutStyles.container}`} >
      <h3 className={`${AboutStyles.title}`}>À propos</h3>
      <div className={`${AboutStyles.description}`}>
        <p>Bonjour,<br/> 
        je suis François, Développeur Front End.
        Principalement intéressé par l’écosystème ReactJS et
        NodeJS. J’aime être entouré d’une équipe qui cultive l'épanouissement
        professionnel, la créativité et l’innovation.</p>
      </div>
      <div className={`${AboutStyles.imgContainer}`}>
        <Image 
          src="/images/profile2-BW-min.jpg" 
          alt="francois demilly foto"
          layout="intrinsic"
          width={250} 
          height={305} />
      </div>
    </div>
      {/* *********** Projects *********** */}
    <div id="projects" className={`${ProjectsStyles.container}`}>
      <h3 className={`${ProjectsStyles.title}`}>Projets</h3>
      {/*Contact Keeper*/}
      <div className={`${ProjectsStyles.project}`} ref={contact} style={animeCont}> 
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image
            src="/images/contactKeeper.png" 
            alt="ContactKeeper app project"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Fiches Contacts </h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>HTML5 / CSS3 / MERN Stack</h4>
          <p className={`${ProjectsStyles.description}`}>
                CRUD app développée avec Mongo, Express, React and Node. Déployée sur Heroku.
                L'authentification se fait avec JWT.
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://dry-taiga-62467.herokuapp.com/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly/contact-keeper' target='_blank'>Github</a>
          </div>
        </div>
      </div>
      {/*github finder*/}
      <div className={`${ProjectsStyles.project}`} ref={github} style={animeGit} >
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image  
            src="/images/githubApp.png" 
            alt="github finder project"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Recherche Github</h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>ReactJS Hooks & Context <br/>Github API</h4>
          <p className={`${ProjectsStyles.description}`}>
                Basée sur Create-React-App et L'API Github. Déployée sur Netlify.
                Hooks permettent d'interagir avec le state et les cycles à partir de composants fonctionnels.
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://githubfinder1817.netlify.app/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly' target='_blank'>Github</a>
          </div>
        </div>
      </div>
      {/*recipe*/}
      <div className={`${ProjectsStyles.project}`} ref={recipe} style={animeRec}>
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image  
            src="/images/recipebox.png" 
            alt="Recette app project"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Boîte à Recettes </h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>HTML5 / CSS3 / ReactJS / Firebase</h4>
          <p className={`${ProjectsStyles.description}`}>
                CRUD app basée on Create-React-App. Déployée sur NowSh.
                Les recettes sont conservées sur Firebase. La synchronisation de l’app avec la base de données est faite par Re-base et la fonction syncState.
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://recipeboxfd-gl21wxuji.now.sh/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly/recipebox/' target='_blank'>Github</a>
          </div>
        </div>
      </div>
      {/*calculator*/}
      <div className={`${ProjectsStyles.project}`} ref={calculator} style={animeCalc}>
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image  
            src="/images/calculator.png" 
            alt="calculator app project"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Calculette</h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>HTML5 / CSS3 / Javascript</h4>
          <p className={`${ProjectsStyles.description}`}> 
            Les valeurs et les ensembles de données du DOM sont stockés dans
            un tableau, sur lequel une fonction forEach est appliquée.
            Pour chaque élément cliqué, des fonctions d'assistance sont
            déclenchées pour gérer l'entrée utilisateur. La fonction eval () 
            est utilisée pour les calculs.
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://francoisdemilly.github.io/JSCalculator/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly/JSCalculator' target='_blank'>Github</a>
          </div>
        </div>
      </div>
      {/*simon game*/}
      <div className={`${ProjectsStyles.project}`} ref={simon} style={animeSim}>
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image  
            src="/images/simon.png" 
            alt="mémoire musicale"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Jeu mémoire musicale</h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>HTML5 / CSS3 / Javascript</h4>
          <p className={`${ProjectsStyles.description}`}>
            Simon Game est un jeu dont le but est que l'utilisateur répète le modèle
            montré avec le son par le programme. À chaque tour, une nouvelle étape
            est ajoutée au motif.
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://francoisdemilly.github.io/simonGame/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly/simonGame/' target='_blank'>Github</a>
          </div>
        </div>
      </div>
      {/*tictactoe*/}
      <div className={`${ProjectsStyles.project}`} ref={tictactoe} style={animeTic}>
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image  
            src="/images/tictactoe.png" 
            alt="tictactoe project"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Tictactoe</h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>HTML5 / CSS3 / Javascript</h4>
          <p className={`${ProjectsStyles.description}`}>
          Tic Tac Toe est un jeu dont le but est pour l'utilisateur de battre l'adversaire en tirant 3 marques consécutives
          Le choix de l'ordinateur est aléatoire, l'algorithme Minimax n'a pas été utilisé pour le jeu
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://francoisdemilly.github.io/TicTacToeGame/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly/TicTacToeGame' target='_blank'>Github</a>
          </div>
        </div>
      </div>
      {/*Pomodoro*/}
      <div className={`${ProjectsStyles.project}`} ref={pomodoro} style={animePom}>
        <div className={`${ProjectsStyles.pictureHolder}`}>
          <Image  
            src="/images/pomodoro.png" 
            alt="pomodoro project"
            layout="fill"
            objectFit="cover"
            />
        </div>
        <div className={`${ProjectsStyles.descripCont}`}>
          <h3 className={`${ProjectsStyles.titleDes}`}>Horloge Pomodoro</h3>
          <h4 className={`${ProjectsStyles.technoDes}`}>HTML5 / CSS3 / ReactJS / Firebase</h4>
          <p className={`${ProjectsStyles.description}`}>
            Les ensembles de données du DOM sont stockés dans un tableau,
            sur lequel une fonction forEach est appliquée. Pour chaque élément
            cliqué, des fonctions d'assistance sont déclenchées pour gérer la
            saisie utilisateur et démarrer le compte à rebours de l'horloge et
            le remplissage
          </p>
          <div>
            <a className={`${ProjectsStyles.projbuttonD}`} href='https://francoisdemilly.github.io/PomodoroClock/' target='_blank'>Démo</a>
            <a className={`${ProjectsStyles.projbutton}`} href='https://github.com/FrancoisDemilly/PomodoroClock' target='_blank'>Github</a>
          </div>
        </div>
      </div>
    </div>
    {/************ Skills *********** */}
    <div id="skills" className={`${SkillsStyles.container}`} >
    <h3 className={`${SkillsStyles.title}`} >Skills</h3>
      <div className={`${SkillsStyles.wrapper}`}>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/html5.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/css3.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/sass.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/git.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/javaScript.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/firebase.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/react.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/nextjs.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/nodejs.svg" width={72} height={72}/>
        </div>
        <div className={`${SkillsStyles.itemWrapper}`}>
          <Image src="/icon/linux.svg" width={72} height={72}/>
        </div>
      </div>
    </div>
    {/* *********** Contact *********** */}
    <div id="contact"  className={`${ContactStyles.container}`}>
      <h3 className={`${ContactStyles.title}`}>Contact</h3>
      <ContactForm />
      <div className={`${ContactStyles.iconContainer}`}>
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
    </div>
    {/*Footer*/}    
    <footer className={HomeStyles.footer}>
      <p>Développé par Francois Demilly 2021</p>             
    </footer>
  </div>
  )
}
