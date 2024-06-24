import Head from "next/head"
import { useRouter } from "next/router"
// Styled components
import { Main } from "../styles/politicas.styled"
// Components
import { Typography, SideNav, Header } from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../lib/session"

export default function Home(props: any) {
  const router = useRouter()

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
        <div className="contain-page">
          <Typography variant="H4" text="About" />
          <br />
          <br />
          <Typography
            variant="P"
            text="POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES, cumplimiento de la Ley Estatutaria 1581 de 2012 por la cual se establece el Régimen General de Protección de Datos en Colombia, así como de las mejores prácticas a nivel internacional en esta materia, es responsable del tratamiento de sus datos personales. 1) Derechos como titular de la Información: a. Conocer, actualizar, rectificar, suprimir y revocar los datos personales. Este derecho se podrá ejercer, entre otros, frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado. b. Solicitar prueba de la autorización de Tratamiento otorgada. c. Ser informado respecto del uso que Bortek SAS le ha dado a los datos personales. d. Presentar ante los organismos de control correspondientes, quejas por infracciones a lo dispuesto en la normativa vigente y las demás normas que la modifiquen, adicionen o complementen. e. Acceder en forma gratuita a los datos personales que hayan sido objeto de Tratamiento. 2) Datos Bortek SAS – Nit 901.587.150-4, Dirección: Calle 86 # 20-45, Bogotá, D.C. – Colombia, b. Correo electrónico: atencion@ambly.com.co, c. Teléfonos en Bogotá: PBX 3204947873 d. sitio web: ambly.com.co 3) Canales a través de los cuales puede ejercer derechos: El Titular podrá utilizar el sistema de correspondencia de Bortek SAS, mediante correo electrónico a la dirección atencion@ambly.com.co 4) Área Responsable de atención de quejas, reclamos, felicitaciones y sugerencias: El seguimiento y control de la atención de estos casos, es responsabilidad del área GESTIÓN mediante los canales indicados en el numeral 3) de este comunicado. 5) Procedimientos para conocimiento, actualización, supresión, revocación y rectificación: el titular podrá solicitar a través de los canales de contacto nombrados anteriormente, la actualización, supresión, revocación y rectificación de la información y/o efectuar consultas o reclamos relacionados con su información. Dichos requerimientos serán tramitados siempre y cuando cumplan con los siguientes requisitos: 1. La solicitud deberá ser dirigida a Bortek SAS 2. Deberá contar con la identificación del titular, su causahabiente, representante o mandatario 3. Habrá de contener la descripción de los hechos que dan lugar a su petición 4. Datos de contacto para notificación de la respuesta 5. Documentos y hechos soporte de su petición En caso de que el requerimiento resulte incompleto en cuanto a sus requisitos, el solicitante será requerido para que dentro de los cinco (5) días hábiles siguientes a la recepción del requerimiento subsane sus omisiones. Transcurridos dos (2) meses desde la fecha en que el solicitante fue requerido para subsanar su petición sin obtener la información requerida, se entenderá que ha desistido del reclamo. El término máximo para atender la solicitud será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Si no fuere posible responder algún requerimiento en razón de su complejidad, se informará al solicitante el motivo por el cual no es posible responder dentro del término fijado por la normativa vigente. Cuando se notifique sobre la imposibilidad de responder en el término inicialmente señalado, deberá informarse al solicitante la fecha en la que se responderá el requerimiento, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término. 6) Políticas de Bortek SAS frente al Tratamiento de datos personales: 1. Cumplir con el tratamiento de los datos personales de los titulares dentro de los parámetros establecidos por la Constitución y la normativa vigente. 2. Obtener de acuerdo a lo estipulado en la normativa vigente la autorización expresa de los titulares en medios físicos, electrónicos y/o telefónicos que permita su posterior consulta a fin de constatar de forma inequívoca que sin el consentimiento del titular los datos nunca hubieren sido capturados y almacenados en medios electrónicos o físicos. Así mismo se podrá obtener por medio de conductas claras e inequívocas del Titular que permitan concluir de una manera razonable que éste otorgó su consentimiento para el manejo de sus datos personales. 3. Propender por la confidencialidad, integridad y disponibilidad de los datos personales por parte del responsable y los encargados. 4. Los datos personales sólo serán tratados por aquellos colaboradores que lo requieran en función de las actividades propias de su cargo o por los Responsables o Encargados; a estos últimos se les suministrará la información requerida para el cumplimiento de las obligaciones contractuales. 5.Los colaboradores deberán garantizar la reserva de la información durante el periodo de vinculación con Bortek SAS o la vigencia del contrato, cuando aplique, y con posterioridad a la terminación del mismo o desvinculación. 6. Realizar el tratamiento de los datos personales acorde con los fines autorizados por los titulares. 7. No divulgar datos personales en Internet u otro medio masivo de comunicación, a menos que se trate de información pública o información requerida por la normativa vigente. 8. La información de datos personales de los titulares será custodiada de acuerdo con las políticas de seguridad de la información y de retención de la organización. 9. Adoptar las demás medidas necesarias para que la información se mantenga actualizada. 10. Corregir la información cuando sea incorrecta y comunicar lo pertinente a cualquier tercero autorizado. 11. Tramitar las consultas y reclamos formulados por los Titulares en los términos señalados en la normativa vigente. 12. A solicitud del titular y cuando no tenga ningún deber legal o contractual de permanecer en las bases de datos, la información del titular deberá ser eliminada. 13. Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. 14. Bortek SAS aplicará las medidas de seguridad idóneas para el tratamiento de información clasificada como sensible en la cual se contempla entre otras, los datos personales de los hijos (niños, niñas y adolescentes) de los colaboradores. 15. Propender por el fortalecimiento de una cultura corporativa que abogue y salvaguarde los derechos de los titulares mediante jornadas de capacitación. 16. Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data. 17. Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada. 18. Garantizar que la información que se suministre a cualquier tercero autorizado, dentro de los parámetros establecidos en la normativa vigente, sea veraz, completa, exacta, actualizada, comprobable y comprensible. 19. Ambly podrá intercambiar información de datos personales con entidades públicas cuando la soliciten en ejercicio de sus funciones, para temas relacionados con planes, programas y proyectos en desarrollo de la política pública. 20. Las políticas establecidas podrán ser modificadas en cualquier momento. Las modificaciones darán cumplimiento a la normatividad legal vigente, así como de las mejores prácticas a nivel internacional en esta materia, y entrarán en vigencia a partir de su publicación en los medios dispuestos para que sean de conocimiento de los titulares. 21. La transferencia de información de datos personales a países que no proporcionen niveles adecuados de protección de datos se realizará bajo las condiciones establecidas en la normativa vigente. 22.Desarrollar las actividades requeridas para dar cumplimiento a las obligaciones relacionadas con el Registro de las Base de Datos, cuando aplique. Bortek SAS, se permite informar: Que en cumplimiento de la Ley Estatutaria 1581 de 2012 por la cual se establece el Régimen General de Protección de Datos en Colombia y el Decreto Reglamentario 1377 de 2013, así como de las mejores prácticas a nivel internacional en esta materia, es responsable del tratamiento (recolección, almacenamiento, uso, circulación o supresión) de datos personales en desarrollo de su objeto misional enfocado a promover las exportaciones colombianas, la inversión extranjera directa, el turismo internacional y la marca país. Los titulares de datos personales tienen el derecho de conocer, actualizar, rectificar o suprimir frente a los responsables del tratamiento, la información recolectada en las bases de datos o archivos, en los términos establecidos en las normas vigentes y en la Política de Tratamiento de Datos Personales. Las finalidades del tratamiento de los datos personales que actualmente tiene Bortek SAS son los siguientes: 1) Desarrollar actividades propias de su fin comercial. 2) Realizar contactos comerciales con empresas instaladas en Colombia. 3) Suministrar información a cualquier ente con el Objetivo de realizar actividades de relación comercial. 4) Atender solicitudes realizadas por el Ministerio de Comercio, o cualquier otra autoridad. Agradecemos nos contacte en la eventualidad de requerir aclarar, actualizar, corregir o suprimir alguno de sus datos personales, siempre que sea procedente con la legislación aplicable. Para este fin, los canales de comunicación establecidos son la línea telefónica PBX 3204947874 y/o al correo electrónico atencion@ambly.com.co"
          />
        </div>
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  getSessionVerificationNotCreated,
  sessionOptions
)