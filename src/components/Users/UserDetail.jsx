import { useContext } from 'react'
import UserContext from '../../context/userContext/UserContext'

const UserDetail = () => {   //uso de context solo para el usuario.
    const { user, editUser } = useContext(UserContext)
    console.log(user)

    const changeName = (e) => {        // captura el evento onChange del campo de entrada y llama a editUser con el nuevo valor del nombre y la edad del usuario actual
        console.log(e.target.value)
        editUser(e.target.value, user.age)
    }
    return (
        <div>UserDetail
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <input type='text' value={user.name} onChange={changeName} />
        
        </div>
    )
}

export default UserDetail