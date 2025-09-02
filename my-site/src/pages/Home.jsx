
// import { useState } from 'react'
// import { useRef } from 'react'
// import {Navigate, BrowserRouter, Route, Routes, useLocation, useNavigate} from 'react-router-dom';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {useNavigate } from "react-router-dom";
import Header from '../components/Header'
import ContactBlock from '../components/ContactBlock'
import './home.css'

export default function Home() {

    const scrollContainer = document.querySelector('.scroll-container');
    function scrollLeft() {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }
    function scrollRight() {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }

    const navigate = useNavigate();


    return (
        <>
            <Header />

            <div className="block1">
                <div className="leftHalf">
                    <img src="/puddle.png" alt="dooodles" className="doodles" />
                </div>

                <div className="rightHalf">Satisfy your<br />kraving's<br />with<br />Krave'd</div>
            </div>

            {/* <div className="wave" id='wave1'></div> */}

            <div className="block2">
                Delicialize<br />your life with<br />Krave'd<br />
                <button className="orderbutton" id='orderbutton1' onClick={() => navigate("/shop")}>Order Now</button>
            </div>

            <div className="block3">
                Our Specials

                <div className='carousel'>
                    <button className='arrow leftarrow' onClick={scrollLeft}>&#10094;</button>

                    <div className="scroll-container" ref={scrollContainer}>
                        <figure>
                            <img src="./download.jpg" />
                            <figcaption>icecream<br />made with love eirhliqw hwfakq eutahkl mfre knmewk kmewl </figcaption>
                        </figure>
                        <figure>
                            <img src="/download.jpg" />
                            <figcaption>icecream<br />made with love hfeafiu eywh UEHYWU eryaktwut eYIU ETUR EGRWU</figcaption>
                        </figure>
                        <figure>
                            <img src="/download.jpg" />
                            <figcaption>icecream<br />made with love</figcaption>
                        </figure>
                        <figure>
                            <img src="/download.jpg" />
                            <figcaption>icecream<br />made with love</figcaption>
                        </figure>
                    </div>

                    <button className='arrow rightarrow' onClick={scrollRight}>&#10095;</button>
                </div>

                <button className="orderbutton" id='orderbutton2' onClick={() => navigate("/shop")}>Order Now</button>
            </div>

            {/* <div className="wave" id='wave2'></div> */}

            <div className='block4'>About me
                <div className='container'>
                    <img src="/download.jpg" alt="pic" className='doodles2' />
                    <p>my name is irsa and im the developer of this webpage and i dont know im doing tbh but im just trying. almost dotn with the main mpage and ill do the order now page next, then i gotta work on either database or backend, to make pages for each item, i need to be able to retrieve info about it first like price, pic, quantities blah blah</p>
                </div>
            </div>


            <ContactBlock />

        </>
    )
}
