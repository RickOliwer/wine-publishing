import Image from 'next/image'
import Link from 'next/link';


const Intro = ({ IntroContent }) => {
    const hasImg = IntroContent?.introBild && IntroContent?.introBild?.mediaItemUrl ? true : false
    return (
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-14">
            <div className="lg:p-24 md:p-10 p-7 h_underline">
                <h1 className="text-3xl font-normal text-brand-dark">{IntroContent?.introTitel}</h1>
                <p className="text-sm text-brand-dark">{IntroContent?.introText}</p>
            </div>

                {hasImg && <div className="relative z-0 block w-full lg:h-full h-96"><Image src={IntroContent?.introBild?.mediaItemUrl} layout="fill" objectFit="cover" objectPosition="center"/></div> } 



        </div>
        
    );
}
 
export default Intro;