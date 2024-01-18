import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
// Styled components
import { Main } from "../../styles/cursos-populares.styled"
// Components
import {
  Header,
  Typography,
  SideNav,
  Loader,
  Footer,
  Button,
} from "../../components"
import { FaUserAlt } from "react-icons/fa"
import { withIronSessionSsr } from "iron-session/next"
import { useAppDispatch } from "../../store"
import { loadCourses } from "../../store/User/actions"

import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../../lib/session"
import Swal from "sweetalert2"

import { CourseApi, UserApi } from "../api"
const CourseApiModel = new CourseApi()

interface Course {
  id : number;
}

export default function Login(props: any) {
  const dispatch = useAppDispatch()
  const [coursesList, setCoursesList] = useState<Course[]>([])
  const router = useRouter()
  const {filtro} = router.query
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const UserpiModel = new UserApi()
    ;(async () => {
      if (props.user.id) {
        const response = await UserpiModel.GetMyCourses(props.user.id)
        if (response.status === 200) {
          dispatch(loadCourses(response.data.courses))
        }
      }
    })()
  }, [dispatch, props.user])
  
  useEffect(() => {
    getCourses()
  }, [filtro])

  const getCourses = async () => {
    setLoading(true)
    const response = await CourseApiModel.GetCourses()
    if (response.status === 200) {
      if (filtro === "todos") {
        setCoursesList(response.data)
      }
      else {
        const filterCourse = response?.data.filter((item: any) => item?.categories?.name == filtro)
        setCoursesList(filterCourse)
      }
    }
    setLoading(false)
  }

  const viewDetails = (id: any) => {
    setLoading(true)
    localStorage.setItem("cart_products", JSON.stringify([id]))
    setTimeout(() => {
      router.push(`/curso/${id}`)
    }, 300)
    setLoading(false)
  }
  
  return (
    <>
      <Head>
        <title>Ambly</title>
        <meta name="description" content="Generated by Ambly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Loader loading={loading} />
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} />

        <div className="content-page">
          <Typography text="Todos los cursos" variant="H5" />

          <div className="my-courses-list">
            {coursesList.length ? coursesList.map((item: any, index: number) => (
              <section key={index} className="course-item">
                <div className="hover-content">
                  <Button
                    text="Ver más"
                    onClick={() => viewDetails(item.id)}
                    bg
                    color="redPrimary"
                    variant="sm"
                  />
                
                </div>
                <Image
                  className="image-course"
                  src={item?.image_course}
                  height={500}
                  width={500}
                  alt=""
                />
                <div className="course-content">
                  <Image
                    className="image-name"
                    src={item?.image_name}
                    height={500}
                    width={500}
                    alt=""
                  />
                  <div className="autor">
                    <FaUserAlt className="icon" />
                    <span>{item?.instructor?.name_instructor}</span>
                  </div>
                </div>
                <div className="overlay"></div>
              </section>
            )) : <Typography text="Aún no hay cursos con esta categoría" variant="H6" />}
          </div>
        </div>
        <Footer />
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  getSessionVerificationNotCreated,
  sessionOptions
)
