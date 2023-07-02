import React from "react";
import Layout from "./../components/layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import {ImHome} from "react-icons/im";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./image1.png"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>CONTACT US</h1>
          <p className="text-justify mt-2">
          Feel free to reach out to us with any questions or feedback
          </p>
          <p className="mt-3">
            <BiMailSend /> : eswara.krishnan2@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> :+91-9920120716
          </p>
          <p className="mt-3">
            <p>You can also visit our offline store at </p>
            <ImHome /> : 17/303 Siddhachal phase 3,Near Vasant Vihar,Thane (W)- 400610
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
