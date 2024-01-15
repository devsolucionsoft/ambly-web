import React from 'react';
import Head from 'next/head';
import { Main } from '../styles/index.styled';
import Typography from '../components/Typography';
import Image from 'next/image';
import errorImage from '../assets/images/error.jpg';
import { useRouter } from 'next/router';
import { IoMdArrowBack } from "react-icons/io";



const Error404 = () => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>404 - Página no encontrada</title>
            </Head>
            <Main>
                <article className='errorMain'>
                    <div className="errorContainer">
                        <Typography text="ERROR 404 - Página no encontrada" variant="H5" />
                        <p>Lo sentimos, no pudimos encontrar la página que estás buscando.
                            Parece que te has perdido en el vasto territorio de Internet.
                            Pero no te preocupes, siempre puedes volver al punto de inicio.</p>
                        <section onClick={() => router.push('/')}>
                            <IoMdArrowBack className="iconBack" />
                            <small>Volver a la página principal</small>
                        </section>
                    </div>
                        <Image
                            className='errorImage'
                            src={errorImage}
                            alt=""
                        />
                </article>
            </Main>
        </>
    );
};

export default Error404;
