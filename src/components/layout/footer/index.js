import {isEmpty, isArray} from 'lodash';
import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link'
import Image from "next/image"
import footerLogo from "../../../../public/images/footer/footer-logo.png"
const Footer = ({ footer, footerMenus }) => {
    console.log('footer', footerMenus);

    return (
        <footer className="p-6 text-white bg-brand-dark" id="download">
            <div className="footer_container">
                <div className="grid w-full grid-cols-1 text-center border-b border-white md:gap-32 md:grid-cols-7 md:text-left">


                    <div className="md:col-span-3 logo">
                        <div className="side_one" dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne)}} />
                    </div>

                    <div className="md:col-span-2 contact">
                        <div className="side_two" dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo)}} />
                    </div>
                    <div className="md:col-span-2">
                        <div className="h_underline">
                            <h2 className="text-3xl font-normal text-brand-light">
                                Download
                            </h2>
                        </div>
                        { ! isEmpty( footerMenus ) && isArray( footerMenus ) ? (
                            <ul>
                                {footerMenus.map( footerMenu => (
                                    <li key={footerMenu?.node?.id} className="pb-4 hover:text-white text-brand-oranges">
                                        
                                            <a href={footerMenu?.node?.footer?.file?.mediaItemUrl} download>
                                                {footerMenu?.node?.label}
                                            </a>
                                        
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>
                <div className="grid w-full grid-cols-1 py-4 md:grid-cols-2">

                    <div class="md:text-left text-center">
                        {footer.copyrightText ? footer.copyrightText : ''}
                    </div>

                    <div className="text-center md:text-right">
                        Built with ♥ by Capace Media
                    </div>
                </div>

            </div>
        </footer>
    )
}
 
export default Footer;