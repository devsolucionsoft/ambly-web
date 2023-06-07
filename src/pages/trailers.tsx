import Head from "next/head"
import { useState, useEffect } from "react"
// Assests
import { AiFillPlayCircle } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
// Styled components
import { Main } from "../styles/trailers.styled"
import { SlidersTrailer } from "../components/Sliders/Sliders.styled"
// Components
import { Header, Typography, SideNav, Modal, Footer } from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../lib/session"

import { TrailersApi } from "./api"
const TrailersApiModel = new TrailersApi()

export default function Login(props: any) {
  const [trailersList, setTrailerList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [trailerPlay, setTrailerPlay] = useState({
    title: "",
    video: "",
  })

  useEffect(() => {
    ;(async () => {
      const response = await TrailersApiModel.GetTrailers()
      response.status === 200 && setTrailerList(response.data)
    })()
  }, [])

  const handleTrailerClick = (item: any) => {
    setTrailerPlay({
      title: item.title,
      video: item.video,
    })
    setShowModal(true)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} />
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          title={trailerPlay.title}
        >
          {showModal && (
            <video
              className="page-top-video"
              controls
              style={{ width: "100%" }}
              src={trailerPlay.video}
            ></video>
          )}
        </Modal>

        <div className="content-page">
          <Typography text="Trailers" variant="H5" />

          <div className="my-courses-list">
            {trailersList.map((item: any, index: number) => (
              <div
                key={index}
                className="course-item"
                onClick={(data) => handleTrailerClick(item)}
              >
                <SlidersTrailer>
                  <div className="video-contain">
                    <video className="video" src={item.video}></video>
                    <AiFillPlayCircle className="icon-play" size={80} />
                  </div>
                  <div className="slider-content">
                    <h3>{item.course_name}</h3>
                    <div className="autor">
                      <FaUserAlt className="icon" />
                      <span>{item.instructor}</span>
                    </div>
                  </div>
                </SlidersTrailer>
              </div>
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
