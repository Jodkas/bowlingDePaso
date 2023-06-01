import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import EnBlanco from '../components/enBlanco';
import ItemCarta from '../components/itemCarta';
import Marcas from '../components/marcas';
import styles from '~/styles/menu.css';
import stylesItemCarta from '~/styles/itemCarta.css';
import stylesMarcas from '~/styles/marcas.css';
import pizza from '~/media/images/pizza.png';
import cerveza from '~/media/images/cerveza.png';
import helado from '~/media/images/helado.png';
import { getPosts } from '../db/db';
import { useEffect, useState } from 'react';

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
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesItemCarta },
    { rel: 'stylesheet', href: stylesMarcas },
  ];
};

export const loader = async () => {
  return json(await getPosts());
};

export default function Menu() {
  const data = useLoaderData();
  const [categoria, setCategoria] = useState(0);
  const [subcategoria, setSubcategoria] = useState(-1);
  const [pagina, setPagina] = useState({ categoria: 0, subcategoria: 0 });

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
      <article className="carta">
        <div className="carta_categorias">
          <ul className="carta_categoriasUl">
            {data[categoria].subcategoriasBool ? (
              <div className="carta_subcategorias">
                <ul className="carta_subcategoriasUl">
                  {data[categoria].data.map((data) => (
                    <li
                      className="carta_subcategoriasLi"
                      key={data.name}
                      onClick={() =>
                        setPagina({
                          categoria: categoria,
                          subcategoria: data.id,
                        })
                      }
                    >
                      <p className="carta_subcategoriasP">{data.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {data.map((data) => (
              <li
                className="carta_categoriasLi"
                key={data.name}
                onClick={() => {
                  categoria != data.id
                    ? (setCategoria(data.id),
                      data.subcategoriasBool
                        ? null
                        : setPagina({ categoria: data.id, subcategoria: 0 }))
                    : null;
                }}
              >
                <p className="carta_categoriasP">{data.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <section className="carta_info">
          {data[pagina.categoria].subcategoriasBool
            ? data[pagina.categoria].data[pagina.subcategoria].data.map(
                (data) => <ItemCarta key={data.name} data={data} />
              )
            : data[pagina.categoria].data.map((data) => (
                <ItemCarta key={data.name} data={data} />
              ))}
          <Marcas />
        </section>
      </article>
    </>
  );
}
