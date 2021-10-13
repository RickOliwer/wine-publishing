import  {isEmpty} from 'lodash'
import Nav from "./nav";
import Image from "next/image"
import hero from "../../../../public/images/header/hero.png"

const Header = ({header, headerMenus}) => {
    if( isEmpty(headerMenus) ){
        return null;
    }
    return ( 
        <header id="front" className="h-screen bg-black main_header">
            <Image  layout="fill" objectFit="cover" src={hero} priority/>
            <div className="overlay">
                <Nav header={header} headerMenus={headerMenus} />
                {/* Site title & taglines */}
                <div className="flex items-center justify-center w-full h-full text-center">
                    <div className="flex flex-col justify-start p-10 text-center lg:items-center">
                        <h1 className="pb-4 text-3xl font-semibold bg_dark_text lg:text-8xl">{header?.siteTitle}</h1>
                        <p className="font-semibold bg_dark_text lg:text-2xl">{header?.siteTagLine}</p>
                    </div>

                {/* //Site title & taglines */}
                </div>
            </div>
        </header>
    );
}
 
export default Header;