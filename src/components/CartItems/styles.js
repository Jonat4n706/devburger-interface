import styled from "styled-components";

export const ProductImage = styled.img`
    height: 82px;
    width: 100px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
        justify-content: center;
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 4px;
        color: #fff;
        background-color: #9758a6;
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color: #7e4790;
        }
    }
    `;

export const ProductTotalPrice = styled.div`
    font-weight: bold;
    justify-content: center;
    display: flex;
    `;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const TrashImagem = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;