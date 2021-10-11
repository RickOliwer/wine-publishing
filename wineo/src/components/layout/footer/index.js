import {isEmpty, isArray} from 'lodash';
import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link'
const Footer = ({ footer, footerMenus }) => {

    return (
        <footer className="p-6 text-white bg-black">
            <div className="flex flex-wrap -mx-1 overflow-hidden">

                <div className="w-full px-1 my-1 overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne)}} />
                </div>

                <div className="w-full px-1 my-1 overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo)}} />
                </div>

                <div className="w-full px-1 my-1 overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    { ! isEmpty( footerMenus ) && isArray( footerMenus ) ? (
                        <ul>
                            {footerMenus.map( footerMenu => (
                                <li key={footerMenu?.node?.id}>
                                    <Link href={footerMenu?.node?.path}>
                                        <a>
                                            {footerMenu?.node?.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    

                </div>

            </div>
            <div className="flex flex-wrap mt-8 mb-8 -mx-1 overflow-hidden">

                <div className="w-full px-1 my-1 overflow-hidden xl:w-1/2">
                    {footer.copyrightText ? footer.copyrightText : ''}
                </div>

                <div className="flex justify-end w-full px-1 my-1 overflow-hidden xl:w-1/2">

                </div>

            </div>
        </footer>
    )
}
 
export default Footer;