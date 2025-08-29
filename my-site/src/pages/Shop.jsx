import Header from '../components/Header'
import ContactBlock from '../components/ContactBlock'
import {getItemData} from '../firebase';
import { useEffect, useState } from 'react';
import "./shop.css";

export default function Shop(){
    
  const [item, setItem] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let data = await getItemData();
      setItem(data);
    }

    getData();
  })

//  const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <Header />
        <h1>Shop page</h1>

        <div className="itemBlock">
            <div className="imageSide">
                {/* <img src={item.image}*/}
                <img src="download.jpg" />

            </div>

            <div className="textSide">
                {item.name}<br/>
                {item.description}<br/>
                {item.price}<br/>
                Quantity mcskda; jvfnd jvsn djsbfls. 
                <br/>add to cart
                
                
                <div className="dropdown">
                    Quantity:

                    <input className="inputBar" type="text" defaultValue="1"/>

                    <button className='dropdown-btn'>▼</button>
                    

                   


                    {/* <button 
                      className="dropdown-btn" 
                      onClick={() => setIsOpen(!isOpen)}
                    >
                    ▼
                    </button>

                    {isOpen && (
                      <ul className="dropdown-menu">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    )} */}
                </div>
               
                
            </div>
        </div>


        <figure className='fig-container'>
            <img src="./download.jpg"/>
            <figcaption>icecream<br/>made with love eirhliqw hwfakq eutahkl mfre knmewk kmewl </figcaption>
        </figure>


        <p>blah blah 

        </p>
        <figure>
            <img src="/download.jpg"/>
            <figcaption>icecream<br/>made with love hfeafiu eywh UEHYWU eryaktwut eYIU ETUR EGRWU</figcaption>
        </figure>

         
        <ContactBlock />

        </>
    )
}