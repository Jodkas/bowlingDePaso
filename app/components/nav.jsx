import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';

export default function Nav({ width, height }) {
  const [selected, setSelected] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [width >= 720]);

  useEffect(() => {
    width <= 720 ? setMenuOpen(false) : null;
  }, [selected]);

  return (
    <nav className="nav">
      <div
        className="nav_background"
        onClick={() => (menuOpen ? setMenuOpen(!menuOpen) : null)}
        open={menuOpen}
      ></div>
      <button
        className="nav_button"
        aria-label="boton del menú"
        open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="nav_span"></span>
        <span className="nav_span"></span>
        <span className="nav_span"></span>
      </button>
      <ul className="nav_ul" open={menuOpen}>
        <li
          className={`nav_li${selected == 1 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(1)}
        >
          <Link
            className={`nav_link${selected == 1 ? ' nav_link_selected' : ''}`}
            to="/"
          >
            INICIO
          </Link>
        </li>
        <li
          className={`nav_li${selected == 2 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(2)}
        >
          <Link
            className={`nav_link${selected == 2 ? ' nav_link_selected' : ''}`}
            to="/precios"
          >
            PRECIOS
          </Link>
        </li>
        <li
          className={`nav_li${selected == 3 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(3)}
        >
          <Link
            className={`nav_link${selected == 3 ? ' nav_link_selected' : ''}`}
            to="/menu"
          >
            MENU
          </Link>
        </li>
        <li
          className={`nav_li${selected == 4 ? ' nav_selected' : ''}`}
          onClick={() => setSelected(4)}
        >
          <Link
            className={`nav_link${selected == 4 ? ' nav_link_selected' : ''}`}
            to="/historia"
          >
            HISTORIA
          </Link>
        </li>
        <li className="nav_li" onClick={() => setMenuOpen(false)}>
          <Link className="nav_link" to="#contactos">
            CONTACTOS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
