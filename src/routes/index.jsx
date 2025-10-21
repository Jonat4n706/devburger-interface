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
import { Products } from "../containers/Admin/Products";
import { EditProducts } from "../containers/Admin/EditProducts";
import { NewProducts } from "../containers/Admin/NewProducts";


export function Router() {
    return (
        <Routes>
            
            <Route path="/" element={<UserLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/cardapio" element={<Menu/>}/>
            <Route path="/carrinho" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/complete" element={<CompletePayment/>}/>
            </Route>
        
        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin/pedidos" element={<Orders/>}/>
        <Route path="/admin/novo-produto" element={<Products/>}/>
        <Route path="/admin/editar-produto" element={<EditProducts/>}/>
        <Route path="/admin/produtos" element={<NewProducts/>}/>

        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Register/>}/>

        </Routes>
    );
}



