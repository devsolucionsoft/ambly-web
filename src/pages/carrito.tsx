import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, Fragment } from "react"
import { useRouter } from "next/router"
// Assests
import { FaUserAlt } from "react-icons/fa"
// Styled components
import { Main } from "../styles/carrito.styled"
// Components
import {
  Header,
  Typography,
  SideNav,
  Input,
  Button,
  Footer,
  Loader,
} from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../lib/session"
import { MdDelete } from "react-icons/md"
// API
import { CourseApi } from "./api"
const CourseApiModel = new CourseApi()

export default function Carrito(props: any) {
  const router = useRouter()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  let total = 0

  const getItems = () => {
    const stored = localStorage.getItem("cart_products")
    total = 0

    if (stored) {
      const cart_products: Array<any> = JSON.parse(stored)
      ;(async () => {
        setLoading(true)
        const response = await CourseApiModel.GetCourses()
        const filterdata = response.data.filter((item: any) =>
          cart_products.includes(item.id)
        )
        response.status === 200 && setCourses(filterdata)
        setLoading(false)
      })()
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem("cart_products")

    if (stored) {
      const cart_products: Array<any> = JSON.parse(stored)
      ;(async () => {
        setLoading(true)
        const response = await CourseApiModel.GetCourses()
        const filterdata = response.data.filter((item: any) =>
          cart_products.includes(item.id)
        )
        response.status === 200 && setCourses(filterdata)
        setLoading(false)
      })()
    }
  }, [])

  const deleteItem = (id: number) => {
    const filterdata = courses.filter((item: any) => item.id !== id)
    localStorage.setItem("cart_products", JSON.stringify(filterdata))
    getItems()
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
        <Loader loading={loading} />

        <div className="content-page">
          <Typography
            text="Carrito"
            variant="H1"
            style={{ textAlign: "left", width: "100%" }}
          />

          <div className="items-carrito">
            {courses.map((item: any, index: number) => {
              total += item.price_course
              return (
                <div className="item-carrito" key={index}>
                  <div className="flex">
                    <Image
                      className="image"
                      src={item.image_course}
                      height={100}
                      width={100}
                      alt=""
                    />

                    <div className="content">
                      <Typography text={item.name_course} variant="H3" />

                      <div className="autor">
                        <FaUserAlt className="icon" />
                        <Typography
                          text={item.instructor.name_instructor}
                          variant="H4"
                        />
                      </div>
                      <Typography
                        text={new Intl.NumberFormat("es-MX").format(
                          item.price_course
                        )}
                        variant="H5"
                      />
                    </div>
                  </div>

                  <div className="delete" onClick={() => deleteItem(item.id)}>
                    <MdDelete className="icon" />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="total">
            <Typography
              text={`Total: $${new Intl.NumberFormat("es-MX").format(total)}`}
              variant="H2"
            />
          </div>
          {props.user ? (
            <Fragment>
              <div className="divider"></div>
              <div className="form">
                <div>
                  <Typography text="Datos de pago" variant="H4" />
                  <br />
                  <Input type="email" label="Nomber" name="nomber" />
                  <Input type="email" label="Email" name="email" />
                  <Input type="email" label="Telefono" name="phone" />
                </div>
                <div>
                  <Typography text="Datos de tarjeta" variant="H4" />
                  <br />
                  <Input type="email" label="Numero de tarjeta" name="nomber" />
                  <Input type="email" label="CV" name="nomber" />
                </div>
              </div>
              <div>
                <Button text="Realizar compra" bg color="redPrimary" />
              </div>
            </Fragment>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "auto",
                marginTop: "5em",
              }}
            >
              <Button
                text="Inicia sesion"
                bg
                color="redPrimary"
                onClick={() => router.push("/inicio")}
              />
            </div>
          )}
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
