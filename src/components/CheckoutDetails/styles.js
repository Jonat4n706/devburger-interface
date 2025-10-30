import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px;
  color: #484848;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  h1 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 25px;
    color: #9758a6;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 35px 0 15px;
    color: #484848;
    border-bottom: 2px solid #9758a6;
    padding-bottom: 5px;
  }

  @media (max-width: 768px) {
    padding: 25px;
    border-radius: 15px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #484848;
  }

  input {
    width: 100%;
    height: 42px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    padding: 0 12px;
    background: #fafafa;
    color: #484848;
    transition: border 0.2s;

    &:focus {
      border: 1px solid #9758a6;
      box-shadow: 0 0 3px rgba(151, 88, 166, 0.4);
      outline: none;
    }
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 10px;
  flex-wrap: wrap;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #484848;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #9758a6;
    }
  }

  input[type="radio"] {
    accent-color: #9758a6;
    transform: scale(1.1);
    margin-right: 6px;
    height: 18px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 35px;

  span {
    font-size: 18px;
    margin-bottom: 15px;

    strong {
      color: #9758a6;
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    gap: 15px;
  }

  button {
    min-width: 180px;
    height: 44px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    background-color: #9758a6;
    color: #fff;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #7d4591;
      transform: scale(1.03);
    }

    &:active {
      transform: scale(0.97);
    }
  }

  @media (max-width: 768px) {
    align-items: center;

    > div {
      flex-direction: column;
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`;
