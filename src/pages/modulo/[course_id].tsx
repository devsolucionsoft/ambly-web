import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import { useState, useEffect } from "react"
// Assests
import ImageCourse from "../../assets/images/new-course.jpg"
// Styled components
import { Main } from "../../styles/modulo.styled"
// Components
import {
  Header,
  Typography,
  SideNav,
  ModulesList,
  Loader,
  Footer,
} from "../../components"
import { MdPictureAsPdf } from "react-icons/md"
import { HiDownload } from "react-icons/hi"
import { BsFillPlayFill } from "react-icons/bs"
import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../../lib/session"
// Store
import { useAppDispatch, useAppSelector } from "../../store"
// API
import { UserApi } from "../api"
import { selectCourse } from "@/store/User/actions"
import Swal from "sweetalert2"

const items = [1, 2, 3, 4]

const FileItem = ({ item }: { item: any }) => {
  return (
    <a className="file-item" href={item.link_file}>
      <div className="item-info">
        <MdPictureAsPdf className="icon" />
        <div className="item-content">
          <Typography text={item.name_file} variant="H6" />
        </div>
      </div>
      <div className="action">
        <HiDownload className="action-icon" />
      </div>
    </a>
  )
}

export default function Modulo(props: any) {
  const router = useRouter()
  const { course_id, modulo, video }: any = router.query

  // Store
  //const courseInfo = courseDetail
  const dispatch = useAppDispatch()
  const courseInfor = useAppSelector((store) => store.User.selectCourse)
  const [currentModule, setCurrentModule] = useState(0)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [currentVideoTime, setCurrentVideoTime] = useState(0)
  const [courseInfo, setCourseInfo] = useState<any>(false)
  const [includeMyCourse, setIncludeMyCourse] = useState(false)
  const [disableNext, setDisableNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const userApiModel = new UserApi()
      ; (async () => {
        const responseUser = await userApiModel.GetMyCourses(props.user.id)
        const response = await userApiModel.GetCourse(course_id)

        if (response.status === 200 && responseUser) {
          if (responseUser?.data?.courses?.some((course: any) => course.id === response.data.id)) {
            setIncludeMyCourse(true);
            dispatch(selectCourse(response.data))
            setCourseInfo(response.data)
          } else {
            Swal.fire({
              icon: 'info',
              text: 'Por favor inicia sesión o compra el curso para poder acceder a los módulos.'
            }).then(() => router.push('/'))
          }
        }
      })()
  }, [course_id])

  // Efecto para consutar a la api los modulos del curso selccionado segun los parametros recibidos
  useEffect(() => {
    setLoading(true)
      ; (async () => {
        setLoading(false)
      })()
  }, [router.query, dispatch])

  // Efecto para actualizar el state con los parametros recibidos
  useEffect(() => {
    if (modulo) {

      setCurrentModule(parseInt(modulo))
    }
    if (video) {
      setCurrentVideo(parseInt(video))
    }
  }, [modulo, video])

  // Efecto para desactivar los botones prev/next cuando lleguen al primer y ultimo video
  useEffect(() => {
    setLoading(true)
    if (
      courseInfo &&
      courseInfo.module &&
      courseInfo.modules.length > 0 &&
      courseInfo.modules[currentModule]?.videos.length > 0
    ) {
      const idVideo = courseInfo.modules[currentModule]?.videos[currentVideo].id
      // Buscar progreso de video seleccionado dentro de las lista de save
      const saved = courseInfo.modules[currentModule]?.save.find(
        (item: any) => item.videos.id === idVideo
      )
      // En caso de que encuentre un progreso edita el tiempo de vista cuando se cambia el video
      saved ? setCurrentVideoTime(saved.time_seen) : setCurrentVideoTime(0)
      if (
        currentVideo ===
        courseInfo?.modules[currentModule]?.videos.length - 1 &&
        currentModule === courseInfo?.modules.length - 1
      ) {
        setDisableNext(true)
      } else {
        setDisableNext(false)
      }
      // Condicion para habilitar y desahabilitar el boton de prev
    }
    // Condicion para habilitar y desahabilitar el boton de next
    if (currentVideo === 0 && currentModule === 0) {
      setDisablePrev(true)
    } else {
      setDisablePrev(false)
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [currentModule, currentVideo, courseInfo, dispatch])

  // Animacion de cambio de modulo
  const setModule = (module: number) => {
    setTimeout(() => {
      setCurrentModule(module)
    }, 1000)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  // Cambiar video actual
  const setVideo = async (video: number) => {
    // Activar loader
    setLoading(true)
    if (courseInfo.modules.length > 0) {
      // const response = await userApiModel.GetCourse(courseInfo.id)
      // if (response.status === 200) {
      //   dispatch(selectCourse(response.data))
      // }
      // Video proximo
      if (video > currentVideo) {
        // Comprobar si el video es el ultimo del modulo.
        if (video === courseInfo.modules[currentModule]?.videos.length) {
          // En caso de que sí se pasa al siguiente modulo en el video 0
          setCurrentVideo(0)
          setModule(currentModule + 1)
        } else {
          // En caso de que no se pasa el siguiente video del modulo
          setTimeout(() => {
            setCurrentVideo(video)
          }, 1000)
        }
      }
    }
    // Video previo
    if (video < currentVideo) {
      // Comprobar si el video es el primero del modulo.
      if (video < 0) {
        // En caso de que sí se pasa al modulo anterior en su ultimo video
        setCurrentVideo(0)
        setModule(currentModule - 1)
      } else {
        // En caso de que no se pasa el video anterior del modulo
        setTimeout(() => {
          setCurrentVideo(video)
        }, 1000)
      }
    }
    setLoading(false)

  }

  const handleNavigateVideo = (module: number, video: number) => {
    setVideo(0)
    setModule(module)
    setVideo(video)
  }

  const ShowVideo = () => {
    return (
      courseInfo &&
      courseInfo?.modules &&
      courseInfo?.modules.length > 0 &&
      courseInfo?.modules[currentModule]?.videos.length > 0
    )
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
        <SideNav />
        <Header />
        <Loader loading={loading} />

        {courseInfor.id && courseInfo ? (
          <div className="page-content">
            <div className="page-top">
              <div className="page-top-video">
                {ShowVideo() &&
                  courseInfo.modules[currentModule]?.videos[currentVideo].video ? (
                  <video
                    className="top-video"
                    controls
                    src={
                      courseInfo.modules[currentModule]?.videos[currentVideo].video ?? ""
                    }
                    autoPlay
                    controlsList="nodownload"
                  ></video>
                ) : (
                  <Typography
                    text="Este modulo no tiene videos disponibles"
                    variant="H6"
                    className="title"
                  />
                )}
              </div>
              {/* <ReactPlayer
                className="page-top-video"
                controls
                url={
                  courseInfo.modules[currentModule]?.videos[currentVideo]
                    .video ?? ""
                }
              /> */}
              <div className="page-top-content">
                <div>
                  {ShowVideo() && (
                    <>
                      <Typography
                        text={
                          courseInfo.modules[currentModule]?.videos[
                            currentVideo
                          ].name_video
                        }
                        variant="H2"
                      />
                      <Typography
                        text={
                          courseInfo.modules[currentModule]?.videos[
                            currentVideo
                          ].description_video
                        }
                        variant="P"
                      />
                    </>
                  )}
                </div>
                <div className="action-buttons">
                  <button
                    className="action-button"
                    disabled={disablePrev}
                    onClick={() => setVideo(currentVideo - 1)}
                  >
                    <TbPlayerSkipBackFilled className="icon" />
                    Anterior
                  </button>
                  <button
                    className="action-button"
                    disabled={disableNext}
                    onClick={() => setVideo(currentVideo + 1)}
                  >
                    Siguiente
                    <TbPlayerSkipForwardFilled className="icon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="page-module-content">
              <div className="moduleslist-contain">
                <Typography
                  text="Videos del modulo"
                  variant="H4"
                  className="title"
                />
                <div className="list-videos-module">
                  {courseInfo.modules[currentModule]?.videos.map(
                    (item: any, index: number) => (
                      <div
                        className={`video-item ${currentVideo == index && `video-item-active`
                          }`}
                        key={index}
                        onClick={() => setVideo(index)}
                      >
                        <div className="video-image-contain">
                          <BsFillPlayFill className="icon-play" />
                        </div>
                        <div className="video-content">
                          <Typography text={item.name_video} variant="H6" />
                          <Typography text={item.duration} variant="P" />
                        </div>
                      </div>
                    )
                  )}
                </div>
                <Typography
                  text="Todos los modulos"
                  variant="H4"
                  className="title"
                />
                <ModulesList
                  idCourse={course_id}
                  items={courseInfo.modules}
                  currentModule={currentModule}
                  currentVideo={currentVideo}
                  includeCourse={includeMyCourse}
                />
              </div>
              <div className="fileslist-contain">
                <Typography
                  text="Material Descargable"
                  variant="H4"
                  className="title"
                />

                <div className="list-files">
                  {courseInfo.modules[currentModule]?.file.map((item: any) => (
                    <FileItem key={item.link_file} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", paddingTop: "10em" }}>
            <Typography
              text="Este modulo no tiene videos disponibles"
              variant="H4"
              className="title"
            />
          </div>
        )}
        <Footer />
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  //sessionVerificationNotCreated,
  getSessionVerificationNotCreated,
  sessionOptions
)
