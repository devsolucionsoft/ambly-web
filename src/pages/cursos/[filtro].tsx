import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
// Styled components
import { Main } from "../../styles/cursos-populares.styled"
// Components
import { Header, Typography, SideNav, Loader, Footer } from "../../components"
import { FaUserAlt } from "react-icons/fa"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../../lib/session"

import { CourseApi } from "../api"
const CourseApiModel = new CourseApi()

export default function Login(props: any) {
  const [coursesList, setCourses] = useState([])
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await CourseApiModel.GetCourses()
      response.status === 200 && setCourses(response.data)
      setLoading(false)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
            {coursesList.map((item: any, index: number) => (
              <section
                key={index}
                className="course-item"
                onClick={() => router.push(`/curso/${item.id}`)}
              >
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
            ))}
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
