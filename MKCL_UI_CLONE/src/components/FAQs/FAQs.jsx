import React from "react";
import "./FAqs.css";
import FeesTable from "./FeesTable";
function FAQs() {
  return (
    <>
      <div className="faq accordion" id="accordionExample">
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is MKCL ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              MKCL stands for Maharashtra Knowledge Corporation Limited. We are
              a public limited company, promoted by the Maharashtra Government.
              We have been in the field of Information Technology for the past
              18 years. For more information, click{" "}
              <a
                className="anchor"
                href="https://www.mkcl.org/about-mkcl"
                target="_blank"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Who is the certifying authority KLic Certificate Course ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The mark sheet for a KLiC Certificate Course is awarded by the{" "}
              <a
                className="anchor"
                href="https://ycmou.digitaluniversity.ac/"
                target="_blank"
              >
                Yashwantrao Chavan Maharashtra Open University.
              </a>{" "}
              The certificate is awarded by MKCL.
            </div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Where can i seek admission for KLiC Certificate Courses ?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              You may take admission for KLiC Certificate Course at any of
              MKCL's Authorised Learning Centers (ALC).{" "}
              <a
                className="anchor"
                href="https://searchcenter.mkcl.org/klic"
                target="_blank"
              >
                Click here
              </a>{" "}
              to find an authorised learning center near you. Ensure that you
              take admission only at the Authorised Learning Centre (ALC) for
              KLiC Certificate Courses, which is duly authorised by MKCL and
              having its details published on the given link. You may ask the
              ALC to produce a certificate awarded to it by MKCL mentioning its
              authorisation.
            </div>
          </div>
        </div>

        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >What is the process of admission ?</button>
          </h2>
          <div
            id="collapsefour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            You need to fill out a pre-printed KLiC admission form, available at our ALC. Fill it carefully and completely, sign the declaration and submit it to the ALC coordinator with the prescribed fee. Incomplete applications shall not be accepted.
            </div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive"
            >What documents do i need to carry while going for admission</button>
          </h2>
          <div
            id="collapsefive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">You need to carry a passport size photograph & a State/Central Government authorized identity card. Affix the photo to the application form and submit a signed photocopy of the ID proof.</div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsesix"
              aria-expanded="false"
              aria-controls="collapsesix"
            >How often do the batches of KLic Certificate Course start ? </button>
          </h2>
          <div
            id="collapsesix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">There is one batch every month</div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseseven"
              aria-expanded="false"
              aria-controls="collapseseven"
            >What is the duration of a KLiC Certificate Course ?</button>
          </h2>
          <div
            id="collapseseven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">A learner has an option to complete a KLiC Certificate Course in 1 months or 2 months. At the end of the course, an exam will be conducted for evaluation.</div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseeight"
              aria-expanded="false"
              aria-controls="collapseeight"
            >Is there any study material available for the course ?</button>
          </h2>
          <div
            id="collapseeight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Wolrdclass e-Learning content will be provided to learner at ALC.</div>
          </div>
        </div>

        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsenine"
              aria-expanded="false"
              aria-controls="collapsenine"
            >Fees for the KLiC Courses ?</button>
          </h2>
          <div
            id="collapsenine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"> <FeesTable/> </div>
          </div>
        </div>
       
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseten"
              aria-expanded="false"
              aria-controls="collapseten"
            >How can I verify that the fees has been deposited against my admission ? </button>
          </h2>
          <div
            id="collapseten"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">After you have submitted the admission form and the course fee, the ALC will issue a receipt to you with your name & fee amount. Please verify that the amount paid by you equals the amount mentioned in the receipt.</div>
          </div>
        </div>
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseeleven"
              aria-expanded="false"
              aria-controls="collapseeleven"
            >The name printed on my receipt has a speling error , can I get it corrected ? </button>
          </h2>
          <div
            id="collapseeleven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Yes, please verify your name printed on the fee receipt and get it corrected, if required, within 24 hours of last date of payment. This name shall appear on your YCMOU Mark Sheet/ KLiC Certificate. The request for the change of name on the certificate shall not be entertained later.</div>
          </div>
        </div>

        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetweleve"
              aria-expanded="false"
              aria-controls="collapsetweleve"
            >What is the last date for paying fees ?</button>
          </h2>
          <div
            id="collapsetweleve"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Admissions are open from start to end of the month hence fees can be paid throughout the month. But admission will not be considered as confirmed till payment is not received.</div>
          </div>
        </div>

        
        <div className="accordion-item over">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethirteen"
              aria-expanded="false"
              aria-controls="collapsethirteen"
            >I have not been able to pay the complete fees , can I continue the course ?</button>
          </h2>
          <div
            id="collapsethirteen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Applicant shall be considered as registered learner only after the admission procedure is completed by him / her and fees are fully paid by him / her. If the complete payment is not done, then the Applicant will not be considered as registered learner and consequently will not be allowed to appear for the KLiC Examination.</div>
          </div>
        </div>

        <div className="accordion-item over ">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefourteen"
              aria-expanded="false"
              aria-controls="collapsefourteen"
            >Is there any trial period for the course ?</button>
          </h2>
          <div
            id="collapsefourteen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">No, there is no trial period. Make sure that you are completely satisfied with the information provided by the counseling person at the ALC before you take admission. Note that fees once paid are non-refundable and non-transferable under any circumstances.</div>
          </div>
        </div>

      </div>
    </>
  );
}
export default FAQs;
