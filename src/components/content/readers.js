import Image from 'next/image'
import Link from 'next/link';


const Readers = ({ ReadersContent }) => {
    const hasImg = ReadersContent?.readersBild && ReadersContent?.readersBild?.mediaItemUrl ? true : false
    return (
        <div className="bg-brand-bggray p-7 md:p-10 lg:p-20">

            <div className="h_underline">
                <h2 className="text-3xl text-center">{ReadersContent?.readersTitel}</h2>
            </div>
            <div>
                <p className="p-6 text-sm text-center lg:px-56">
                    {ReadersContent?.readersText}
                </p>
            </div>
            <div>
                
                <p className="pt-2 text-sm text-center">The Sites are:</p>
                <p className="pb-16 text-sm text-center">
                    {ReadersContent?.hemsidor.map( (site, index) => (
                        <a key={site?.url} className="hover:text-brand-oranges"
                        href={site?.url} 
                        key={site?.url}
                        >{site?.titel}{index === 0 ? ', ' : ' '}</a>
                    ))}

                    and local sites below <a className="hover:text-brand-oranges" 
                    href={ReadersContent?.localSitesBelow[0]?.url} 
                    key={ReadersContent?.localSitesBelow[0]?.url} 
                    >
                        {ReadersContent?.localSitesBelow[0]?.titel}
                    </a>
                </p>
            </div>

            {
            hasImg && <div className="relative block w-full h-full"><Image src={ReadersContent?.readersBild?.mediaItemUrl} layout="responsive" width={800} height={150}/></div> }
            
        </div>
        
    );
}
 
export default Readers;