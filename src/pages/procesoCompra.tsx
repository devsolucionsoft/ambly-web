import Head from "next/head"
import { useState, useEffect, useId, useRef, FormEvent } from "react"
import { useRouter } from "next/router"
import axios from "axios"
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
// API
import { AuthApi } from "./api"
import { CourseApi, PayuApi, UserApi } from "./api"
import Swal from "sweetalert2"
import useValidateForm, {
  InputValidationI,
  IErrorInputs,
} from "../hooks/useValidateForm"

const CourseApiModel = new CourseApi()
const PayuApiModel = new PayuApi()
const UserApiModel = new UserApi()

export default function Carrito(props: any) {
  const [showLogin, setShowLogin] = useState(true);
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [cartProducts, setCartProducts] = useState("")
  const [courses, setCourses] = useState([])
  const [currentCouse, setCurrentCouse] = useState({})
  const [usarCupon, setUsarCupon] = useState(false);
  const [codigoCupon, setCodigoCupon] = useState({ code: '', error: false, message: '' });
  const [valueCupon, setValueCupon] = useState(0)
  const [currentUser, setCurrentUser] = useState({})
  const [total, setTotal] = useState(0)
  const [totalWithDiscount, setTotalWithDiscount] = useState(0)
  const formRef = useRef<HTMLFormElement>(null);
  const formRefLogged = useRef<HTMLFormElement>(null);
  const currentPath = router.asPath;
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
    test: '0'
  });
  let urlsite = ""

  const defaultInputs = {
    email: "",
    password: "",
    username: "",
  }
  const [stateInputs, setStateInputs] = useState(defaultInputs)
  const defaultValidation: InputValidationI = {
    email: { required: "email" },
    password: { required: "text" },
    username: { required: "text" },
  }
  const { validationInputs, getValidation } = useValidateForm({
    defaultInputs,
    defaultValidation,
  })

  const AuthApiModel = new AuthApi()
  const [errorInputs, setErrorInputs] = useState<IErrorInputs>(validationInputs)


  if (typeof window !== "undefined") {
    urlsite = window.location.host || ""
  }

  //Validación de cupón ingresado por el usuario
  const validateCupon = async (info: any) => {
    if (usarCupon && codigoCupon.code) {
      setLoading(true)
      const response = await PayuApiModel.GetCupon(info);
      if (response.status === 200) {
        setCodigoCupon(prevState => ({
          ...prevState,
          error: false,
          message: response.data.message
        }))
        setValueCupon(parseInt(response.data.discount_value, 10))

      } else {
        setCodigoCupon(prevState => ({
          ...prevState,
          error: true,
          message: response.data.message

        }));
      }
    }
    setLoading(false)
    localStorage.removeItem("coupon_code");
  };

  //Se obtiene la data del carrito de compras
  const getItems = () => {
    const stored = localStorage.getItem("cart_products")
    if (stored) {
      const cart_products = JSON.parse(stored)
        ; (async () => {
          setLoading(true)
          const response = await CourseApiModel.GetCourses()
          const filterdata = response.data.filter((item: any) =>
            cart_products.includes(item.id)
          )
          if (response.status === 200) {
            setCourses(filterdata)
            setCurrentCouse(filterdata[0])
          }
          setLoading(false)
        })()
    }
  }
  //Se obtiene la data del carrito de compras al cargar la página
  useEffect(() => {
    const stored = localStorage.getItem("cart_products")
    if (stored) {
      setCartProducts(stored)
      const cart_products: Array<any> = JSON.parse(stored)
        ; (async () => {
          setLoading(true)
          const response = await CourseApiModel.GetCourses()
          const filterdata = response.data.filter((item: any) =>
            cart_products.includes(item.id)
          )
          if (response.status === 200) {
            setCourses(filterdata)
            setCurrentCouse(filterdata[0])
          }
          setLoading(false)
        })()
    }
  }, [props.user.id])

  //Se borra el curso seleccionado
  const deleteItem = (id: number) => {
    const stored = localStorage.getItem("cart_products")

    Swal.fire({
      text: '¿Estás seguro que desesas borrar este curso de tu carrito de compras?',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      color: 'white',
      confirmButtonColor: 'gray',
      iconColor: '#FF3437',
      cancelButtonColor: '#FF3437',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed && stored) {
        const cart_products: Array<any> = JSON.parse(stored)
        const filterdata = cart_products.filter((item: any) => item !== id)

        localStorage.setItem("cart_products", JSON.stringify(filterdata))
        // Verificar si el carrito está vacío
        if (filterdata.length === 0) {
          // Redirigir a la página anterior
          window.history.back();
        }
        //Se llama la función para actualizar la información que ve el usuario
        getItems()

      }
    })
  }

  //Se crea una interfaz para darle el tipo de datos a las variables
  interface UserInfo {
    username: string,
    email: string,
    phone: string
  }
  //Se obtiene la data del usuario que está logueado
  useEffect(() => {
    ; (async () => {
      if (props.user) {
        const response = await UserApiModel.GetUser(props.user.id)
        setCurrentUser({
          username: response.data.user.username,
          email: response.data.user.email,
          phone: response.data.user.phone,
        })
      }
    })()
  }, [])
  //Se crea una interfaz para darle el tipo de datos a las variables
  interface CourseInfo {
    price_course: string;
    id: number;
  }
  //Se relaciona a currentCourse del tipo CourseInfo para poder acceder a las variables
  const valueCourse = (currentCouse as CourseInfo)?.price_course;
  const courseId = (currentCouse as CourseInfo)?.id;
  const username = (currentUser as UserInfo)?.username;
  const email = (currentUser as UserInfo)?.email;
  const phone = (currentUser as UserInfo)?.phone;

  const data = {
    value: valueCourse ? parseInt(valueCourse, 10) : 0,
    courseId: courseId ? courseId : 0,
    codeDiscount: codigoCupon.code ? codigoCupon.code : '',
    token: props?.user?.token
  }
  //Función para registrar la transacción
  const regitserAndSubmitTransaction = async () => {
    setLoading(true)
    if (data && props.user) {
      const response = await PayuApiModel.RegisterTransaction(data)
      if (response.status === 200) {
        //Si la respuesta es 200 se setea PaymentData con la información obtenida
        setPaymentData((prevData) => (
          {
            ...prevData,
            accountId: response.data.data.accountId,
            confirmationUrl: response.data.data.confirmationUrl,
            currency: response.data.data.currency,
            description: response.data.data.description,
            merchantId: response.data.data.merchantId,
            referenceCode: response.data.data.referenceCode,
            signature: response.data.data.signature,
            tax: response.data.data.tax,
            taxReturnBase: response.data.data.taxReturnBase,
          }
        ))
        setTimeout(() => {
          if (formRefLogged.current) {
            formRefLogged.current.submit();
          } else {
            console.error("El formulario no está disponible.");
          }
        }, 0);
      }
    }
    setLoading(false)
  }
  //LLamado de la función de Registrar transacción y se calcula el valor del curso
  useEffect(() => {
    // if (data.value) {
    //   regitserAndSubmitTransaction()
    // }
    setTotal(parseInt(valueCourse))
    setTotalWithDiscount(parseInt(valueCourse))
    if (valueCupon) {
      const nuevoTotal = total - valueCupon
      setTotalWithDiscount(nuevoTotal)
    }
  }, [valueCourse, valueCupon])

  const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setStateInputs({
      ...stateInputs,
      [event.target.name]: event.target.value,
    })
    setErrorInputs(validationInputs)
  }

  const botonRef = useRef(null);

  useEffect(() => {
    codigoCupon.code = localStorage.getItem("coupon_code") || '';
    let code = localStorage.getItem("coupon_code");

    if (codigoCupon.code) {
      setUsarCupon(true); // Activar el uso del cupón automáticamente
      setCodigoCupon(prevState => ({
        ...prevState,
        code: codigoCupon.code,
      }));
    }
  }, [])

  const handleRegistry = async () => {
    const { errors, validation } = getValidation(stateInputs)
    if (validation) {
      setLoading(true)
      const response = await AuthApiModel.UserRegister(stateInputs)
      if (response.status !== 201) {
        Swal.fire({
          title: "No se ha podido realizar el regístro.",
          text: "Comprueba tu email e intentalo mas tarde",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
        setLoading(false);
        return;
      }
      setCurrentUser({
        username: stateInputs.username,
        email: stateInputs.email,
        phone: '',
      })
      setLoading(false)
      return response;
    } else {
      setErrorInputs({
        ...errorInputs,
        ...errors,
      })
    }
  };

  const handleLogin = async () => {
    const { errors, validation } = getValidation(stateInputs)

    if (validation) {
      setLoading(true)
      try {
        const response = await axios.post(`/api/login`, stateInputs)
        setLoading(false)
        return response;
        const redirectPath = currentPath || "/";
        router.replace(redirectPath as string);
      } catch (error: any) {
        setLoading(false)
        Swal.fire({
          title: "Valida tu usuario y contraseña",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
      }
    } else {
      setLoading(false)
      setErrorInputs({
        ...errorInputs,
        ...errors,
      })
    }
  }

  const handleRegistryAndSubmit = async () => {
    try {
      const response = await handleRegistry();
      if (response.status === 201) {
        const responseLogin = await handleLogin();

        if (responseLogin?.status === 200) {
          const responseTransaction = await PayuApiModel.RegisterTransaction({
            ...data,
            token: responseLogin.data.token,
          });

          if (responseTransaction.status === 200) {
            setPaymentData((prevData) => ({
              ...prevData,
              accountId: responseTransaction.data.data.accountId,
              confirmationUrl: responseTransaction.data.data.confirmationUrl,
              currency: responseTransaction.data.data.currency,
              description: responseTransaction.data.data.description,
              merchantId: responseTransaction.data.data.merchantId,
              referenceCode: responseTransaction.data.data.referenceCode,
              signature: responseTransaction.data.data.signature,
              tax: responseTransaction.data.data.tax,
              taxReturnBase: responseTransaction.data.data.taxReturnBase,
            }));

            // Espera a la actualización de paymentData y luego envía el formulario
            setTimeout(() => {
              if (formRef.current) {
                formRef.current.submit();
              } else {
                console.error("El formulario no está disponible.");
              }
            }, 0); // 0 ms delay, allows state update to complete
          }
        }
      }
    } catch (error) {
      console.error("Error en handleRegistryAndSubmit:", error);
    }
  };


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

        <div className="content-page form" style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>

        <Typography text="Proceso de compra" variant="H4" />

        {props.user ? (
            <form style={{
              display: "none",
              justifyContent: "center",
              padding: "10px",
              alignSelf: "center",
              flexDirection: "column",
            }}
              method="post"
              action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
              ref={formRefLogged}

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
                  value={`https://ambly.co/compra-realizada`}
                />
                <input
                  name="confirmationUrl"
                  type="hidden"
                  value={paymentData.confirmationUrl}
                />
              </div>
              <div style={{
                display: "flex", justifyContent
                  : "center", padding: "10px"
              }}>
                <Button style={{ width: "100%" }}
                  text="Realizar pago"
                  bg
                  color="redPrimary"
                  onClick={regitserAndSubmitTransaction}
                  disabled={!currentCouse}
                />
              </div>
            </form>
          ) : (
            <div className="form-login">
              <form style={{
                display: "none",
                justifyContent: "center",
                padding: "10px",
                alignSelf: "center",
                flexDirection: "column",
              }}
                method="post"
                action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
                ref={formRef}
              >
                <div className="divider"></div>
                <div className="form" style={{display:'none'}}>
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
                    value={`https://ambly.co/compra-realizada`}
                    />
                  <input
                    name="confirmationUrl"
                    type="hidden"
                    value={paymentData.confirmationUrl}
                  />
                </div>
              </form>
              <Input
                type="text"
                label="Nombre"
                name="username"
                onChange={handleKeyUp}
                error={errorInputs.username.error}
                message={errorInputs.username.message}
              />
              <Input
                type="text"
                label="E-mail"
                name="email"
                onChange={handleKeyUp}
                error={errorInputs.email.error}
                message={errorInputs.email.message}
              />
              <Input
                type="password"
                label="Asignar una contraseña"
                name="password"
                onChange={handleKeyUp}
                error={errorInputs.password.error}
                message={errorInputs.password.message}
                visible={true}
              />

              <div className="politis">
                <p>
                  Al continuar acepto <span> términos y condiciones</span> y{" "}
                  <span>políticas de privacidad</span>
                </p>
              </div>
              <div className="button-contain continue">
                <Button
                  text="Continuar Compra"
                  bg
                  color="redPrimary"
                  onClick={handleRegistryAndSubmit}
                  disabled={!currentCouse}
                />
              </div>
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