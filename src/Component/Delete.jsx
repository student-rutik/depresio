import React from 'react'
import "./Delete.css";

export default function Delete({handleDelete}) {
  return (
    <div>
         <div class="container mt-3">
        <div id="deleteEmployeeModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">
                            <h4 class="modal-title">Delete Employee</h4>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete these Records?</p>
                            <p class="text-warning"><small>This action cannot be undone.</small></p>
                        </div>
                        <div class="modal-footer">
                            <input type="button" class="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                            <input type="button" class="btn btn-danger" value="Delete" data-bs-dismiss="modal" onClick={handleDelete}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
