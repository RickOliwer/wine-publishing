import Header from "./header";
import Footer from "./footer";
import head from 'next/head';

const Layout = ({children, data}) => {
    
    return ( 
        <>
            <head>
                <link rel="shortcut icon" href={ data?.header?.favicon } />
            </head>
            <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
            {children}
            <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus}/>
        </>
     );
}
 
export default Layout;