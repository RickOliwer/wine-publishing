import  {isEmpty} from 'lodash'
import 'tailwindcss/tailwind.css'
import { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import Image from "next/image"
const Nav = ({header, headerMenus}) => {

    if( isEmpty(headerMenus) ){
        return null;
    }
    const [isOpen, setIsOpen] = useState(false)
    const [ isMenuScroll, setMenuScroll ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 20){
                setMenuScroll(true)
            }else{
                setMenuScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return ( 
        <nav className="fixed z-40 w-full">
            <div className={`${ isMenuScroll ? 'bg-white text-brand-dark h-20 items-center p-4' : 'p-8 h-52 lg:items-start text-brand-light'} w-full transition duration-1000 ease-in-out flex justify-between relative inset-x-0 `}>

                <div className={`${ isMenuScroll ? '' : ''} mr-4 h-full transition duration-1000 ease-in-out`}>
                    {/* Site Logo */}
                    <Link to="front" smooth={true} duration={1000}>
                        <img src={header?.siteLogoUrl} alt="" className="h-full cursor-pointer"/>

                    </Link>
                </div>


                <div onClick={() => setIsOpen(!isOpen)} className={`px-4 cursor-pointer burger lg:hidden md:block ${isOpen ? 'burger__animation' : '' } ${ isMenuScroll ? 'dark' : 'light'}`}>
                        <div className="h-1 m-1 w-7 item1"></div>
                        <div className="h-1 m-1 w-7 item2"></div>
                        <div className="h-1 m-1 w-7 item3"></div>
                </div>

                {headerMenus?.length ? (
                <div className={`${isOpen ? 'link__container link__container_active' : 'link__container pr-8' }`}>
                    {headerMenus?.map( menu => (
                        <Link key={menu?.node?.id} to={`${menu?.node?.url.replace('http://', '')}`} className={`${isOpen ? '' : 'pl-8' } cursor-pointer hover:text-brand-oranges`} smooth={true} duration={1000}>
                            {menu?.node?.label}
                        </Link>
                    ))}
                </div>
                ) : null}
            </div>
 
        </nav>
                     
    );
}
 
export default Nav;