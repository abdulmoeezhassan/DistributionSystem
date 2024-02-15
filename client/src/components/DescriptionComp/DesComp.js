import React,{useEffect,useState}  from "react";
import axios from "axios";
import './DesComp.css';


const AddNew = (props) => {
    const [postData, setPostData] = useState({
        Entry_Date: null,
        Description: null,
    });



    const handleChange = (e) => {
        console.log('Event:', e);   
        const { name, value } = e.target;
        console.log('Name:', name, 'Value:', value); 
        setPostData(postData => ({
            ...postData,
            [name]: value
        }));
    };

    const SaveData = async (e) => {
        e.preventDefault();
        try {
            if (props.id === null) {
                const post = await axios.post(props.apiendpoint, postData);
                if (post) {
                    console.log("Saved Data Successfully");
                    alert("Saved Successfully");
                }
            } else {
                const update = await axios.put(`${props.apiendpoint}/${props.id}`, postData);
                if (update) {
                    console.log("Updated Successfully");
                    alert("Update Successfully");
                }
            }
            
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        const getdata = async () => {
            try {
                const getDa = await axios.get(`${props.apiendpoint}/${props.id}`);
                if (getDa) {
                    console.log("Data fetched Successfully of id", props.id);
                    console.log(getDa);
                    const newUserData={
                        Entry_Date:getDa.data[0].entry_date,
                        Description:getDa.data[0].description,
                    };
                    setPostData(newUserData);
                } else {
                    console.log("Error in fetching data");
                }
            } catch (error) {
                console.log(error);
            }

        };

        const fetchData = async () => {
            if (props.id) {
                getdata();
            }
        };

        fetchData();
    }, [props.id,props.apiendpoint]);

    console.log("postData:", postData);

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
                        <input type="text" className="documentNooo" name="Description" value={postData.Description||''} onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="documentNo" className="fgh">Entry Date</label>
                        <input type="Date" className="documentNooo" name="Entry_Date" value={postData.Entry_Date||''} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <div className="addC addc">
                        <button className="btn111" onClick={SaveData}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddNew;