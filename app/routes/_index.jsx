import { Link } from '@remix-run/react';
import styles from '~/styles/_index.css';
import LogoTexto from '../components/logoTexto';
import estrellas from '~/media/images/estrellas.webp';
import bolo from '~/media/images/boloBlanco.webp';
import imagen1 from '~/media/images/imagen1.webp';
import imagen2 from '~/media/images/imagen2.webp';
import imagen3 from '~/media/images/maquinita.webp';
import { useEffect, useRef, useState } from 'react';
import useIntersection from '~/useIntersection';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Inicio' },
    {
      name: 'description',
      content: "Bienvenidos a la pagina principal de 'Bowling de Paso'!",
    },
  ];
};

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [elementRef, isVisible] = useIntersection({
    treshold: 0.1,
  });
  const [elementRef2, isVisible2] = useIntersection({
    treshold: 0.1,
  });
  const [elementRef3, isVisible3] = useIntersection({
    treshold: 0.1,
  });

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <main className="main">
        <div className="main_banner">
          <img
            className="main_estrellas"
            src={estrellas}
            alt="estrellas en webp"
          />
          <LogoTexto />
          <img
            className="main_bolo"
            src={bolo}
            alt="bolo blanco"
            loading="lazy"
          />
        </div>
      </main>
      <article className="article">
        <section className="section_intro">
          <div className="section_intro_text">
            <p className="section_intro_text_p1">
              En nuestro Bowling, sabemos que lo importante es disfrutar de la
              compañía mutua.
            </p>
            <p className="section_intro_text_p2">
              ¡Por eso es el lugar ideal para pasar un rato agradable todos
              juntos!
            </p>
          </div>
          <div className="section_intro_time">
            <div className="section_intro_time_days">
              <p className="section_intro_time_p">abierto</p>
              <p className="section_intro_time_p">todos los días!</p>
              <p className="section_intro_time_p">de 17hs a 2:30hs</p>
            </div>
            <div className="section_intro_time_slash"></div>
            <div className="section_intro_time_ubi">
              <p className="section_intro_time_p">ubicación</p>
              <p className="section_intro_time_p">córdoba</p>
              <p className="section_intro_time_p">3766</p>
            </div>
          </div>
        </section>

        <section className="section_first">
          <h2 className="section_first_titulo">nos&nbsp;mudamos!</h2>
          <div className="section_first_datos">
            <div
              className="section_first_containerImg"
              ref={elementRef}
              isvisible={isVisible ? 'true' : 'false'}
            >
              <img
                className="section_first_img"
                src={imagen1}
                alt="imagen del bowling"
                loading="lazy"
              />
            </div>
            <p className="section_first_p">
              ¡Tenemos <b>grandes noticias</b>! Nos hemos mudado a un nuevo
              lugar <b>espectacular</b>, más amplio y completamente renovado
              para brindarte una experiencia de entretenimiento <b>única</b>.
              Desde el momento en que ingreses, te maravillarás con su diseño{' '}
              <b>moderno</b> y <b>elegante</b>. Además de nuestras atracciones
              emocionantes, ahora ofrecemos más opciones gastronómicas y áreas
              de descanso mejoradas. Ven y descubre todo lo que hemos preparado
              para ti en nuestra nueva ubicación.
            </p>
          </div>
        </section>
        <section className="section_second">
          <h2 className="section_second_titulo">
            qué&nbsp;te&nbsp;podemos ofrecer?
          </h2>
          <div className="section_second_datos">
            <div
              className="section_second_containerImg"
              ref={elementRef2}
              isvisible={isVisible2 ? 'true' : 'false'}
            >
              <img
                className="section_second_img"
                src={imagen2}
                alt="imagen del bowling"
                loading="lazy"
              />
            </div>
            <p className="section_second_p">
              ¡Ven a nuestro <b>bowling</b> y disfruta de una experiencia{' '}
              <b>inolvidable</b>! Celebramos <b>cumpleaños</b>, ofrecemos{' '}
              <b>líneas gratis</b>, diversión garantizada, variedad de{' '}
              <b>comidas</b>, <b>cervezas</b>, <b>cócteles</b> y un ambiente{' '}
              <b>increíble</b>. ¡Te esperamos para pasar momentos{' '}
              <b>geniales</b>!
            </p>
          </div>
        </section>
        <section className="section_third">
          <div
            className="section_third_containerImg"
            ref={elementRef3}
            isvisible={isVisible3 ? 'true' : 'false'}
          >
            <img
              className="section_third_img"
              src={imagen3}
              alt="imagen del bowling"
              loading="lazy"
            />
          </div>

          <div className="section_third_datos">
            <h2 className="section_third_titulo">diversión!</h2>{' '}
            <p className="section_third_p">
              Explora una experiencia de entretenimiento completa en nuestro
              centro. Además del emocionante <b>bowling</b>, encontrarás
              <b>maquinitas arcade</b> y <b>mesas de pool profesionales</b>.
              ¡Diversión para todas las edades y gustos en un solo lugar!
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
