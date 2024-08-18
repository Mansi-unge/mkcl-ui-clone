import React from "react";
import "./FAqs.css"
function FAQs2 (){
  return(
    <>
    <div className="border  faq accordion accordion-flush" id="accordionFlushExample14">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefifteen" aria-expanded="false" aria-controls="flush-collapsefifteen">
        How will I be abel to access the course at ALC ?
      </button>
    </h2>
    <div id="flush-collapsefifteen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample14">
      <div className="accordion-body">You can take the course at the computer systems at the ALC using a login ID & Password that has been made available to you by the Learning Facilitator at the ALC. You would also need Headphones to listen to the rich audio-visual content, so make sure the system you are working on has a pair of headphones. It is mandatory for the ALC to provide headphones to every learner.</div>
    </div>
  </div>
</div>
    </>
  )
}
export default FAQs2;
