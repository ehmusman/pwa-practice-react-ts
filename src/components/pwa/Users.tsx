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
    const [mode, setMode] = useState<string>('online')
    useEffect(()=>{
        const users = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(res.data)
                localStorage.setItem("users", JSON.stringify(res.data))
                setMode("online")
            }catch{
                const data:any = localStorage.getItem("users")
                setUsers(JSON.parse(data))
                setMode("offline")
            }
        }
        users()
    },[])
    return (
        <div className="container">
            {mode === "offline" ? (
<div className="alert alert-warning">You are offline, there is some problem with your connection</div>
            ) : null}
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
