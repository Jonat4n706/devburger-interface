import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 60px 20px;

  p {
    align-self: flex-start;
    color: #777;
    font-size: 15px;
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #2f2f2f;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 500px; /* ← aumentado de 400px para 500px */

  label {
    color: #fff;
    font-size: 15px;
    margin-bottom: 8px;
  }

  input,
  select {
    margin-bottom: 24px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
`;

export const Select = styled.select`
  padding: 12px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
`;

export const UploadLabel = styled.label`
  background-color: #444;
  color: #fff;
  padding: 14px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 25px;
  transition: background-color 0.3s ease;
  position: relative;

  input {
    display: none;
  }

  span {
    font-size: 15px;
  }

  &:hover {
    background-color: #555;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  max-height: 180px; /* aumentado um pouco */
  border-radius: 10px;
  object-fit: cover;
  margin-top: 12px;
  border: 2px solid #9758a6;
`;

export const Button = styled.button`
  background-color: #9758a6;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7d3f8a;
  }
`;
