import Image from 'next/image'
const Contact = ({ ContactContent }) => {
    const hasImg = ContactContent?.contactBild && ContactContent?.contactBild?.mediaItemUrl ? true : false
    console.log('ContactContent', ContactContent);
    return (
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-14">

            {hasImg && <div className="relative z-0 block w-full lg:h-full h-96"><Image src={ContactContent?.contactBild?.mediaItemUrl} layout="fill" objectFit="cover" objectPosition="center"/></div> } 

            <div className="lg:p-24 md:p-10 p-7 h_underline">
                <h2 className="text-3xl font-normal text-center text-brand-dark">{ContactContent?.contactTitel}</h2>
                <div className="pb-7">
                    <p className="text-base text-center text-brand-dark">{ContactContent?.contactAdress[0]?.foretag}</p>
                    <p className="text-base text-center text-brand-dark">C/O {ContactContent?.contactAdress[0]?.co}</p>
                    <p className="text-base text-center text-brand-dark">{ContactContent?.contactAdress[0]?.adress}</p>
                    <p className="text-base text-center text-brand-dark">{ContactContent?.contactAdress[0]?.postnummer} {ContactContent?.contactAdress[0]?.stad}</p>
                    <p className="text-base text-center text-brand-dark">{ContactContent?.contactAdress[0]?.land}</p>

                </div>

                <div className="pb-7">
                    {ContactContent?.contactSamples.map( sample => (
                        <p className="text-base text-center text-brand-dark">{sample?.titel} {sample?.info}</p>
                    ))}
                </div>


                <div>
                    {ContactContent?.contactInfo.map( info => (
                        <p className="text-base text-center text-brand-dark">{info?.info}</p>
                    ))}
                </div>

            </div>




        </div>
        
    );
}
 
export default Contact;