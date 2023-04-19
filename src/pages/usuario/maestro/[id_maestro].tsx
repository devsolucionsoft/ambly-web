import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
// Assests
import TutorImage from "../../../assets/images/data/tutor.jpeg"
// Styled components
import { MainDetail } from "../../../styles/maestros.styled"
// Components
import {
  Header,
  Sliders,
  HeaderSection,
  Typography,
  SideNav,
} from "../../../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../../../lib/session"
import { InstructorApi } from "../../api"

export default function Login() {
  const [instructorInfo, setInfo] = useState<any>({})
  const [intructorList, setIntructorList] = useState([])

  const router = useRouter()
  const { id_maestro } = router.query

  useEffect(() => {
    const InstructorApiModel = new InstructorApi()

    ;(async () => {
      const response = await InstructorApiModel.GetInstructors()
      response.status === 200 && setIntructorList(response.data)
    })()
  }, [id_maestro])

  useEffect(() => {
    console.log(intructorList)
    setInfo(intructorList.find((item: any) => item.id == id_maestro))
  }, [intructorList, id_maestro])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainDetail>
        <SideNav />
        <Header />

        <div className="content-page">
          <div className="teacher-image">
            <Image
              className="image"
              src={instructorInfo?.image_secondary}
              alt=""
              height={100}
              width={100}
            />
            <div className="overlay"></div>
          </div>
          <div className="teacher-content">
            <Image
              className="avatar-image"
              src={instructorInfo?.image_instructor}
              alt=""
              height={100}
              width={100}
            />
            <Typography text={instructorInfo?.name_instructor} variant="H1" />
            <Typography
              text={instructorInfo?.description_instructor}
              variant="P"
            />
            <Typography
              text={instructorInfo?.description_secondary}
              variant="P"
            />
          </div>
        </div>
      </MainDetail>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)
