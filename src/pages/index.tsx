import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
// Styled components
import { FaUserAlt } from "react-icons/fa"
import { Main, MyCourses } from "../styles/inicio.styled"
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

  const handleTrailerClick = (item: any) => {
    setTrailerPlay({
      title: item.title,
      video: item.video,
    })
    setShowModal(true)
  }

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      if (props.user && props.user.id) {
        const response = await UserApiModel.GetMyCourses(props.user.id)
        response.status === 200 && setMyCourseslist(response.data.courses)
      }
    })()
    ;(async () => {
      const response = await CourseApiModel.GetCourses()
      response.status === 200 && setCourseslist(response.data)
    })()
    ;(async () => {
      const response = await InstructorApiModel.GetInstructors()
      response.status === 200 && setIntructorList(response.data)
    })()
    ;(async () => {
      const response = await TrailersApiModel.GetTrailers()
      response.status === 200 && setTrailerList(response.data)
    })()
    ;(async () => {
      const response = await UserApiModel.GetCategories()
      response.status === 200 && setTopics(response.data)
    })()
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [props.user, dispatch])

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
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} />
        <div className="content-page-top">
          <Sliders variant="new" items={coursesList} />
        </div>
        <div className="content-page">
          <Typography
            text={
              '"El conocimiento es un regalo de los cielos que debe ser democratizado"'
            }
            variant="H1"
            style={{ textAlign: "center" }}
          />
          <div>
            <HeaderSection
              title="Populares"
              action={() => router.push(`/cursos/todos`)}
            />
          </div>
        </div>
        <Sliders variant="popular" items={coursesList} />

        <div className="content-page">
          <div>
            <HeaderSection
              title="Trailers"
              action={() => router.push(`/trailers`)}
            />
          </div>
        </div>

        <Sliders
          variant="trailers"
          onClickSlider={(data) => handleTrailerClick(data)}
          items={trailersList}
        />
        <div className="content-page">
          <div>
            <HeaderSection
              title="Maestros"
              action={() => router.push(`/maestros`)}
            />

            <div className="teachers-list">
              {intructorList.map((item: any, index: number) => (
                <Link
                  href={`/maestro/${item?.id}`}
                  key={index}
                  className="teacher-item"
                >
                  <Image
                    className="teacher-image"
                    src={item?.image_secondary}
                    alt=""
                    height={500}
                    width={500}
                  />
                  <Typography
                    className="teacher-title"
                    text={item?.name_instructor}
                    variant="H4"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <HeaderSection title="Categorías" />
            <div className="category-list">
              {topics.map((item: any, index: number) => (
                <Link
                  href={`/cursos/todos`}
                  key={index}
                  className="category-item"
                >
                  <Image
                    className="category-image"
                    src={item.image}
                    alt=""
                    height={500}
                    width={500}
                  />
                </Link>
              ))}
            </div>
          </div>

          <MyCourses>
            <div className="my-courses-list">
              {props.user &&
                props.user.id &&
                myCoursesList.map((item: any, index: any) => (
                  <section key={index} className="course-item">
                    <Image
                      className="image-name"
                      src={item.image_course}
                      height={500}
                      width={500}
                      alt=""
                    />

                    <div className="course-content">
                      <Typography
                        text={item.name_course}
                        variant="H4"
                        className="course-title"
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
          </MyCourses>
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
