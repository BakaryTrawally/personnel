import { useRef, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf';
import {autoTable } from 'jspdf-autotable';



const  LeaveData = ({ leaveData, handleDelet, formData }) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const printRef = useRef(null)
const capitalizeWords = text =>
text.replace(/\b\w/g, char => char.toUpperCase());

 const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Personnel On Leave", 14, 10);
    const tableColumn = ["#", "Personnel on leave", "Proceeding Date", "Resuming Date", "W/Days"];


const sortedLeaveData = [...leaveData].sort((a, b) => {
  return new Date(a.resumeDate) - new Date(b.resumeDate);
});

const tableRows = sortedLeaveData.map((item, index) => [
  index + 1,
  capitalizeWords(item.leaveName),
  item.leaveData,
  item.proceedDate,
  item.resumeDate,
  item.workingDays
]);

    // const tableRows = leaveData.map((item, index) => [
    //   index + 1,
    //   capitalizeWords(item.leaveName),
    //   item.leaveData,
    //   item.proceedDate,
    //   item.resumeDate,
    //   item.workingDays
    // ]);

  autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 12 },
    
    //  headStyles: { fontSize: 16, fontStyle: "bold" },
     styles: {
    fillColor: [0, 0, 0],        // black background
    textColor: [255, 255, 255], // white text
    fontSize: 16
    
  },

  bodyStyles: {
    fillColor: [0, 0, 0],
    textColor: [255, 255, 255],
    lineWidth: .3
  },

  headStyles: {
    fillColor: [0, 0, 0],
    textColor: [255, 255, 255],
    fontStyle: 'bold'
  },

  alternateRowStyles: {
    fillColor: [0, 0, 0] // override default alternate coloring
  }
    });
    doc.save("personnel_leave.pdf");
  };
   // Sort by resumeDate before rendering
  const sortedFormData = [...formData].sort(
      (a, b) => new Date(a.resumeDate) - new Date(b.resumeDate)
    );


return (
  <>    
  <button onClick={handleShow} className='py-2 px-6 bg-blue-500'>
    Toggle Leave Data
  </button>
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personnel on Annual Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <main
         ref={printRef}
            >  
            { leaveData.length ? ( 
            <div className=' m-auto text-center'>
             <table className="px-8 overflow-y-auto">
                     <thead className=''>
                         <tr className ="bgDodgerblue text-white">
                         <th className ="border">#</th>
                         <th className ="border capitalize">Full Name</th>
                         <th className ="border">Proceed Date</th>
                         <th className ="border">Resume Date</th>
                         <th className ="border">working Days</th>
                         <th className ="border">Action</th>
                         </tr>
                     </thead>
                     <tbody> 
                         {sortedFormData.map((item, index) => {
                          const indexId = index + 1
                             return (
                                 <tr className='text-left bg-white text-black' key={item._id}>
                                  <td className ="border pl-4 capitalize px-3">{indexId}</td>
                                  <td className ="border pl-2 capitalize">{item.leaveName}</td>
                                  <td className ="border pl-2 capitalize px-3">{item.proceedDate}</td>
                                  <td className ="border pl-3 capitalize px-3">{item.resumeDate}</td>
                                  <td className ="border pl-3 capitalize">{item.workingDays}</td>
                                  <td className ="border py-2 px-2 flex justify-center space-x-2">
                                    <button className='
                                      py-2 px-4 bg-red-700 text-white text-uppercase text-white'
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
            <p style={{ marginTop:'2rem', textAlign: "center", background:"white", color: "black", margin:"auto"  }}>Your List is empty </p>
          )}
            </main>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary " className='btn block w-full ' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> 
       </>
  );
 
}

export default LeaveData;