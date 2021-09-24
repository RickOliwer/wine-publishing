import  {isEmpty} from 'lodash'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import { useState } from 'react'
const Nav = ({header, headerMenus}) => {

    if( isEmpty(headerMenus) ){
        return null;
    }
    const [ isMenuVisible, setMenuVisibility ] = useState(false)

    console.log('headermenus', headerMenus);
    return ( 
        <nav className="flex lg:items-start justify-between p-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                {/* Site Logo */}
                <img src={header?.siteLogoUrl} alt="" className="mr-4 w-40"/>
                {/* Site Logo */}
            </div>
            <div className="block lg:hidden">
                <button 
                onClick={() => setMenuVisibility(! isMenuVisible)}
                className="flex items-center px-3 py-2 border rounded  text-white border-white hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`${ isMenuVisible ? 'max-h-full' : 'h-0'} overflow-hidden lg:h-auto w-full block flex-grow mt-10 lg:flex lg:items-center lg:w-auto`}>
                    {headerMenus?.length ? (
                            <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
                                {headerMenus?.map( menu => (
                                    <a key={menu?.node?.id} href={menu?.node?.url} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                        {menu?.node?.label}
                                    </a>
                                ))}
                            </div>
                    ) : null}
            </div>
        </nav>
                     
    );
}
 
export default Nav;