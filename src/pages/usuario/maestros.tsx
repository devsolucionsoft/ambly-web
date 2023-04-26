import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
// Styled components
import { Main } from "../../styles/maestros.styled"
// Components
import { Header, Typography, SideNav, Loader, Footer } from "../../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  sessionVerificationNotCreated,
} from "../../../lib/session"
import { InstructorApi } from "../../pages/api"
const items = [1, 2, 3, 4]

const InstructorApiModel = new InstructorApi()
export default function Login() {
  const [intructorList, setIntructorList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const response = await InstructorApiModel.GetInstructors()
      response.status === 200 && setIntructorList(response.data)
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
        <SideNav />
        <Header />
        <Loader loading={loading} />

        <div className="content-page">
          <Typography text="Maestros" variant="H1" />

          <div className="my-courses-list">
            {intructorList.map((item: any, index) => (
              <Link
                href={`/usuario/maestro/${item.id}`}
                key={index}
                className="teacher-item"
              >
                <Image
                  className="teacher-image"
                  src={item.image_instructor}
                  height={100}
                  width={100}
                  alt=""
                />
                <Typography
                  className="teacher-title"
                  text={item.name_instructor}
                  variant="H4"
                />
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  sessionVerificationNotCreated,
  sessionOptions
)
