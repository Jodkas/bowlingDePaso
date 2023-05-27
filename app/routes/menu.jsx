import { Link } from '@remix-run/react';
import EnBlanco from '../components/enBlanco';
import styles from '~/styles/menu.css';
import pizza from '~/media/images/pizza.png';
import cerveza from '~/media/images/cerveza.png';
import helado from '~/media/images/helado.png';

export const meta = () => {
  return [
    { title: 'Bowling de Paso - Menu' },
    {
      name: 'description',
      content: 'Carta de comidas, busca tu favorita!',
    },
  ];
};

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Menu() {
  return (
    <>
      <main className="main">
        <div className="logoText">
          <p className="logoText_bowling">BOWLING</p>
          <p className="logoText_dePaso">DE PASO</p>
        </div>
        <h1 className="titulo">MENÚ</h1>
        <p className="titulo_descripcion">
          En nuestro Bowling ofrecemos una variedad de comidas y bebidas
          deliciosas para una experiencia completa.
        </p>
        <div className="stickers">
          <img className="sticker" src={pizza} alt="pizza sin fondo" />
          <img className="sticker" src={cerveza} alt="cerveza sin fondo" />
          <img className="sticker" src={helado} alt="helado sin fondo" />
        </div>
      </main>
    </>
  );
}
