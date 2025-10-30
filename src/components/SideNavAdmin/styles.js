import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  background-color: #2f2f2f;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  padding: 20px;

  img {
    width: 140px;
    margin: 0 auto ;
  }
`;

export const NavLinkContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? "#fff" : "#ccc")};
  background-color: ${(props) => (props.$isActive ? "#9758a6" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    background-color: #9758a6;
    color: #fff;
  }

  span {
    flex: 1;
    margin-left: 10px;
    text-align: left;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 5px;
  gap: 4px;

  a {
    text-decoration: none;
    color: #ddd;
    font-size: 15px;
    padding: 6px 12px;
    border-radius: 6px;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
  }
`;


