import Footer from "../../../inc/Footer";
import PublicNavbar from "../../../inc/navbar/NavbarPublic";
import Description from './Description.png'

export default function Root() {
    return (
        <>
            <body className="bg-dark">
                <PublicNavbar/>
                <img src={Description} alt='Logo' className='img-fluid' />
            </body>
            <Footer/>
        </>
    );
}