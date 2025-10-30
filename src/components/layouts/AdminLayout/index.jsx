import { Outlet, Navigate } from "react-router-dom"; 
import { SideNavAdmin } from "../../SideNavAdmin";
import { Container } from "./styles";
import { Footer } from "../../Footer";


export function AdminLayout() {
    const {admin: isAdmin} = JSON.parse(
        localStorage.getItem('devburger:userData'));
   
    return isAdmin ?( 
    <Container>
    <SideNavAdmin/>
    <main>
    <section>
    <Outlet/> 
    </section>
    </main>
    <Footer/>
    </Container>
    
    ) : ( <Navigate to="/login"/>
    );
}