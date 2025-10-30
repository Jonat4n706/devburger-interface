import { useState } from "react";
import { SignOutIcon, CaretUpIcon, CaretDownIcon } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { navLinks } from "./navLinks";
import { Container, NavLink, NavLinkContainer, SubMenu } from "./styles";
import { useUser } from "../../hooks/UserContext";
import { useResolvedPath } from "react-router-dom";


export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <Container>
      <img src={Logo} alt="Logo Devburger" />

      <NavLinkContainer>
        {navLinks.map((link) => (
          <div key={link.id}>
            <NavLink
              to={link.path || "#"}
              $isActive={pathname === link.path}
              onClick={() => link.sublinks && handleToggle(link.id)}
            >
              {link.icon}
              <span>{link.label}</span>
              {link.sublinks &&
                (openMenu === link.id ? (
                  <CaretUpIcon size={18} weight="bold" />
                ) : (
                  <CaretDownIcon size={18} weight="bold" />
                ))}
            </NavLink>

            {/* Submenu */}
            {link.sublinks && openMenu === link.id && (
              <SubMenu>
                {link.sublinks.map((sub) => (
                  <NavLink
                    key={sub.id}
                    to={sub.path}
                    $isActive={pathname === sub.path}
                  >
                    <span>{sub.label}</span>
                  </NavLink>
                ))}
              </SubMenu>
            )}
          </div>
        ))}
      </NavLinkContainer>

    
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon size={22} />
          <span>Sair</span>
        </NavLink>
      
    </Container>
    
  );
}
