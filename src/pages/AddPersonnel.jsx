import React, { useState, useEffect } from 'react'
import App from '../App'
import "../App.css"
import "../index.css"
import Form from './Form'
// import api from '../api/formData'
import api from '../apiForAll/axios'
import { useNavigate, useParams } from 'react-router-dom'


const AddPersonnel = () => {
const id = useParams()
const navigate = useNavigate();
  const [formData, setFormData ] = useState([]);
  const [fullName, setFullName ] = useState('');
  const [title, setTitle ] = useState('');
  const [opsNumber, setOpsNumber ] = useState('');
  const  [isLoading, setIsLoading ] = useState(true)
  const [errors, setErrors ] = useState(null) 
  const [fetchError, setFetchError ] = useState(null) 
 
  useEffect(() => {
    const fetchItems = async () => {
      try{
        // const response = await api.get('/formData');
        const response = await api.get('/personnelApp');
        setFormData(response.data)
        // console.log(response.data)
      } catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)

    }, [])

 const handleName = (event) =>{
    setFullName(event.target.value);
 };

const handleTitle = (event) => {
    setTitle(event.target.value);
   
 };
const handleOpsNumber = (event) =>{
    setOpsNumber(event.target.value);
 };

// Handle Submit form
const handleSubmit = async (e) => {
      e.preventDefault();
      if(!title){
        setErrors('Title fill cant be leave blank')
        return;
      } 
      else if(!fullName){
        setErrors('Name fill cant be leave blank')
        return;
      } 
      else if(!opsNumber){
        setErrors('OPS fill cant be leave blank')
        return;
      } 
      else if (formData.some(item => item.opsNumber === opsNumber)){
        setErrors('Duplicate entry, OPS number already exists.')
        return;
      }
      // const isDublicate = formData.some(item => item.opsNumber === opsNumber)
      // if(isDublicate){
      //   setErrors('Duplicate entry, OPS number already exists.')
      //   return;
      // }
    
      else {
          // Submit form
          // const id = String(formData.length ? formData[formData.length - 1].id + 1 : 1);

          const formValues = {
            id,
            title:title,
            fullName:fullName,
            opsNumber:opsNumber,
             }; 
            // Crud operations
             try{
              const response = await api.post('/personnelApp', formValues)
              // console.log("this is form data ", response)
              const allPost = [...formData, response.data]
              setFormData(allPost)
              navigate('/personnel')
          
             } catch(err){
              console.log(`Error: ${err.message}`);
             }
              clearState(); 
              // navigate('/personnel')  
        }
      }
 const clearState = () => {
  setFullName("");
  setOpsNumber("")
  setTitle("")
};

return (
<App >
    <div className='personnel-container'>
      <h1>add Personnel</h1>
      <h2 className='text-red-500 text-sm text-center'>{errors}</h2>
      <Form
        handleSubmit={handleSubmit} 
        // handleChange = {handleChange}
        handleTitle={handleTitle} 
        handleName={handleName} 
        handleOpsNumber={handleOpsNumber}
        fullName={fullName}
        opsNumber={opsNumber}
        title={title} 
        setTitle ={setTitle}
        setFormData={setFormData}
        formData={formData}
        // normalData={normalData}
        setFullName = {setFullName}
        setOpsNumber={setOpsNumber}
      /> 
    </div>
  </App>
  )
}

export default AddPersonnel
