import styled from "styled-components";
import Select from 'react-select';

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;
`;

export const FilterOptions = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${props => props.$isActiveStatus ? '#9758A6' : '#625E5E'};
    border-bottom: ${props => props.$isActiveStatus ? '2px solid #9758A6' : 'none'};
    font-size: 18px;
    line-height: 20px;
    padding-bottom: 5px;
    font-weight: ${props => props.$isActiveStatus ? '700' : '400'};
    transition: all 0.3s ease;
`;