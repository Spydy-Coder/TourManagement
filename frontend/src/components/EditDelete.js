import React from 'react'

export default function EditDelete({data}) {
  return (
    <div className='container'>
        <div className="d-flex gap-3 justify-content-end">
        <button className="btn" style={{ minWidth: "90px" }}>
          Edit
        </button>
        <button className="btn" style={{ minWidth: "90px" }}>
          Delete
        </button>
      </div>
    </div>
  )
}
