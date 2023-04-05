import Head from "next/head"
import Image from "next/image"
// Assests
import TutorImage from "../../assets/images/data/tutor.jpeg"
// Styled components
import { Main } from "../../styles/maestros.styled"
// Components
import {
  Header,
  Sliders,
  HeaderSection,
  Typography,
  SideNav,
} from "../../components"

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
          <Typography text="Maestros" variant="H1" />

          <div className="my-courses-list">
            {items.map((item) => (
              <section className="teacher-item">
                <Image className="teacher-image" src={TutorImage} alt="" />
                <Typography
                  className="teacher-title"
                  text="Nombre del maestro"
                  variant="H4"
                />
              </section>
            ))}
          </div>
        </div>
      </Main>
    </>
  )
}
