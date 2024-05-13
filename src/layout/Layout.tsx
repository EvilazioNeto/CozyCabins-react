import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout({ children }: { children: ReactNode }){
    return(
        <>
            <Header/>
            {children}
            <Footer />
        </>
    )
}

export default Layout;
