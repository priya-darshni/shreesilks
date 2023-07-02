import React from "react";
import Layout from "./../components/layout/Layout";
import { Helmet } from "react-helmet";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./policy.png"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At ShreeSilks, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our website. By accessing and using our services, you consent to the practices described in this policy.</p>
          <p>If you have any questions, concerns, or requests regarding our Privacy Policy or the use of your personal information, please contact our customer support team. Your privacy is important to us, and we will make every effort to address your inquiries in a timely and satisfactory manner.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;