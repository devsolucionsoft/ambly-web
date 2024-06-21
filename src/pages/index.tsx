import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {Form} from "../components/Form/formIndex"

// Styled components
import { FaUserAlt } from "react-icons/fa"
import { Main } from '@/styles/homeCourse.styled'
import manReflexive from '../assets/images/spaceMan1.webp'
import manBlue from '../assets/images/spaceMan2.webp'
// Components
import {
  Header,
  Sliders,
  HeaderSection,
  Typography,
  SideNav,
  Modal,
  Loader,
  Footer,
} from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../lib/session"
import { UserApi, CourseApi, InstructorApi, TrailersApi } from "./api"
// Store
import { useAppDispatch } from "../store"
import { loadCourses } from "../store/User/actions"
import { useRouter } from "next/router"

const UserApiModel = new UserApi()
const CourseApiModel = new CourseApi()
const InstructorApiModel = new InstructorApi()
const TrailersApiModel = new TrailersApi()

export default function Login(props: any) {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [coursesList, setCourseslist] = useState([])
  const [myCoursesList, setMyCourseslist] = useState([])
  const [intructorList, setIntructorList] = useState([])
  const [trailersList, setTrailerList] = useState([])
  const [topics, setTopics] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [trailerPlay, setTrailerPlay] = useState({
    title: "",
    video: "",
  })
  console.log(props);


  const handleTrailerClick = (item: any) => {
    setTrailerPlay({
      title: item.title,
      video: item.video,
    })
    setShowModal(true)
  }

  useEffect(() => {
    setLoading(true)
      ; (async () => {
        if (props.user && props.user.id) {
          const response = await UserApiModel.GetMyCourses(props.user.id)
          response.status === 200 && setMyCourseslist(response.data.courses)
        }
      })()
      ; (async () => {
        const response = await CourseApiModel.GetCourses()
        response.status === 200 && setCourseslist(response.data)
      })()
      ; (async () => {
        const response = await InstructorApiModel.GetInstructors()
        response.status === 200 && setIntructorList(response.data)
      })()
      ; (async () => {
        const response = await TrailersApiModel.GetTrailers()
        response.status === 200 && setTrailerList(response.data)
      })()
      ; (async () => {
        const response = await UserApiModel.GetCategories()
        response.status === 200 && setTopics(response.data)
      })()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [props.user, dispatch])

  const closeModal = (e: any) => {

    if (showModal && !e.target.classList.contains("playing")) {
      setShowModal(false)
    }
  }

  return (
    <>
      <Head>
      <title>Ambly</title>
      <meta name="title" content="Ambly Cursos Online" />
      <meta name="description" content="Ambly te da la entrada a la mente brillante de destacadas figuras por medio de cursos en línea de alta calidad." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://ambly-web.vercel.app/"/>
      <meta property="og:title" content="Ambly Cursos Online"/>
      <meta property="og:description" content="Ambly te da la entrada a la mente brillante de destacadas figuras por medio de cursos en línea de alta calidad."/>
      <meta property="og:image" content="https://ambly-web.vercel.app/favicon.ico"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://ambly-web.vercel.app/"/>
      <meta property="twitter:title" content="Ambly Cursos Online"/>
      <meta property="twitter:description" content="Ambly te da la entrada a la mente brillante de destacadas figuras por medio de cursos en línea de alta calidad."/>
      <meta property="twitter:image" content="https://ambly-web.vercel.app/favicon.ico"/>

      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main onClick={closeModal}>
        <Loader loading={loading} />
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title={"playing"}
        >
          {showModal && (
            <video
              className="page-top-video"
              controls
              style={{ width: "100%" }}
              src={trailerPlay.video}
              autoPlay
            ></video>
          )}
        </Modal>
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} home={true} />
        <article className='container'>
                    <div className='title'>
                        <article className='bars left'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                        <h1>APRENDE. <br />INSPÍRATE. <br />VUELA.</h1>
                        <article className='bars'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                    </div>
                    <Image
                        className="imgBanner"
                        src={manReflexive}
                        alt="manBlue"
                    />
                    <h2>APRENDE DE LOS MEJORES. <br /> INSPÍRATE POR SU EXPERIENCIA.  <br /> VUELA SIN LÍMITES</h2>
                    <div className='title'>
                        <article className='bars left'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                        <p>AMBLY HACE HONOR A LA EXPERIENCIA DE LAS GRANDES MENTES LATINAS.</p>
                        <article className='bars'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                    </div>
                    <figure className='card'>
                        <Image
                            className="image"
                            src={manBlue}
                            height={210}
                            width={500}
                            alt=""
                        />
                        <figcaption>
                            <p>CONOCE LA CLASE <br /> AMBLY <span>00</span>1: <br /> "HACKEA TU CEREBRO"</p>
                            <Link href="/curso/33">Ver más</Link>
                        </figcaption>
                    </figure>
                    <p>SOMOS, PERTENECEMOS Y TENEMOS EL PODER DE ALCANZAR CUALQUIER CIMA.</p>
                    
                    <div className="title">
                        <article className='bars left'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </article>
                        <p>¿Quieres ser el primero en saber sobre nuestros próximos lanzamientos?</p>
                        <article className='bars'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                    </div>
                    <Form/>
                </article>
        <Footer />
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  getSessionVerificationNotCreated,
  sessionOptions
)
