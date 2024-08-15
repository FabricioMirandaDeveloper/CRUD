import { useState } from "react"
import { CrudForm } from "./components/CrudForm"
import { CrudTable } from "./components/CrudTable"


export const CrudApi = () => {
    const [db, setDb] = useState([])
    const [dataToEdit,setDataToEdit] = useState(null)
    const createData = (data) => {
        data.id = Date.now()
        setDb([...db,data])
    }
    const updateData = (data) => {
        const newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData)
    }
    const deleteData = (id) => {
        const isDelete = window.confirm(`¿Estas seguro de eliminar el registro ${id}?`)
        if(isDelete) {
            const newData = db.filter(el => el.id != id) 
            setDb(newData)
        }else {
            return
        }
    }
    return(
        <div>
            <h2>CRUD Api</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
            </article>
        </div>

    )
}
