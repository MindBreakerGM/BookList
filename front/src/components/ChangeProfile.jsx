import React from 'react';
import axios from 'axios';
import { styled } from '@mui/system';
import {useNavigate} from "react-router-dom";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

function ChangeProfile () {
    const [Data,setData] = React.useState("");
    const [Error,setError] = React.useState(false);
    const navigate = useNavigate("/");
    React.useEffect(() => {
        axios({method: 'post',url:'http://127.0.0.1:3030/api/auth',withCredentials: true, headers: {}})
        .then(response => {setData(response.data)})
        .catch(err => {setError(err)})
    }, [])
    const CheckAuth = () => {
        if (Data.auth_data && !Error) {

        } else {
            navigate("/login")
        }
    }

    return (
        <div>
            {CheckAuth()}
        </div>
  
)}
export default ChangeProfile;
