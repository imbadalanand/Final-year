import React, { useEffect, useState } from 'react'
import './accountsetting.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { all } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 const AccountSettings = () => {
        

        const userInfo = JSON.parse(localStorage.getItem("user"));
        const userInfo1 = JSON.parse(localStorage.getItem("Aloggedin"));
        const usenavigate = useNavigate();
 
  if (userInfo1){
    toast.warn("You are not authorised");
    usenavigate('/');
  }
  
  
        const [allData, setAllData] = useState({})

        useEffect(() => {
            fetch("http://localhost:5000/users/" + userInfo.id).then((res) => {
                return res.json();
            }).then((resp) => {
                setAllData(resp);
                idchange(resp.id);
                namechange(resp.name);
                emailchange(resp.email);
                phonechange(resp.phone);
                addresschange(resp.address);
                genderchange(resp.gender);
            }).catch((err) => {
                console.log(err.message);
            })
        }, []);
    
    
        const [id, idchange] = useState("");
        const [name, namechange] = useState("");
        const [email, emailchange] = useState("");
        const [phone, phonechange] = useState("");
        const [address, addresschange] = useState("");
        const [country, countrychange] = useState("");
        const [gender, genderchange] = useState("");
        const [active, activechange] = useState(true);
        const [validation, valchange] = useState(false);
    
    
        const navigate = useNavigate();
    
        const handlesubmit = (e) => {
            e.preventDefault();
            const userdata = { ...allData, name, email, phone, address};
    
    
            fetch("http://localhost:5000/users/" + userInfo.id, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userdata)
            }).then((res) => {
                alert('Saved successfully.')
                navigate('/UserProfile/accountsettings');
            }).catch((err) => {
                console.log(err.message)
            })
    
        }
    
    
        return (
            <>
            <div className='accountsettings'>
                <h5 className='mainhead1'>Account Setting</h5>

                        <div div className='form'>
    
                        <form className="container" onSubmit={handlesubmit}>
    
                                        
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input value={id} disabled="disabled" className="form-control"></input>
                                            </div>
                                       
    
                                    
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input  required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                                {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                            </div>
                                      
    
                                        
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            </div>
                                       
    
                                      
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                            </div>
                                       
    
                                        
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input value={address} onChange={e => addresschange(e.target.value)} className="form-control"></input>
                                            </div>
                                       

                                            <div className="form-group">
                                                <button className="mainbutton1" type="submit">Save Changes</button>
                                                
                                            </div>
                                        
    
                                
    
                        </form>
                </div>
    
                   
            </div>
            <ToastContainer/>
            </>
        )
    }
    
export default AccountSettings;
