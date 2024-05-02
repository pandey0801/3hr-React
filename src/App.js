import { useState } from "react";

import VoteForm from "./Component/VoteForm";
import VoteDisplay from "./Component/VoteDisplay";
import Abhik from "./Component/Abhik";
import Deepank from "./Component/Deepank";
import LenForm from "./Component/LenForm";
import Modal from "./Component/Modal";


function App() {
  const [formdata, setFormdata] = useState([]);
  const [sudata, setsudata] = useState([]);
  const [dedata, setDedata] = useState([]);
  const [abdata, setAbdata] = useState([]);


  const dataHandler = (obj) => {

    // console.log(obj);

    // setFormdata((perdata) => {
      const updatedData = [obj, ...formdata];
      const sureshData = updatedData.filter((item) => item.monitor === "Suresh");
      const deepankData = updatedData.filter((item) => item.monitor === "Deepank");
      const abhikData = updatedData.filter((item) => item.monitor === "Abhik");

      setsudata(sureshData); // Update suresh data here
      setAbdata(abhikData);
      setDedata(deepankData);

      setFormdata(updatedData);

      // return updatedData;
    // });
  };



  const deleteHandler = (id) => {
    // setFormdata((perItem) => {
      const newdata = formdata.filter(item => item.key !== id);
      const sureshData = newdata.filter((item) => item.monitor === "Suresh");
      setsudata(sureshData); // Update suresh data here
      // return newdata;
      setFormdata(newdata)

    // });
  };

  const dedeleteHandler = (id) => {
    // setFormdata((perItem) => {
      const newdata = formdata.filter(item => item.key !== id);
      const abData = newdata.filter((item) => item.monitor === "Deepank");
      setDedata(abData); // Update suresh data here
      // return newdata;
      setFormdata(newdata);

    // });
  };

  const abdeleteHandler = (id) => {

    console.log(id)

    // setFormdata((perItem) => {
      // const newdata = formdata.filter(item => item.key !== id);
      const newdata = formdata.filter(item => item.key !== id);
      const deData = newdata.filter((item) => item.monitor === "Abhik");
      // const abData = newdata.filter((item) => item.monitor === "Deepank");
      setDedata(deData); // Update suresh data here
      // return newdata;
      setFormdata(newdata);

    // });
  };


  // console.log(formdata);

  return (
    <div>
      {/* <VoteForm onsave={dataHandler} /> */}
      <h1>Class Monitor Vote</h1>
      <Modal onsave={dataHandler}/>

      <LenForm data={formdata}/>
      <VoteDisplay data={sudata} deleteItem={deleteHandler} />
      <Deepank data={dedata} dedeleteItem={dedeleteHandler} />
      <Abhik data={abdata} abdeleteItem={abdeleteHandler} />



    </div>

  );
}
export default App;