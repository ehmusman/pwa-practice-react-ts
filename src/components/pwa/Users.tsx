import React, { useEffect, useState } from 'react'
import axios from 'axios'
const  Users: React.FC = () => {    
    interface geoI{
        lat: string,
        lng: string
    }
    interface addressI{
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: geoI
    }
    interface companyI{
        name: string,
        catchPhrase: string,
        bs: string

    }
    interface UserI{
        id: number,
        name: string,
        username: string,
        email: string,
        address: addressI,
        phone: string,
        website: string,
        company: companyI
    }
    
    const[users, setUsers] = useState<UserI[]>([])
    useEffect(()=>{
        const users = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
        }
        users()
    },[])
    return (
        <div className="container">
        <table className="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.length !== 0 ? (
                <>
                {users.map(user => (
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                </tr>
                ))}
                </>
            ) : null}
        </tbody>
    </table>
    </div>
    )
}

export default Users
