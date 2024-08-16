import React from "react";
import Hero from "../components/Hero/Hero";
import HeroTwo from "../components/HeroTwo/HeroTwo";
import Introduction from "../components/Introduction/Introduction";
function Home (){
  return(
    <>
    <Hero/>
    <Introduction/>
    <HeroTwo/>
    </>
  )
}

export default Home;