import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
border-radius: 20px;
display: flex; 
flex-direction: column;
justify-content: space-between;
margin-bottom: 20px;

* {
color: #484848;
font-weight: 500;
}

.container-top {
display: grid;
grid-gap: 10px 30%;
grid-template-areas:
    "title title"
    "items items-price"
    "delivery-tax tax-price";

.title {
    grid-area: title;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    background-color: #484848;
    color: #fff;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    }

.items {
    grid-area: items;
    padding-left: 20px;
    }

.items-price {
    grid-area: items-price;
    padding-right: 20px;
    }

.delivery-tax {
    grid-area: delivery-tax;
    padding-left: 20px;
    }

.tax-price {
    grid-area: tax-price;
    padding-right: 20px;
    }

}

.container-bottom {
display: flex;
padding: 20px;
justify-content: space-between;
font-weight: 700;
font-size: 20px;
margin-top: 24px;

* {
    color: #484848;
    font-weight: 700;
}
}

`;