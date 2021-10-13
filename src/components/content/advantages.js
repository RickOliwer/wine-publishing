const Advantages = ({ AdvantagesContent }) => {
    return ( 
        <div className="bg-brand-bggray p-7 md:p-10 lg:p-20 advantages">
            <div className="h_underline">
                <h2 className="text-3xl text-center">{AdvantagesContent?.advantagesTitel}</h2>
                <p className="text-sm italic text-center py-7 lg:px-56">{AdvantagesContent?.advantagesUtdrag}</p>
            </div>
            <ul className="grid gap-5 lg:grid-cols-2">
                {AdvantagesContent?.advantagesLista.map( item => (
                    <li key={item?.listpunkt} className="px-10 text-center lg:text-left lg:px-20">{item?.listpunkt}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default Advantages;