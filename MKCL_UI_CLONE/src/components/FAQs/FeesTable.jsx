import React from "react";
import "./FAQs.css";

function FeesTable() {
  return (
    <>
      <table className="border">
        <tr>
          <th className=" head border text-center p-4">No. of Hours </th>
          <th className="border text-center p-3 head">
            Learning Only (LO) Mode Fee (Rs.){" "}
            <p className="fw-lighter">(LO) Mode is available all over India</p>{" "}
          </th>
          <th className="border text-center p-3 head">
            Learning + Job Offer (LJ) Mode Fee (Rs.){" "}
            <p className="fw-lighter">
              (LJ) Mode is available only in Maharashtra State
            </p>{" "}
          </th>
        </tr>
        <tr>
          <td className="border p-2 text-center bg-white">KLiC Courses of 120 Hours</td>
          <td className="border p-2 text-center bg-white">5000/-</td>
          <td className="border p-2 text-center bg-white">5000 + 1000 = 6000/-</td>
        </tr>
        <tr>
          <td className="border p-2 text-center bg-white">KLiC Courses of 60 Hours</td>
          <td className="border p-2 text-center bg-white">2500/-</td>
          <td className="border p-2 text-center bg-white">-</td>
        </tr>
        <tr>
          <td className="bg-white border p-2 text-center">KLiC Diploma of 360 Hours</td>
          <td className="bg-white border p-2 text-center">15000/-</td>
          <td className="bg-white border p-2 text-center">15000 + 1000 = 16000/-</td>
        </tr>
      </table>
    </>
  );
}
export default FeesTable;
