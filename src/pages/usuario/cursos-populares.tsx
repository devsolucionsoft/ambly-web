import Head from "next/head"
import Image from "next/image"
// Assests
import ImageCourse from "../../assets/images/new-course.jpg"
// Styled components
import { Main } from "../../styles/cursos-populares.styled"
// Components
import { Header, Typography, SideNav } from "../../components"
import ImageName from "../../assets/images/svg-ejem.png"
import { FaUserAlt } from "react-icons/fa"
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
          <Typography text="Cursos populares" variant="H1" />

          <div className="my-courses-list">
            {items.map((item, index) => (
              <section key={index} className="course-item">
                <Image className="image-course" src={ImageCourse} alt="" />
                <div className="course-content">
                  <Image className="image-name" src={ImageName} alt="" />
                  <div className="autor">
                    <FaUserAlt className="icon" />
                    <span>Carlos Jaramillo</span>
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
