import React from 'react';
import data from '../data';
import {useParams} from "react-router-dom"

function ProductScreen(props) {
 const {id} = useParams();
 console.log(id)
 return (
 <div>
    {id}
 </div>
 
 
 
    )
}

export default ProductScreen;




