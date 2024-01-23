import React  from "react";
import './DesComp.css';


const AddNew = (props) => {

    return (
        <div> 
            <div>
                <div>
                    <h3 className="headdd">{props.head}</h3>
                    <hr className="hrr"/>
                </div>
                <div className="addCCC">
                    <div>
                        <label for="documentNo" className="fgh">Description*</label>
                        <input type="text" className="documentNooo" name="documentNo" />
                    </div>
                </div>
                <div>
                    <div className="addC addc">
                        <button className="btn111">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddNew;