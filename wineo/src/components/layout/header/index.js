import  {isEmpty} from 'lodash'
import Nav from "./nav";
import Image from "next/image"
import hero from "../../../../public/images/header/hero.png"

const Header = ({header, headerMenus}) => {
    if( isEmpty(headerMenus) ){
        return null;
    }
    return ( 
        <header className="main_header h-screen bg-black">
            <Image layout="fill" objectFit="cover" src={hero} priority/>
            <div className="overlay">
                <Nav header={header} headerMenus={headerMenus} />
                {/* Site title & taglines */}
                <div className="flex items-center text-center h-full w-full justify-center">
                    <div className="flex flex-col lg:items-center text-center justify-start p-10">
                        <h1 className="bg_dark_text font-semibold lg:text-8xl text-3xl pb-4">{header?.siteTitle}</h1>
                        <p className="bg_dark_text font-semibold lg:text-2xl">{header?.siteTagLine}</p>
                    </div>

                {/* //Site title & taglines */}
                </div>
            </div>
        </header>
    );
}
 
export default Header;