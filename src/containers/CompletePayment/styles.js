import styled from "styled-components";
import Background from "../../assets/background.svg"; // substitua se o nome for diferente

export const Container = styled.div`
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #625E5E;
  border-radius: 20px;
  padding: 50px 60px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const LogoImg = styled.img`
  width: 180px;
  margin-bottom: 30px;
`;

export const Icon = styled.div`
  background-color: #30b130;
  width: 100px;
  height: 100px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #ffff;
  font-size: 28px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.p`
  color: #ffff;
  font-size: 18px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  background-color: #9758a6;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #7e4790;
  }
`;
