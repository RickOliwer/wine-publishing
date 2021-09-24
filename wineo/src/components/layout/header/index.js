import  {isEmpty} from 'lodash'
import Nav from "./nav";

const Header = ({header, headerMenus}) => {
    if( isEmpty(headerMenus) ){
        return null;
    }
    return ( 
        <header className="main_header h-screen bg-black">
            <div className="overlay">
                <Nav header={header} headerMenus={headerMenus} />
                {/* Site title & taglines */}
                <div className="flex flex-col items-center text-white justify-start">
                    <h1 className="bg_dark_text font-semibold text-8xl p-10">{header?.siteTitle}</h1>
                    <p className="bg_dark_text font-semibold text-2xl">{header?.siteTagLine}</p>
                </div>
                {/* //Site title & taglines */}
            </div>
        </header>
    );
}
 
export default Header;