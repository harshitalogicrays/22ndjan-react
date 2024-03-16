import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllUsers = () => {
    let [users,setUsers]=useState([])
    let getData=async()=>{
        try{
            let res=await axios.get("https://65f5768841d90c1c5e098cc5.mockapi.io/users")
            console.log(res.data)
            setUsers(res.data)
        }
        catch(err){alert(err)}
      
    }
  
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
        <h1>All Users</h1>
        <div className="table-responsive"  >
            <table className="table table-primary" >
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length==0 && <tr><td colSpan={5}>No user found</td></tr>}
                    {users.map((user,i)=>
                    <tr key={user.id}>
                        <td scope="row">{i+1}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td><button
                            type="button"
                            className="btn btn-danger"
                        >
                            Remove
                        </button>
                        </td>
                        </tr>
                   
                    )}
                </tbody>
            </table>
        </div>
        
    </>
  )
}

export default AllUsers
