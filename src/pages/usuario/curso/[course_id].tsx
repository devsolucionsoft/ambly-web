import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState, Fragment } from "react"
// Assests
import ImageCourse from "../../../assets/images/new-course.jpg"
import Detail1 from "../../../assets/images/icon-detail-1.png"
import Detail2 from "../../../assets/images/icon-detail-2.png"
import Detail3 from "../../../assets/images/icon-detail-3.png"
import Detail4 from "../../../assets/images/icon-detail-4.png"
import maestra from "../../../assets/images/maestra.png"
// Styled components
import { Main } from "../../../styles/curso.styled"
// Components
import { Header, Typography, SideNav, ModulesList } from "../../../components"
import ImageName from "../../../assets/images/svg-ejem.png"
import { FaUserAlt } from "react-icons/fa"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../../../lib/session"
// Store
import { useAppSelector, useAppDispatch } from "../../../store"
import { selectCourse } from "../../../store/User/actions"
import { onLoader } from "../../../store/Loader/actions"
// API
import { UserApi } from "../../api"

const items = [1, 2, 3, 4]

export default function CourseDetail() {
  const router = useRouter()
  const { course_id }: any = router.query

  const dispatch = useAppDispatch()
  const courseInfo = useAppSelector((store) => store.User.selectCourse)
  const myCourses = useAppSelector((store) => store.User.myCourses)
  const [includeMyCourse, setIncludeMyCourse] = useState(false)
  const auth = useAppSelector((store) => store.Auth)

  useEffect(() => {
    setIncludeMyCourse(false)
  }, [course_id])

  const [load, setLoad] = useState(false)

  const [courseModules, setCourseModules] = useState<any>([])
  const [savedItem, setSavedItem] = useState({
    saved: false,
    module: 0,
    video: 0,
  })

  // Efecto para consutar a la api los modulos del curso selccionado segun los parametros recibidos
  useEffect(() => {
    const userApiModel = new UserApi()
    setLoad(false)
    dispatch(onLoader(true))
    ;(async () => {
      const response = await userApiModel.GetCourse(course_id)

      if (response.status === 200) {
        dispatch(selectCourse(response.data))
        Array.isArray(response.data?.modules) &&
          setCourseModules(response.data?.modules)
        setTimeout(() => {
          dispatch(onLoader(false))
          setLoad(true)
        }, 300)
      }
    })()

    if (!includeMyCourse && myCourses.length > 0) {
      myCourses.forEach((element: any) => {
        if (element.id === course_id) {
          setIncludeMyCourse(true)
        }
      })
    }
  }, [course_id, dispatch, includeMyCourse, myCourses])

  // Funcion para extraer la informacion del ultimo video visto por el usuario y poder redirigirlo a el
  useEffect(() => {
    if (courseModules.length > 0) {
      let savedItems: Array<any> = []
      // Se concatenan todos los "save" (progresos de videos) de cada modulo
      courseModules.forEach((element: any, index: number) => {
        savedItems = savedItems.concat(
          element.save.map((item: any) => ({ ...item, module: index }))
        )
      })
      if (savedItems.length > 0) {
        // Ordeno los "save" por fecha de modificacion
        const sortItems = savedItems.sort((a: any, b: any) => {
          const video1 = Date.parse(a.updateAt) // ignore upper and lowercase
          const video2 = Date.parse(b.updateAt) // ignore upper and lowercase
          if (video1 < video2) {
            return -1
          }
          if (video1 > video2) {
            return 1
          }
          return 0
        })
        // Se toma el ultimo video modificado y se extraen los indices del modulo y del video
        const lastItem = sortItems[sortItems.length - 1]
        const indexVideo = courseModules[lastItem.module].videos.findIndex(
          (item: any) => item.id === lastItem.videos.id
        )
        // Se guarda la informacion del ultimo video visto por el usuario
        setSavedItem({
          saved: true,
          module: lastItem.module,
          video: indexVideo,
        })
      }
    }
  }, [courseModules])

  // Funcion para redirigir a modulo y video especificos
  const handleNavigateVideo = (module: number, video: number) => {
    // navigation.navigate("ModuleDetail", {
    //   module: module,
    //   video: video,
    // })
  }

  const [descActive, setDesctActive] = useState("")
  const [activeSeeMore, setActiveSeeMore] = useState(false)

  useEffect(() => {
    if (courseInfo?.description) {
      if (courseInfo?.description.length < 180) {
        setDesctActive(courseInfo?.description)
      } else {
        setDesctActive(`${courseInfo?.description.substring(0, 180)}...`)
        setActiveSeeMore(true)
      }
    }
  }, [courseInfo])

  const onSeeMore = () => {
    setActiveSeeMore(false)
    setDesctActive(courseInfo?.description)
  }

  console.log(courseInfo)

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
        {courseInfo && load && (
          <Fragment>
            <div className="top">
              <Image
                className="image-course"
                src={courseInfo?.image_course}
                height={100}
                width={100}
                alt=""
              />
              <div className="overlay"></div>
              <div className="top-content">
                <Image
                  className="image-name"
                  src={courseInfo?.image_name}
                  height={100}
                  width={100}
                  alt=""
                />
                <div className="autor">
                  <FaUserAlt className="icon" />
                  <span>{courseInfo?.instructor?.name_instructor}</span>
                </div>
              </div>
            </div>

            <div className="content-page">
              <Typography
                className="description"
                text={courseInfo?.description}
                variant="P"
              />

              <br />

              <div className="price">
                <Typography
                  className="description"
                  text="Precio:"
                  variant="H6"
                />
                <Typography
                  className="description"
                  text={courseInfo?.price_course}
                  variant="H2"
                />
              </div>

              <div className="caracteristics">
                <div className="caracteristics-item">
                  <Image className="icon" src={Detail1} alt="" />
                  <p>Duración</p>
                  <span>{courseInfo.characteristic1}</span>
                </div>
                <div className="caracteristics-item">
                  <Image className="icon" src={Detail2} alt="" />
                  <p>Aprenderás</p>
                  <span>{courseInfo.characteristic2}</span>
                </div>
                <div className="caracteristics-item">
                  <Image className="icon" src={Detail3} alt="" />
                  <p>Cantidad de modulos</p>
                  <span>{courseInfo.characteristic3}</span>
                </div>
                <div className="caracteristics-item">
                  <Image className="icon" src={Detail4} alt="" />
                  <p>Estructura</p>
                  <span>{courseInfo.characteristic4}</span>
                </div>
              </div>

              <div className="modulos-section">
                <Typography
                  className="description"
                  text="Cononce todos los módulos"
                  variant="H4"
                />
                <Typography
                  className="description"
                  text="Aprende en línea una nueva habilidad y logra tus objetivos."
                  variant="P"
                />

                <div className="divider"></div>

                <div className="ModulesList-contain">
                  {/* {courseModules} */}
                  <ModulesList items={courseModules} />
                </div>
              </div>

              <div className="teacher-section">
                <Typography
                  className="description"
                  text="Cononce a tu maestro"
                  variant="H4"
                />
                <Image
                  className="avatar"
                  src={courseInfo?.instructor?.image_instructor}
                  height={100}
                  width={100}
                  alt=""
                />
                <Typography
                  className="description"
                  text={courseInfo?.instructor?.description_instructor}
                  variant="P"
                />
                <Image
                  className="image-teacher"
                  src={courseInfo?.instructor?.image_secondary}
                  height={100}
                  width={100}
                  alt=""
                />
                <Typography
                  className="description"
                  text={courseInfo?.instructor?.description_secondary}
                  variant="P"
                />
              </div>
            </div>
          </Fragment>
        )}
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)
