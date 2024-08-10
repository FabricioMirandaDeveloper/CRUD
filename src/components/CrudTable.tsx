import { CrudTableRow } from "./CrudTableRow"

export const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="3">Sin datos</td></tr> : data.map(el => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTableRow>)}
                </tbody>
            </table>
        </div>
    )
}
