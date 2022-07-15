import React, {useState} from 'react';
import axios from "axios";
import style from '../../style/homeProducts.module.css';
import {Grid} from "@mui/material";

export default function Products() {
   const [mainData, setMainData] = useState([]);

   React.useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
         .then(res => {
            setMainData(res.data.slice(0, 6));
         })
         .catch(err => {
            console.log(err)
         })
   }, [])

   return (
      <div>
         <div className={style.title}>
            <h2>Shop The Latest</h2>
            <h4>View all</h4>
         </div>
         <Grid container spacing={4}>
            {mainData.map(el =>
               <Grid item xl={4} md={4} sm={6} xs={6}>
                  <div className={style.product}>
                     <img src={el.image} alt=""/>
                     <p className={style.productTitle}>{el.title}</p>
                     <p className={style.productPrice}>$ {el.price}</p>
                  </div>
               </Grid>
            )}
         </Grid>
      </div>
   )
}