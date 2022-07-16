import React, { useEffect, useState } from 'react'
import style from '../../style/shop.module.css'
import Search from '../../assets/icons/search.svg'
import MuiInput from '../Shop/muiInput'
import LiniMui from '../Shop/LiniMui'
import Switch from '../Shop/Switch'
import axios from "axios";

import { Grid } from '@mui/material'
const Shop = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(res=> {
      setProduct(res.data.slice(0,6))
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
    
  }, [])
  

  return (
    <div className={style.Container}>
      <Grid>
      <Grid item xs={12} sm={12} md={3} xl={3} className={style.wrapper}>
        <h1>Shop The Latest</h1>
        <div className={style.input}>
          <input type="text" placeholder='Search....' />
          <img className={style.Search} src={Search} alt="" />
        

        </div>
        <div className={style.inputmiu}>
          <MuiInput/>
          <MuiInput/>
          <LiniMui/>
          </div>
          <div className={style.switch1}>
            <h4>On sale</h4>
            <Switch/>
          </div>
          <div className={style.switch2}>
            <h4>In stock</h4>
            <Switch/>

          </div>
      </Grid>
      </Grid>
      <div className={style.Product1}>
        <Grid spacing={4}>
          {
            product?.map(el =>
          <Grid item xs={6} sm={6} md={9} xl={9}>
                 <div className={style.Produclar2}>
                  <img src={el.image} alt="" />
                  <p>{el.title}</p>
                  <p>{el.price}</p>
                  </div> 
          </Grid>
              
              
              )
          }
        </Grid>
      </div>
    </div>
  )
}

export default Shop