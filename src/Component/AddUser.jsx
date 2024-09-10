// import React ,{useState} from 'react';
// import './AddUser.css';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// export default function AddUser() {

// const[value,setValue]= useState({
//     name:"",
//     fathername:"",
//     email:"",
//     phone:""
// });
// const handleChange=(e)=>{
//     setValue({
//         ...value,
//         [e.target.name]:e.target.value
//     })
//    }

//    const handleSubmit=async(e)=>{
//     e.preventDefault();
//     try {
//        const adduser=await axios.post("http://localhost:5000/api/create",value)   
//        const response=adduser.data;
       
//        if (response.success) {
//         toast.success(response.Massage)
//        }
//        console.log(response);
//      } 
//     catch (error) {
//         console.log(error);
        
//     }
//     }

//   return (
//     <div>
//         <div className="container mt-3">
//         <div id="addEmployeeModal" className="modal fade">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <form onSubmit={handleSubmit}>
//                         <div className="modal-header">
//                             <h4 className="modal-title">Add Employee</h4>
//                             <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="form-group">
//                                 <label>Name</label>
//                                 <input type="text" className="form-control" name="name" value={value.name} onChange={handleChange} required />
//                             </div>
//                             <div className="form-group">
//                                 <label>Father</label>
//                                 <input type="text" className="form-control" name="fathername" value={value.fathername} onChange={handleChange} required />
//                             </div>
//                             <div className="form-group">
//                                 <label>Email</label>
//                                 <input type="email" className="form-control" name="email" value={value.email} onChange={handleChange} required />
//                             </div>
//                             <div className="form-group">
//                                 <label>Phone</label>
//                                 <input type="text" className="form-control" name="phone" value={value.phone} onChange={handleChange} required />
//                             </div>
//                         </div>
//                         <div className="modal-footer">
//                             <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
//                             <input type="submit" className="btn btn-primary" value="Add"  data-bs-dismiss="modal"/>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }



import React, { useState } from 'react';
import './AddUser.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AddUser() {
    const [value, setValue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: ""
    });
    const [errors, setErrors] = useState({}); // State to store validation errors

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send API request to create user
            // const adduser = await axios.post("http://localhost:5000/api/create", value);
            const adduser = await axios.post("https://depresion-1.onrender.com/api/create", value);

        
            // Extract response data
            const response = adduser.data;
        
            // Check if the request was successful
            if (response.success) {
                toast.success(response.message); // Show success message
            }
        } catch (error) {
            // Handle errors from the API request
            if (error.response && error.response.data) {
                // Display validation or error messages from the server
                toast.error(error.response.data.message); // Show error message
            } else {
                // Display a general error message if no response data is available
                toast.error("An unexpected error occurred. Please try again later.");
            }
        }
        
    }

    return (
        <div>
            <Toaster />
            <div className="container mt-3">
                <div id="addEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Employee</h4>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="name" value={value.name} onChange={handleChange} required />
                                        {errors.name && <small className="form-text text-danger">{errors.name}</small>}
                                    </div>
                                    <div className="form-group">
                                        <label>Father</label>
                                        <input type="text" className="form-control" name="fathername" value={value.fathername} onChange={handleChange} required />
                                        {errors.fathername && <small className="form-text text-danger">{errors.fathername}</small>}
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" value={value.email} onChange={handleChange} required />
                                        {errors.email && <small className="form-text text-danger">{errors.email}</small>}
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" name="phone" value={value.phone} onChange={handleChange} required />
                                        {errors.phone && <small className="form-text text-danger">{errors.phone}</small>}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-primary" value="Add" data-bs-dismiss="modal" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


