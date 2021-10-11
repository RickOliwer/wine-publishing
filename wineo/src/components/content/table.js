
const Table = () => {
    return (
    <div class="w-full">    
        <table className="w-full table-auto">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Views</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Intro to CSS</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr className="">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                </tr>
                <tr>
                    <td>Intro to JavaScript</td>
                    <td>Chris</td>
                    <td>1,280</td>
                </tr>
            </tbody>
        </table>
    </div>
);
}
 
export default Table;