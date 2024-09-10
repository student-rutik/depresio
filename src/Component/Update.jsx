import React ,{useState} from 'react'
import './Update.css';
// import axios from 'axios';


export default function Update({value,handleChange,handleSubmit}) {

    // const [value, setValue] = useState({
    //     name:"",
    //     fathername:"",
    //     email:"",
    //     phone:""
    //  });

//  const handleChange=(e)=>{
//     setValue({
//         ...value,
//         [e.target.name]:e.target.value
//     })
//    }

//   const handleSubmit=async(e)=>{
//         e.preventDefault()
//         try {
//             const updateUser=await axios.post("http://localhost:5000/api/update")
//         } 
//         catch (error) {
//             console.log(error);
            
//         }
        
//   }

  return (
    <div>
<div className="container mt-3">
        <div id="editEmployeeModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title">Update User</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" value={value.name} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Father</label>
                                <input type="text" className="form-control" name="fathername" value={value.fathername} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="email" value={value.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name="phone" value={value.phone} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                            <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
