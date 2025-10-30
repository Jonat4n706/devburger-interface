import { Route, Routes } from "react-router-dom";
import { Cart } from "../containers/Cart";

import {Home} from "../containers/Home";
import { Login } from "../containers/login";
import { Register } from "../containers/register";
import Menu from "../containers/menu";
import { Checkout } from "../containers/Checkout";
import { CompletePayment } from "../containers/CompletePayment";
import { UserLayout } from "../components/layouts/UserLayout";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { Orders } from "../containers/Admin/Orders";
import { NewProduct} from "../containers/Admin/NewProducts/NewProduct";
import { EditProducts } from "../containers/Admin/EditProducts";
import { ProductsList } from "../containers/Admin/ProductsList";
import { CheckoutDetails } from "../components/CheckoutDetails";


export function Router() {
    return (
        <Routes>
            
            <Route path="/" element={<UserLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/cardapio" element={<Menu/>}/>
            <Route path="/carrinho" element={<Cart/>}/>
            <Route path="/finalizar" element={<CheckoutDetails />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/complete-payment" element={<CompletePayment/>}/>
            </Route>
        
        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin/pedidos" element={<Orders/>}/>
        <Route path="/admin/novo-produto" element={<NewProduct/>}/>
       <Route path="/admin/editar-produto/:id" element={<EditProducts />} />
        <Route path="/admin/produtos" element={<ProductsList/>}/>

        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Register/>}/>

        </Routes>
    );
}



