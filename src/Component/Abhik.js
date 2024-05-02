// import Button from "./Button";
import { Fragment } from "react";
const Abhik = ({data, abdeleteItem})=>
{
    console.log(data)

    // const deleteHandeler = (id)=>
    // {
    //     abdeleteItem(id)
    // }


    return(
        <Fragment>
        <h3>Abhik</h3>

        {data.map((item) => (
         <div 
         key={item.key}
         >
            {item.name} 
            <button 
            type="button" 
            onClick={() => abdeleteItem(item.key)}>
            Delete</button> 
            </div> 
        ))}
        <p>tota {data.length}</p>
        </Fragment>
    );
}
export default Abhik;


