import Header from "./Header";
import Footer from "./Footer";
export default function Layout({children}){
    return (
        <div>
            <Header/>
            <main style={{padding:'20px'}}>{children}</main>
            <Footer/>
        </div>
    );
}