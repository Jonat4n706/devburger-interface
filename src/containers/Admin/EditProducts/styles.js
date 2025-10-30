import styled from "styled-components";

export const Container = styled.div`
  background: #f6f4ef; /* tom areia */
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 750px;
  margin: 30px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  position: relative;

  h2 {
    color: #4a148c;
    font-weight: 700;
    margin-top: 10px;
  }

  p {
    color: #666;
    font-size: 14px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  background: none;
  border: none;
  color: #4a148c;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    color: #333;
    margin-bottom: 6px;
  }

  input,
  select {
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 15px;
    background-color: white;
    transition: 0.2s;

    &:focus {
      border-color: #6a1b9a;
      box-shadow: 0 0 5px rgba(106, 27, 154, 0.2);
      outline: none;
    }
  }

  &.checkbox {
    flex-direction: row;
    align-items: center;

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #4a148c;
      font-weight: 500;
    }
  }
`;

export const ImagePreview = styled.img`
  width: 160px;
  height: 120px;
  object-fit: cover;
  margin-top: 10px;
  border-radius: 12px;
  border: 2px solid #ddd;
`;

export const SaveButton = styled.button`
  align-self: center;
  padding: 12px 40px;
  background-color: #6a1b9a;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #4a148c;
    transform: scale(1.03);
  }
`;
