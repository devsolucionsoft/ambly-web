import Head from "next/head"
import Image from "next/image"
// Assests
import ImageCourse from "../../assets/images/new-course.jpg"
// Styled components
import { Main } from "../../styles/mis-cursos.styled"
// Components
import { Header, Typography, SideNav } from "../../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../../lib/session"

const items = [1, 2, 3, 4]

export default function Login() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <SideNav />
        <Header />

        <div className="content-page">
          <Typography text="Mis Cursos" variant="H1" />

          <div className="my-courses-list">
            {items.map((item, index) => (
              <section key={index} className="course-item">
                <Image className="image-name" src={ImageCourse} alt="" />
                <div className="course-content">
                  <Typography
                    text="Los pilares de la vida saludable"
                    variant="H1"
                    className="course-title"
                  />
                  <div className="course-datails">
                    <p>9 modulos - 4 horas</p>
                  </div>
                </div>
                <div className="overlay"></div>
              </section>
            ))}
          </div>
        </div>
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)
