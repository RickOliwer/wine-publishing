
const Table = () => {
    return (
    <div class="w-5/6 lg:w-3/4 m-auto">    
        <table className="m-auto table-fixed the_table">
            <thead>
                <tr className="text-left table_lables">
                    <th className="w-1/2 py-5 pl-4">Title</th>
                    <th className="w-1/4 py-5 pl-4">Author</th>
                    <th className="w-1/12 py-5 pl-4">Views</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-5 pl-4 " data-label="Title">Intro to CSS</td>
                    <td className="py-5 pl-4 " data-label="Author">Adam</td>
                    <td className="py-5 pl-4 " data-label="Views">858</td>
                </tr>
                <tr className="">
                    <td className="py-5 pl-4 " data-label="Title">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td className="py-5 pl-4 " data-label="Author">Adam</td>
                    <td className="py-5 pl-4 " data-label="Views">112</td>
                </tr>
                <tr>
                    <td className="py-5 pl-4 " data-label="Title">Intro to JavaScript</td>
                    <td className="py-5 pl-4 " data-label="Author">Chris</td>
                    <td className="py-5 pl-4 " data-label="Views">1,280</td>
                </tr>
                <tr>
                    <td className="py-5 pl-4 " data-label="Title">Intro to JavaScript</td>
                    <td className="py-5 pl-4 " data-label="Author">Chris</td>
                    <td className="py-5 pl-4 " data-label="Views">1,280</td>
                </tr>
            </tbody>
        </table>
    </div>
);
}
 
export default Table;