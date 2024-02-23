import React from 'react'
import { Nav } from '../components/Navbar';
import './Home.css';
import nd1 from '../images/nd1.jpg';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  return (
    <>
    <div class="landing">
    <div class="landingMessage">
      <h2>Douglas Brian Ede</h2>
      <h1>
      Data-driven production manager 
      skilled in 6 Sigma and web design</h1>
    </div>

    <div class='heroImage'>
        <h1 class='heroStatement'>See This Project</h1>
        <img src={nd1} alt='Auto Yard with Mountains in the background' style={{ width: '100%', height: 'auto' }} />
    </div>
    {/* <HeroCarousel /> */}
    </div>
    </>
  )
}
