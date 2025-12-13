import React, { useState, useEffect } from "react";
import App from "../App";
import '../index.css'
import "../App.css"
import FormData from "./FormData";
import api from "../api/formData";
import { useNavigate } from "react-router-dom";
import EditForm from "./EditForm";

const Personnel = () => {
  const styleError = {
    color: "red",
    textAlign: "center",
    background: "white",
    padding: "20px",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editFullName, setEditFullName] = useState("");
  const [editOpsNumber, setEditOpsNumber] = useState("");
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/post");
        setFormData(response.data);
        
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);

    // fetchItems();
  }, [formData]);


    

  // both of the delete functions are working perfect
  const handleDelet = async (id) => {
    console.log(id)
    try {
      // await api.delete(`/formData/${id}`);
      await api.delete(`/post/${id}`);
      let totalPersonnel = formData.filter((data) => data.id !== id);
      setFormData(totalPersonnel);
      console.log(formData)
      localStorage.setItem("Personnel", JSON.stringify(totalPersonnel));
      // navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <App>
      <div className="service h-auto  flex flex-col space-y-3 overflow-y-auto">
        <main className="main-container">
          {isLoading && (
            <p style={{ textAlign: "center", fontSize: "2rem" }}>
              Loading ARFFS Personnels...
            </p>
          )}
          {fetchError && <p style={styleError}> {`Error: ${fetchError}`} </p>}
          {!fetchError && !isLoading && (
            <FormData
              setFormData={setFormData}
              handleDelet={handleDelet}
              editFullName={editFullName}
              editTitle={editTitle}
              editOpsNumber={editOpsNumber}
              setEditFullName={setEditFullName}
              setEditOpsNumber={setEditOpsNumber}
              setEditTitle={setEditTitle}
              formData={formData}
            />
          )}
        </main>
      </div>
    </App>
  );
};

export default Personnel;
