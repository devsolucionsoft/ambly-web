import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import TutorImage from "../../assets/images/data/tutor.jpeg"
import TemaImage from "../../assets/images/tema.png"
// Styled components
import { Main } from "../../styles/inicio.styled"
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
  const [showModal, setShowModal] = useState(false)

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
        <div className="content-page-top">
          <Sliders variant="new" />
        </div>
        <div className="content-page">
          <Typography
            text={'"Explore your new skill today"'}
            variant="H1"
            style={{ textAlign: "center" }}
          />
          <div>
            <HeaderSection title="Populares" action={() => false} />
            <Sliders variant="popular" />
          </div>

          <div>
            <HeaderSection title="Trailers" action={() => false} />
            <Sliders variant="trailers" />
          </div>

          <div>
            <HeaderSection title="Maestros" action={() => false} />

            <div className="teachers-list">
              {items.map((item, index) => (
                <section key={index} className="teacher-item">
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

          <div>
            <HeaderSection title="Categorías" />
            <div className="category-list">
              {items.map((item, index) => (
                <section key={index} className="category-item">
                  <Image className="category-image" src={TemaImage} alt="" />
                </section>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
