import {isEmpty, isArray} from 'lodash';
import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link'
const Footer = ({ footer, footerMenus }) => {

    return (
        <footer className="p-6 text-white bg-brand-dark">
            <div className="grid w-full grid-cols-1 text-center md:gap-9 md:grid-cols-3 md:text-left">

                <div>
                    Hello world
                </div>

                <div className="wtf">
                    <div className="side_one" dangerouslySetInnerHTML={{ __html: footer?.sidebarOne}} />
                </div>

                <div>
                    <div className="side_two" dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo)}} />
                </div>
            </div>
            <div className="grid grid-cols-2">

                <div class="text-left">
                    {footer.copyrightText ? footer.copyrightText : ''}
                </div>

                <div className="text-right">
                Built with ♥ by Capace Media
                </div>
            </div>
        </footer>
    )
}
 
export default Footer;