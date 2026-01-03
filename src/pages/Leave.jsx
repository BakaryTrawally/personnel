import React, { useState, useEffect } from 'react'
import apiOne from '../apiForAll/axios'
// import apiOne from '../apiOne/leaveData'
import App from '../App'
import Input from './Input'
import LeaveData from './LeaveData'
import {useNavigate } from 'react-router-dom'


const Leave = () => {
const navigate = useNavigate()
const [formData, setFormData ] = useState([]);
const [leaveName, setFullName ] = useState('');
const [proceedDate, setProceedDate ] = useState('');
const [resumeDate, setResumeDate ] = useState('');
const [workingDays, setWorkingDays ] = useState('');
const  [isLoading, setIsLoading ] = useState(true)
const [errors, setErrors ] = useState(null) 
const [fetchErrors, setFetchError ] = useState(null) 

useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await apiOne.get('/leaveApp');
        setFormData(response.data)
        // console.log(response.data)
      } catch(err){
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    
    fetchItems();
    
    }, [formData])



    const handleName = (e) =>{
        setFullName(e.target.value)
    }
    const handleProceedDate = (e) =>{
        setProceedDate(e.target.value)
    }
    const handleResumeDate = (e) =>{
        setResumeDate(e.target.value)
    }
    const handleWorkingDays = (e) =>{
        setWorkingDays(e.target.value)
    }


    
    // Crud operations
    const handleSubmit = async (e) =>{
            e.preventDefault();
        if(!leaveName){
        setErrors('Name fill cant be leave blank')
        return;
      } 
      else if(!proceedDate){
        setErrors('proceed Date fill cant be leave blank')
         return;
      } 
      else if(!resumeDate){
        setErrors('resume dat fill cant be leave blank')
         return;
      } 
      else if(!workingDays){
        setErrors('Days applied fill cant be leave blank')
         return;
      } 
      else{   
        // const id = String(formData.length ? formData[formData.length - 1].id + 1 : 1);
        const leaveData = {
            leaveName:leaveName,
            proceedDate:proceedDate,
            resumeDate: resumeDate,
            workingDays:workingDays
        }
        try{
            const response = await apiOne.post('/leaveApp/post', leaveData)
            console.log("this is form data ", response.data)
            const allPost = [...formData, response.data]
            // Sort by resumeDate
            // allPost.sort((a, b) => new Date(a.resumeDate) - new Date(b.resumeDate));
            setFormData(allPost)
            console.log(allPost)
            navigate('/leave')   
            } catch(err){
             console.log(`Error: ${err.message}`);
            }
        }
            clearState(); 
    }

const clearState = () => {
  setFullName("");
  setProceedDate("")
  setResumeDate("")
  setWorkingDays("")
};
// Separate leave and normal data
  const leaveData = formData.filter(
    (item) =>
      item.leaveName !== undefined &&
      (item.leaveName || item.proceedDate || item.resumeDate || item.workingDays)
  );
  const handleDelet = async (id) => {
  try{
    await apiOne.delete(`/post/${id}`);
    let totalPersonnel = formData.filter(data => data.id != id)
    console.log(typeof id)
    setFormData(totalPersonnel)
    localStorage.setItem('Personnel', JSON.stringify(totalPersonnel));
    return totalPersonnel;
  } catch(err){
    console.log(`Error: ${err.message}`);
  }
  }
  return (
    <>
    <App>
      <div className='personnelLeave'>   
        <form htmlForm="id"  onSubmit={handleSubmit}>
        <h1 className='mt-3'> Annual Leave</h1>
            <div>  
                <p className='errorMessage'>{errors}</p>
                <Input
                id="name"
                type="text"
                placeholder='Full Name...'
                value={leaveName}
                onChange={handleName}
                className="text-capitalize"
                />
            </div>
            <div> 
                <label htmlFor="resumeDate">Proceeding Date</label> 
                <Input 
                id="name"
                type="date"
                value={proceedDate}
                onChange={handleProceedDate}
                />
             </div>
             <div>  
                <label htmlFor="resumeDate">Resume Date</label> 
                <Input 
                id="resumeDate"
                type="date"
                value={resumeDate}
                onChange={handleResumeDate}
                />
             </div>
             <div> 
                <label htmlFor="resumeDate">W/D</label> 
                <Input 
                id="name"
                type="number"
                placeholder='Number of working days...'
                value={workingDays}
                onChange={handleWorkingDays}
                />
            </div>
            <br/>
            <div className='leaveBtn'>
             <button
             type='submit'
             >Submit Data</button> 
            
            </div>  
        </form>
        <div className='leaveBtn'>
             <LeaveData
             formData={formData}
             leaveData={leaveData}
             handleDelet={handleDelet}
             />
        </div>
        </div>
    </App>
    </>
  )
}

export default Leave
