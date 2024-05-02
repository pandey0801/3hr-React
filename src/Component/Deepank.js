// import Button from "./Button";
import { Fragment } from "react";
const Deepank = ({data, dedeleteItem})=>
{
    console.log(data)

    const deleteHandeler = (id)=>
    {
        dedeleteItem(id)
    }
    return(
        <Fragment>
        <h3>Deepank</h3>

        {data.map((item) => (
         <><p key={item.key}>{item.name} <button type="button" onClick={() => deleteHandeler(item.key)}>Delete</button> </p></>  
        ))}
        <p>tota {data.length}</p>
        </Fragment>
    );
}
export default Deepank;