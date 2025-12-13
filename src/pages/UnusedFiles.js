import { useState } from "react";

const [title, setTitle ] = useState("");
const [fullName, setFullName ] = useState("");
const [opsNumber, setOpsNumber ] = useState(null);
const [formDataOnchange, setFormDataOnchange] = useState()
const [fetchError, setFetchError ] = useState("err");
let { id } = useParams();

const [words, setWords ] = useState("")


  const handleName = (event) => {
    setFullName(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleOpsNumber = (event) => {
    setOpsNumber(event.target.value);
  };
  
  
  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive  expected data')
        const formInfos = await response.json()
        setFormData(formInfos)
        const dataPost = formInfos.find(data => (data.id).toString() == id );
        setFullName(dataPost.fullName);
        setTitle(dataPost.title);
        setOpsNumber(dataPost.opsNumber);
  
      } catch(err){
        setFetchError(err.message)
      }
    }
    (async () => await fetchItems())()
    }, [])
  
  
    const handleEdit = async (id) => {
        const formValues = {
          id,
          title:  title,
          fullName:fullName,
          opsNumber: opsNumber,
           }; 
          const formDat = [...formData, formValues]
          setFormData(formDat)
          localStorage.setItem('Personnel', JSON.stringify(formDat));
      
          // crud operations
           try{
            const response = await api.put(`/formData/${id}`, formValues)
            setFormData(formData.map(item => item.id === id ? {...response.data}: item))
            setFullName("");
            setOpsNumber("")
            setTitle("")
            history('/addpersonnel') 
           }catch{
            console.log(`Err: ${err.message}`)
           }
          
      }

      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formValues = {
              title:  title,
              fullName:   fullName,
              opsNumber: opsNumber,
               }; 
    const formDat = [...formData, formValues]
    setFormData(formDat)
    
    const postOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);``
    clearState(); 
    history('/addpersonnel')  
    }
    
    
    const clearState = () => {
      setFullName("");
      setOpsNumber("")
    };
    
  //   useEffect(() =>{
  //     // const url = `${config.baseURL}/formData`+ id
  //     const url = "http://localhost:3001/formData" + id
      
  //     fetch(url).then((res) =>{
  //       return  res.json()
  //     }).then((data) => {
  //       console.log(data)
  //       setFormData(data.formData)
  //       setTempFormData(data.formData)
  //     }).catch()  
  
  //     console.log(formData)
  //     console.log(tempFormData)
  //     console.log(id)
  
  // })
  
  // function updatedFormdata () {
  //   pass
  // }
    

  useEffect(() =>{
      // const url = `${config.baseURL}/formData`+ id
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/crack"
      fetch(url).then((res) =>{
        return  res.json()
      }).then((data) => {
        console.log(data)
        console.log(data.words.meanings)
        setWords(data.formData)
      }).catch()  
  })
  
  


  
// const  deletFormData = async (id) => {
//   axios.get("http://localhost:3001/formData"+id)
//   console.log(id, "was deleted successfully")
//   let totalPersonnel = [...formData]
//   console.log(totalPersonnel)
//   totalPersonnel.splice(id, 1)
//   setFormData(totalPersonnel)
//   localStorage.setItem('Personnel', JSON.stringify(totalPersonnel));
  
//   const formDataList = formData.filter((data) => data.id !== id );
//   setFormData(formDataList)
//   const deleteOptions = { method: "DELETE"};
//   const reqUrl = `${API_URL}/${id}`
//   const result =  await apiRequest(reqUrl, deleteOptions)
//   if(result) setFetchError(result)
// }
  // 
  

  // / const [posts, setPosts] = useState({})
  
  // const API_URL = "http://localhost:3001/formData"
  // useEffect(() => {
  //   fetch(API_URL)
  //   .then(response => response.data)
  //   .then(data => setPosts(data))
  // }, [])
  
  // console.log(posts)



//Arrange these values according to highest value selected in the options react js app 
const selectOptions = [
  {
      label: 'Choose Title',
      // value: 'Choose Title'
  },
  {
      label: 'Chief Fire Officer',
      value: 'Chief Fire Officer'
  },
  {
      label: 'Deputy Chief Fire Officer',
      value: 'Deputy Chief Fire Officer'
  },
  {
      label: 'Assistant Chief Fire Officer',
      value: 'Assistant Chief Fire Officer'
  },
  {
      label: 'Senior Airport Fire Officer',
      value: 'Senior Airport Fire Officer'
  },
  {
      label: 'Station Officer',
      value: 'Station Officer'
  },
  {
      label: 'Sub Officer',
      value: 'Sub Officer'
  },
  {
      label: 'Leading Firefighter',
      value: 'Leading Firefighter'
  },
  {
      label: 'Fire-Fighter',
      value: 'Fire-Fighter'
  }
]

// const postData = formData.find(postData =>(postData.id) === id)
// console.log(id)

// useEffect(() =>{
//   if(postData ){
//       setEditTitle(postData.title)
//       setEditFullName(postData.fullName)
//       setEditOpsNumber(postData.opsNumber)
//     }
// },[postData , setEditTitle, setEditFullName, setEditOpsNumber])