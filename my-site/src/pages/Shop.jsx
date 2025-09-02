import Header from '../components/Header'
import QuantityDropdown from '../components/QuantityDropdown'
import ContactBlock from '../components/ContactBlock'
import {getAllItemsData} from '../firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./shop.css";

export default function Shop(){

    const navigate = useNavigate();

    //getting the item and data from database 
    const [items, setItems] = useState([]);
      useEffect(() => {
        const getData = async () => {
          let data = await getAllItemsData();
          setItems(data);
        };
        getData();
     }, [])

    return(
        <>
          <Header />
          <h1>Shop page</h1>

          <QuantityDropdown />
                  
          <div className='items-container'>
              {items.map((item) => (
                  <figure className='item' key={item.id}>
                      <img src="./download.jpg"/>
                      <figcaption>{item.name}<br/>{item.description}<br/>AED {item.price}<br/></figcaption>
                      <QuantityDropdown /><br/>
                      <button className='addtocartButton' onClick= {() => navigate("/cart")}>Add to Cart</button>
                  </figure>
              ))}
          
          </div>

          <ContactBlock />

        </>
    )
}