import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  padding: 20px 30px;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  p {
    color: #777;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 30px;
  padding: 8px 15px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 15px;
    color: #444;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #555;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  thead {
    background-color: #2f2f2f;
    color: #fff;
    text-align: left;

    th {
      padding: 15px;
      font-weight: 500;
      font-size: 14px;
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f8f8f8;

    }

    td {
      padding: 14px 16px;
      font-size: 15px;
      color: #333;
      text-align: left;
    }

    td:last-child {
      
     
    }
  }
`;

export const TableRowStyled = styled.tr`
  border-bottom: 1px solid #eee;

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ProductImage = styled.img`
  width: 90px;            
  border-radius: 12px; 
  object-fit: cover;   
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* leve zoom ao passar o mouse */
  }
`;
export const OfferCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #7e4790; /* roxo DevBurger */
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

