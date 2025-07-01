import styled from "styled-components";
import BackgroundLogo from "../../assets/background-login.svg";
import Background from "../../assets/background.svg";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    `;
export const LeftContainer = styled.div`
    background: url('${BackgroundLogo}');
    background-size: cover;
    background-position: center;
    
    width: 100%;
    max-width: 50%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    
    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
    max-width: 50%;
    height: 100%;
    
    background: url('${Background}');
    background-color: #1e1e1e;

    p{
        color: #fff;
        font-size: 25px;
        font-weight: 200;
        align-items: center;
    }
    a {
        color: #9758A6;
        font-weight: 600;
        text-decoration: underline;
    }
`;
export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color:#9758A6;

`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    gap: 20px;
    padding: 20px;

    
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    label {
        color: #9758A6;
        font-size: 23px;
        font-weight: 600;
    }

    p {
        color: #ff0000;
        font-size: 20px;
        line-height: 80%;
        font-weight: 600;
        height: 10px;
    }
`;
export const Input = styled.input`
    width: 100%;
    border: none;
    height: 52px;  
    border-radius: 8px;
    padding: 0 16px;
    font-size: 20px;
`;



