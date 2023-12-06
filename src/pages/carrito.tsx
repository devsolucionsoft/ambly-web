import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, useId } from "react"
import { useRouter } from "next/router"
// Assests
import { FaUserAlt } from "react-icons/fa"
// Styled components
import { Main } from "../styles/carrito.styled"
import { Md5 } from "md5-typescript"
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

const merchantId = "508029"
const accountId = "512321"
const ApiKey = "4Vj8eK4rloUd272L48hsrarnUA"

export default function Carrito(props: any) {
  const router = useRouter()
  const [cartProducts, setCartProducts] = useState("")
  const [courses, setCourses] = useState([])
  const [signature, setSignature] = useState("")
  const [referenceCode, setReferenceCode] = useState("")

  let urlsite = ""

  if (typeof window !== "undefined") {
    urlsite = window.location.host || ""
  }

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
      setCartProducts(stored)
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
  }, [props.user.id])

  useEffect(() => {
    let amount = 0

    if (total > 0 && courses.length > 0) {
      courses.forEach((item: any) => {
        amount += parseInt(item.price_course)
      })

      const code =
        Math.random().toString(36).slice(2) +
        Math.random().toString(36).slice(2)
      setReferenceCode(code)
      const md5Signature = Md5.init(
        `${ApiKey}~${merchantId}~${code}~${amount}~COP`
      )
      setSignature(md5Signature)
    }
  }, [total, courses])

  const deleteItem = (id: number) => {
    const stored = localStorage.getItem("cart_products")

    if (stored) {
      const cart_products: Array<any> = JSON.parse(stored)
      const filterdata = cart_products.filter((item: any) => item !== id)
      localStorage.setItem("cart_products", JSON.stringify(filterdata))
    }
    getItems()
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
        <SideNav minimal={!props.user} />
        <Header minimal={!props.user} />
        <Loader loading={loading} />

        <div className="content-page">
          <div style={{ width: "100%" }}>
            <Typography
              text="Carrito"
              variant="H1"
              style={{ textAlign: "left", width: "100%" }}
            />

            <div className="items-carrito">
              {courses.map((item: any, index: number) => {
                total += parseInt(item.price_course)
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
                          style={{ textAlign: "right" }}
                          text={`$${new Intl.NumberFormat("es-MX").format(
                            item.price_course
                          )}`}
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
          </div>
          <div style={{ width: "80%" }}>
            {true ? (
              <form
                method="post"
                action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
              >
                <div className="divider"></div>
                <div className="form">
                  <Typography text="Datos de pago" variant="H4" />
                  <br />
                  <Input
                    type="text"
                    label="Nombre completo"
                    name="buyerFullName"
                    required
                  />
                  <Input
                    type="email"
                    label="Email"
                    name="buyerEmail"
                    required
                  />
                  <Input
                    type="number"
                    label="Teléfono"
                    name="mobilePhone"
                    required
                  />

                  <input name="merchantId" type="hidden" value={merchantId} />
                  <input name="accountId" type="hidden" value={accountId} />
                  <input name="description" type="hidden" value="Test PAYU" />
                  <input
                    name="referenceCode"
                    type="hidden"
                    value={referenceCode}
                  />
                  <input name="amount" type="hidden" value={total} required />
                  <input name="tax" type="hidden" value="0" />
                  <input name="taxReturnBase" type="hidden" value="0" />
                  <input name="currency" type="hidden" value="COP" />
                  <input name="signature" type="hidden" value={signature} />
                  <input name="test" type="hidden" value="0" />
                  <input name="extra1" type="hidden" value={props.user.id} />
                  <input name="extra2" type="hidden" value={cartProducts} />

                  <input
                    name="responseUrl"
                    type="hidden"
                    value={`https://ambly-web.vercel.app/compra-realizada`}
                  />
                  <input
                    name="confirmationUrl"
                    type="hidden"
                    value={`https://ambly-web.vercel.app/compra-realizada`}
                  />
                  {/* <div>
                  <Typography text="Datos de tarjeta" variant="H4" />
                  <br />
                  <Input type="email" label="Numero de tarjeta" name="nomber" />
                  <Input type="email" label="CV" name="nomber" />
                </div> */}
                </div>
                <div>
                  <Button
                    text="Realizar compra"
                    bg
                    color="redPrimary"
                    type="submit"
                  />
                </div>
              </form>
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
