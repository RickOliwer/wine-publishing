
const Table = ({ MaterialContent }) => {
    console.log('material', MaterialContent);
    return (
    <div class="w-5/6 lg:w-3/4 m-auto"> 

        <div className="h_underline">
            <h2 className="text-3xl text-center">{MaterialContent?.materialLabel}</h2>
            <p className="py-4 text-sm italic text-center lg:px-56">{MaterialContent?.materialExcerpt}</p>
        </div>
        <table className="m-auto table-fixed the_table">
            <thead>
                <tr className="text-left table_lables">
                    <th className="w-1/2 py-5 pl-4 uppercase text-brand-oranges">Product</th>
                    <th className="w-1/4 py-5 pl-4 uppercase text-brand-oranges">Size</th>
                    <th className="w-1/12 py-5 pl-4 uppercase text-brand-oranges">Format</th>
                    <th className="w-1/12 py-5 pl-4 uppercase text-brand-oranges">Weight</th>
                </tr>
            </thead>
            <tbody>

                {MaterialContent?.materialTable.map( table => (
                    <tr>
                        <td className="py-5 pl-4 " data-label="Product">{table?.product || '-'}</td>
                        <td className="py-5 pl-4 " data-label="Size">{table?.size || '-'}</td>
                        <td className="py-5 pl-4 " data-label="Format">{table?.format || '-'}</td>
                        <td className="py-5 pl-4 " data-label="Weight">{table?.weight || '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div>
            <p className="py-4 text-sm italic text-left">Last date for delivery of materials is <span className="font-bold">{MaterialContent?.materialDatum}</span></p>
            <p className="py-4 text-sm italic text-left">Send material to: {MaterialContent?.materialEmail}</p>
            <p className="py-4 text-sm italic text-left">{MaterialContent?.materialTerms}</p>
        </div>
    </div>
);
}
 
export default Table;