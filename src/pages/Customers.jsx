import App from "../App"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import NotFound from './NotFound'
import "../index.css"
import { baseUrl } from "../Shared";

const   Customers = () => {
const { id } = useParams();
const [ customer, setCustomer ] = useState();
const [notFound, setNotFound ] = useState();
const navigate = useNavigate()

  return (
    <App>
      <div className="contacts-container p-5 text-black text-center bg-white">
        <>   
        { notFound ? <NotFound/> : null }
       {customer ?
       <>  
       <p>{customer.id}</p> 
       <p>{customer.name}</p> 
       <p>{customer.industry}</p> 
       </>
       : null }
       </> 
       < Link to = "/contact">Go Back</Link>
       </div>
    </App>
  )
}

export default Customers;
