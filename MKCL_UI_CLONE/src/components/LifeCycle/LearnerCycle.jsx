import React from "react";
import LifeCycleImg from "../Asset/Lifecycle.png"; 
import "./LifeCycle.css"

function LearnerCycle(){
  return (
    <>
    <div className="lifecycle py-5 d-flex  justify-content-start align-items-center flex-column">
      <h1>Learner Life Cycle</h1>
    <img className="img-fluid py-3" src={LifeCycleImg} alt="" />
    </div>
    </>
  )
}
export default LearnerCycle; 