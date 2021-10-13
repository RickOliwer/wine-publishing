import {isEmpty, isArray} from 'lodash';
import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link'
import Image from "next/image"
import footerLogo from "../../../../public/images/footer/footer-logo.png"
const Footer = ({ footer, footerMenus }) => {

    return (
        <footer className="p-6 text-white bg-brand-dark">
            <div>
                <div className="grid w-full grid-cols-1 text-center border-b border-white md:gap-32 md:grid-cols-3 md:text-left">

                    <div>
                        <div className="relative w-4/6 m-auto mt-5 h-4/6">
                            <Image layout="responsive" objectFit="cover" src={footerLogo} priority/>
                            <p className="text-sm text-center text-white my-9">Guiding the way to enjoyment of life since 2009</p>
                        </div>
                    </div>

                    <div className="wtf">
                        <div className="side_one" dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne)}} />
                    </div>

                    <div>
                        <div className="side_two" dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo)}} />
                    </div>
                </div>
                <div className="grid w-full grid-cols-2 py-4">

                    <div class="text-left">
                        {footer.copyrightText ? footer.copyrightText : ''}
                    </div>

                    <div className="text-right">
                        Built with ♥ by Capace Media
                    </div>
                </div>

            </div>
        </footer>
    )
}
 
export default Footer;