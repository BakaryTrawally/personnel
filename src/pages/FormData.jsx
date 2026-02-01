import react, { useRef, useEffect } from "react"
import  { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import jsPDF from 'jspdf';
import {autoTable } from 'jspdf-autotable';
import html2canvas from "html2canvas";



const FormData = ({
  formData, handleDelet
}) => {
  const rankMap = {
    'Chief Fire Officer': 9,
    'Deputy Chief Fire Officer': 8,
    'Assistant Chief Fire Officer': 7,
    'Senior Airport Fire Officer': 6,
    'Station Officer': 5,
    'Sub Officer': 4,
    'Leading Firefighter': 3,
    'Fire-Fighter': 2,
    'Choose Title': 1
  };
// this is to arrange in descending order
  const sortedPersonnel = [...formData].sort((a, b) => {
    const rankA = rankMap[a.title] || 0;
    const rankB = rankMap[b.title] || 0;
    return rankB - rankA;
  });

  
  // filtering data from the json-server
  const normalData = sortedPersonnel.filter(
    (item) => item.fullName && item.title && item.opsNumber
  );

 const printRef = useRef(null)

// console.log(printRef)
 const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Personnel Table", 20, 16);
    const tableColumn = ["#", "Title", "Full Name", "OPS Number"];
    const tableRows = normalData.map((item, index) => [
      index + 1,
      item.title,
      item.fullName,
      item.opsNumber
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20
    });

    doc.save("personnel_data.pdf");
  };

  return (
    <main 
    ref={printRef}
    >  
    { normalData.length ? ( 
    <div className='m-auto text-center'>
     <table className=" w-[100%]  px-8  overflow-y-auto">
             <thead className=''>
                 <tr className ="trHead">
                 <th className ="border">#</th>
                 <th className ="border">Title</th>
                 <th className ="border">Full Name</th>
                 <th className ="border">OPS Numbers</th>
                 <th className ="border">Actions</th>
                 </tr>
             </thead>
             <tbody className=""> 
                 {normalData.map((item, index) => {
                  const indexId = index + 1
                     return (
                         <tr className='text-left bg-white text-black' key={item.id}>
                          <td className ="border pl-4 capitalize">{indexId}</td>
                          <td className ="border pl-2 capitalize">{item.title}</td>
                          <td className ="border pl-2 capitalize">{item.fullName}</td>
                          <td className ="border pl-3 capitalize">{item.opsNumber}</td>
                          <td className ="border py-2 px-2 flex justify-center space-x-2">
                          <Link 
                          to={`/update/${item._id}`}><button 
                          className='py-2 px-6 bgDodgerblue text-white'>Edit Data</button></Link>
                            <button className=' text-white capitalize
                               py-2 px-4 bg-red-500'
                              onClick = {() => handleDelet(item._id)}
                              >delete</button>
                          </td>
                         </tr>
                     )
                    })}
                 </tbody>          
      </table>
      <button className='
        btnDownload
        py-2 px-4 bg-gray-00 w-full'
        onClick = {exportPDF}
      ><i className="fa fa-download"></i>Download PDF</button> 
    </div>
  ) : (
    <p style={{ marginTop:'2rem', textAlign: "center", display: "grid", placeItems: "center",
    color: "black",fontSize: "3rem", margin:"auto", height: "50vh" }}>Your List is empty </p>
  )}
    </main>
  )
}

export default FormData
