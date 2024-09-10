import React,{useState} from 'react';
import Table from '../Component/Table';
import AddUser from '../Component/AddUser'
import Update from '../Component/Update'
import Delete from '../Component/Delete'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function UserTable() {
  const [value, setValue] = useState({
    name:"",
    fathername:"",
    email:"",
    phone:""
 });

 const [updateid, setUpdateid] = useState();
 const [deleteid, setDeleteid] = useState();

 const handleChange=(e)=>{
  setValue({
      ...value,
      [e.target.name]:e.target.value
  })
 }

 const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
      const updateUser=await axios.put(`http://localhost:5000/api/update/${updateid}`,value)
      const response=updateUser.data
      console.log(response);
      
  } 
  catch (error) {
      console.log(error);
      
  }
  
}


  const UpdateUser=(id)=>{
    setUpdateid(id)
  }



  const DeleteUser=(delid)=>{
    setDeleteid(delid)
  }

  const handleDelete=async()=>{
    try {
      const deleteUser=await axios.delete(`http://localhost:5000/api/delete/${deleteid}`)
      const response=deleteUser.data
      if (response.success) {
        toast.success(response.Massage)
       }
    } catch (error) {
      console.log(error);
      
    }
  }
  

  return (
    <div>
        <Table UpdateUser={UpdateUser} DeleteUser={DeleteUser}/>
        <AddUser/>
        <Update value={value}  handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Delete handleDelete={handleDelete}/>
    </div>
  )
}

