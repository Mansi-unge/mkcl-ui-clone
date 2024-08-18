import React from "react";
import FAQs from "../components/FAQs/FAQs";
import FAQsHead from "../components/FAQs/FAQsHead";
import FAQsHead2 from "../components/FAQs/FAQsHead2";
import "../components/FAQs/FAQs.css";
import FAQs2 from "../components/FAQs/FAQs2";
function Faq(){
  return(
    <>
     <FAQsHead/>
   <FAQs/>
   <hr className="hrborder" />
  <FAQsHead2/>
  <FAQs2/>
    </>
  )
}
export default Faq;