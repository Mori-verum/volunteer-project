import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to="/why-us"
            className={({ isActive }) =>
              `${
                isActive
                  ? "navigation__link_active navigation__link"
                  : "navigation__link"
              }`
            }
          >
            Почему мы?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              `${
                isActive
                  ? "navigation__link_active navigation__link"
                  : "navigation__link"
              }`
            }
          >
            Калькулятор
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${
                isActive
                  ? "navigation__link_active navigation__link"
                  : "navigation__link"
              }`
            }
          >
            Портфолио
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${
                isActive
                  ? "navigation__link_active navigation__link"
                  : "navigation__link"
              }`
            }
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
