import { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import IconAmbly from "../assets/images/icon-ambly.png"

// Styled components
import { Main } from '@/styles/countDown.styled'
// Components
import {
  Header,
  Sliders,
  HeaderSection,
  Typography,
  SideNav,
  Loader,
  Footer,
} from "../components"
import { withIronSessionSsr } from "iron-session/next"
import {
  sessionOptions,
  getSessionVerificationNotCreated,
} from "../../lib/session"

interface CountdownTimerProps {
    targetDate: string;
  }
  
interface TimeLeft {
  dias?: number;
  horas?: number;
  minutos?: number;
  segundos?: number;
}

interface FlipState {
  dias: boolean;
  horas: boolean;
  minutos: boolean;
  segundos: boolean;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft = {dias: 0, horas: 0, minutos: 0, segundos: 0};

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const refreshPageAndClearCache = () => {
  if (typeof window !== "undefined") {
    window.location.reload(true);
  }
};
  
  // Componente de contador de tiempo
  const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    const [flipState, setFlipState] = useState<FlipState>({
      dias: false,
      horas: false,
      minutos: false,
      segundos: false,
    });
  
    useEffect(() => {
        const ticAudio = new Audio('../assets/audio/second.wav');
        const timer = setInterval(() => {
          const newTimeLeft = calculateTimeLeft(targetDate);
          const updatedFlipState: FlipState = {
            dias: timeLeft.dias !== newTimeLeft.dias,
            horas: timeLeft.horas !== newTimeLeft.horas,
            minutos: timeLeft.minutos !== newTimeLeft.minutos,
            segundos: timeLeft.segundos !== newTimeLeft.segundos,
          };
          setFlipState(updatedFlipState);
          ticAudio.play();

          const suspensoAudio = new Audio("../assets/audio/bgNoise.wav");
          suspensoAudio.loop = true;
          suspensoAudio.play();
      
          // Remove flip-animate class after animation duration
          setTimeout(() => {
            setTimeLeft(newTimeLeft);   
            setFlipState({
              dias: false,
              horas: false,
              minutos: false,
              segundos: false,
            });
          }, 100);
          
          if (newTimeLeft.dias === 0 && newTimeLeft.horas === 0 && newTimeLeft.minutos === 0 && newTimeLeft.segundos === 0) {
            clearInterval(timer);
            refreshPageAndClearCache();
          }

        }, 1000);
      
        // Clean up the interval on component unmount
        return () => {
          clearInterval(timer);
        }
      }, [targetDate, timeLeft]);
  
    const formatTime = (time: number) => {
      return time.toString().padStart(2, '0');
    };
  
    return (
      <div className="returnTime">
        {timeLeft.dias !== undefined ? (
          <div className="timeContainer">
            {['dias', 'horas', 'minutos', 'segundos'].map((unit) => (
              <div className="typeTimeContainer" key={unit}>
                <div className="dateContainer">
                  <div className={`flip ${flipState[unit as keyof FlipState] ? 'flip-animate' : ''}`}>
                    <div className="front">{formatTime(timeLeft[unit as keyof TimeLeft]!)}</div>
                    <div className="back">{formatTime(timeLeft[unit as keyof TimeLeft]!)}</div>
                  </div>
                </div>
                <div className="typeDateContainer">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
        ) : (
          "¡La espera ha finalizado!"
        )}
      </div>
    );
  };

export default function CountDown(props: any) {
  const [loading, setLoading] = useState(false)
  const targetDate = "2024-07-09T10:59:28";


  return (
    <>
      <Head>
      <title>Ambly</title>
      <meta name="title" content="Ambly Cursos Online" />
      <meta name="description" content="Ambly te da la entrada a la mente brillante de destacadas figuras por medio de cursos en línea de alta calidad." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://ambly-web.vercel.app/"/>
      <meta property="og:title" content="Ambly Cursos Online"/>
      <meta property="og:description" content="Ambly te da la entrada a la mente brillante de destacadas figuras por medio de cursos en línea de alta calidad."/>
      <meta property="og:image" content="https://ambly-web.vercel.app/favicon.ico"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://ambly-web.vercel.app/"/>
      <meta property="twitter:title" content="Ambly Cursos Online"/>
      <meta property="twitter:description" content="Ambly te da la entrada a la mente brillante de destacadas figuras por medio de cursos en línea de alta calidad."/>
      <meta property="twitter:image" content="https://ambly-web.vercel.app/favicon.ico"/>

      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Loader loading={loading} />
        <SideNav minimal={!props.user} />
        <article className='container'>
            <div className="contain">
                <Image className="logo" src={IconAmbly} alt="" />
            </div>
            <div className='title'>
                <Typography text="Corren las horas, los minutos y los segundos, porque la espera está a punto de terminar!" variant="H1"/>
                <CountdownTimer targetDate={targetDate} />
            </div>
        </article>
      </Main>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr(
  getSessionVerificationNotCreated,
  sessionOptions
)
