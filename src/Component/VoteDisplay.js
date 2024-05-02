// import Button from "./Button";
import { Fragment } from "react";
const voteDisplay = ({data, deleteItem})=>
{
    console.log(data)

    const deleteHandeler = (id)=>
    {
        deleteItem(id)
    }
    return(
        <Fragment>
        <h3>Suresh</h3>

        {data.map((item) => (
         <><p key={item.key} >{item.name} <button type="button" onClick={() => deleteHandeler(item.key)}>Delete</button></p></>  
        ))}
        <p>total {data.length}</p>
        </Fragment>
    );
}
export default voteDisplay;