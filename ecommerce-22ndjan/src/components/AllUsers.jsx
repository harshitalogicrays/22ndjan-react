import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_USER_ID, REMOVE_USER_INDEX, selectUsers } from '../redux/userSlice'

const AllUsers = () => {
    // const users=useSelector(state=>state.user.users) //users=[{},{},{}]
    const users=useSelector(selectUsers)
    const dispatch=useDispatch()
  return (
    <>
        <h1>All Users</h1>
        <div className="table-responsive"  >
            <table className="table table-primary" >
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th>ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length==0 && <tr><td colSpan={7}>No user found</td></tr>}
                    {users.map((user,i)=>
                    <tr key={user.id}>
                        <td scope="row">{i+1}</td>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td><button  type="button" className="btn btn-danger me-2"  
                        onClick={()=>dispatch(REMOVE_USER_ID(user.id))}>
                            Remove using id </button>
                        <button  type="button" className="btn btn-danger me-2" 
                        onClick={()=>dispatch(REMOVE_USER_INDEX(i))}>
                            Remove using index
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
