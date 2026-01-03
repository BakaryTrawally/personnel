import React, { useState, useEffect } from 'react'
import App from '../App'
import api from '../apiForAll/axios'
// import api from '../api/formData'
import { useParams, useNavigate } from 'react-router-dom'


const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData ] = useState([]);
  const [ fetchError, setFetchError ] = useState(null);
  const [isLoading, setIsLoading ] = useState(true) 
  const [editFullName, setEditFullName ] = useState('')
  const [editOpsNumber, setEditOpsNumber ] = useState('')
  const [editTitle, setEditTitle ] = useState('')
  const [errors, setErrors ] = useState(null) 
  const styleError = { 
      color: "black", 
    }
useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await api.get('/personnelApp/' + id);
        console.log(response.data)
        setFormData(response.data)
        setEditTitle(response.data.title)
        setEditFullName(response.data.fullName)
        setEditOpsNumber(response.data.opsNumber)
      } catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchItems()
    }, [])


const handleUpdate = async (e) => {
      e.preventDefault()
      const formValues = {title: editTitle, fullName:editFullName, opsNumber: editOpsNumber};
      try{
        // const response = await api.put(`/formData/${id}`, formValues)
        const response = await api.put('/personnelApp/' + id, formValues)
        // setFormData(formData.map(post => post.id == id ? { ...response.data} : post )) 
      console.log(response.data)
        navigate('/personnel')
      }catch(err){
        console.log(`Error: ${err.message}`);
      }
      clearState();
  }
const clearState = () => {
  setEditTitle('');
  setEditFullName('');
  setEditOpsNumber('');
};

  return (
    <App style={styleError}>
      <form style={styleError} id='editModal' action="" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="titl"  className="form-label">Title</label>
            <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
        />
          </div>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label">Full Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="fullname" 
            value={editFullName}
            onChange={(e) => setEditFullName(e.target.value)}
        />
          </div>
          <div className="mb-3">
            <label htmlFor="opsnumber" className="form-label">OPs Number</label>
            <input 
            type="number" 
            className="form-control" 
            id="opsnumber" 
            value={editOpsNumber}
            onChange={(e) => setEditOpsNumber(e.target.value)}
        />
        <button 
          style={{width: "100%"}}
          type='submit' 
          // onClick={() => handleUpdate(id)}
          className="btn btn-primary me-md-2" 
          >
            Update
          </button>
        </div>
        </form>
    </App>
  )
}

export default EditForm
