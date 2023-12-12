import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, useId } from "react"
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
import { CourseApi, PayuApi, UserApi } from "./api"
const CourseApiModel = new CourseApi()
const PayuApiModel = new PayuApi()
const UserApiModel = new UserApi()

export default function Carrito(props: any) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [cartProducts, setCartProducts] = useState("")
  const [courses, setCourses] = useState([])
  const [currentCouse, setCurrentCouse] = useState({})
  const [usarCupon, setUsarCupon] = useState(false);
  const [codigoCupon, setCodigoCupon] = useState({code : '', error : false, message : ''});
  const [valueCupon, setValueCupon] = useState(0)
  const [currentUser, setCurrentUser] = useState({})
  const [total, setTotal] = useState(0)
  const [totalWithDiscount, setTotalWithDiscount] = useState(0)
  const [paymentData, setPaymentData] = useState({
    accountId: '',
    confirmationUrl: '',
    currency: '',
    description: 'Test PAYU',
    merchantId: '',
    referenceCode: '',
    signature: '',
    tax: 0,
    taxReturnBase: 0,
    test : '0'
  });
  let urlsite = ""

  if (typeof window !== "undefined") {
    urlsite = window.location.host || ""
  }
  
  const validateCupon = async (info : any) => {
    
    if (usarCupon && codigoCupon.code) {
      setLoading(true)
        const response = await PayuApiModel.GetCupon(info);
        if (response.status === 200) {
          setCodigoCupon(prevState => ( {
            ...prevState,
            error : false,
            message : response.data.message
          }))
          setValueCupon(parseInt(response.data.discount_value, 10))
          
        } else {
          setCodigoCupon(prevState => ({
            ...prevState,
            error : true,
            message : response.data.message

          }));
        }
    }
    setLoading(false)
  };

  const getItems = () => {
    const stored = localStorage.getItem("cart_products")
    if (stored) {
      const cart_products = JSON.parse(stored)
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
        if (response.status === 200){
          setCourses(filterdata)
          setCurrentCouse(filterdata[0])          
        }
        setLoading(false)
      })()
    }
  }, [props.user.id])

  const deleteItem = (id: number) => {
    const stored = localStorage.getItem("cart_products")

    if (stored) {
      const cart_products: Array<any> = JSON.parse(stored)
      const filterdata = cart_products.filter((item: any) => item !== id)
      localStorage.setItem("cart_products", JSON.stringify(filterdata))
    }
    getItems()
  }

  interface UserInfo {
    username : string,
    email : string,
    phone : string
  }

  useEffect(() => {
    ;(async () => {
      const response = await UserApiModel.GetUser(props.user.id)     
      setCurrentUser({
        username: response.data.user.username,
        email: response.data.user.email,
        phone: response.data.user.phone,
      })
    })()
  }, [])

  interface CourseInfo {
    price_course: string;
    id : number;
  }

  const valueCourse = (currentCouse as CourseInfo)?.price_course;
  const courseId = (currentCouse as CourseInfo)?.id;
  const username = (currentUser as UserInfo)?.username;     
  const email = (currentUser as UserInfo)?.email;      
  const phone = (currentUser as UserInfo)?.phone;
  
  const data = {
    value : valueCourse ? parseInt(valueCourse, 10) : 0,
    courseId : courseId ? courseId : 0,
    codeDiscount : codigoCupon.code ? codigoCupon.code : '',
    token : props?.user?.token
  }

  const regitserAndSubmitTransaction = async () => {
    setLoading(true)
    if (data) {
      const response = await PayuApiModel.RegisterTransaction(data)
      console.log(response);
      if (response.status === 200) {
          setPaymentData({
            ...paymentData,
            accountId: response.data.data.accountId,
            confirmationUrl: response.data.data.confirmationUrl,
            currency: response.data.data.currency,
            description: response.data.data.description,
            merchantId: response.data.data.merchantId,
            referenceCode: response.data.data.referenceCode,
            signature: response.data.data.signature,
            tax: response.data.data.tax,
            taxReturnBase: response.data.data.taxReturnBase,
        })
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    regitserAndSubmitTransaction()
    setTotal(parseInt(valueCourse))
    setTotalWithDiscount(parseInt(valueCourse))
    if (valueCupon) {
      const nuevoTotal = total - valueCupon      
      setTotalWithDiscount(nuevoTotal)
    }
  }, [valueCourse, valueCupon])
  

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
              text="Comprar curso"
              variant="H1"
              style={{ textAlign: "left", width: "100%" }}
            />

            <div className="items-carrito">
              {courses.map((item: any, index: number) => {
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
                            text={item.instructor?.name_instructor}
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
            {courses.length > 0 ?
             <div className="validateCupon">
             <label>
               <input type="checkbox" onChange={() => setUsarCupon(!usarCupon)} />
               Usar cupón de descuento
             </label>
             {usarCupon && (
               <section>
                  <label>
                   <input
                   value={codigoCupon.code} 
                   type="text"
                   placeholder="Ingrese el cupón de descuento"
                   onChange={(e) => setCodigoCupon(prevState =>({...prevState, code : e.target.value}))} />
                 </label>
                 {codigoCupon?.error ? <span style={{color : 'red'}}>{codigoCupon.message}</span> : <span style={{color : 'green'}}>{codigoCupon.message}</span>}
                 {codigoCupon?.code && (
                   <button  onClick={() => validateCupon({code : codigoCupon.code, course_id : courseId})}>Validar cupón</button>
                 )}
               </section>
              
             )}
           </div> : 'Por favor selecciona el curso que deseas comprar' 
            }
           
            <div className="total">
              <Typography
                text={`Subtotal: $${new Intl.NumberFormat("es-MX").format(total)}`}
                variant="H5"
              />
              <hr />
              <Typography
                text={`Descuento: $${new Intl.NumberFormat("es-MX").format(valueCupon)}`}
                variant="H6"
              />
              <hr />
              <Typography
                text={`Total: $${new Intl.NumberFormat("es-MX").format(totalWithDiscount)}`}
                variant="H2"
              />
            </div>
          </div>
          <div style={{ width: "80%" }}>
            {props.user ? (
              <form
                method="post"
                action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
              >
                <div className="divider"></div>
                <div className="form">
                  <input name="buyerFullName" type="hidden" value={username} />
                  <input name="buyerEmail" type="hidden" value={email} />
                  <input name="mobilePhone" type="hidden" value={phone} />
                  <input name="merchantId" type="hidden" value={paymentData?.merchantId} />
                  <input name="accountId" type="hidden" value={paymentData?.accountId} />
                  <input name="description" type="hidden" value={paymentData?.description} />
                  <input name="referenceCode" type="hidden" value={paymentData?.referenceCode} />
                  <input name="amount" type="hidden" value={totalWithDiscount} />
                  <input name="tax" type="hidden" value={paymentData?.tax} />
                  <input name="taxReturnBase" type="hidden" value={paymentData?.taxReturnBase} />
                  <input name="currency" type="hidden" value={paymentData?.currency} />
                  <input name="signature" type="hidden" value={paymentData?.signature} />
                  <input name="test" type="hidden" value={paymentData?.test} />
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
                    value={paymentData.confirmationUrl}
                  />
                </div>
                <div>
                  <Button
                    text="Realizar pago"
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