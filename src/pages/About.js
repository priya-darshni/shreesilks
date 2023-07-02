import React from "react";
import Layout from "./../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Shree Silks"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./about.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At ShreeSilks, we are passionate about celebrating the timeless elegance and beauty of sarees. We understand that a saree is not just a garment but a symbol of tradition, grace, and cultural heritage. Our mission is to provide you with a curated collection of exquisite sarees that reflect the rich diversity and artistry of Indian textiles.
As a team of dedicated saree enthusiasts, we take great pride in handpicking each saree to ensure the highest quality, craftsmanship, and attention to detail. We work closely with skilled artisans and weavers from various regions of India, who bring to life the intricate weaves, delicate embroideries, and vibrant colors that make each saree a masterpiece.<p> We hope that our collection inspires you and that you find the perfect saree to add to your wardrobe. Explore our range of sarees and embark on a journey of elegance, tradition, and timeless style.</p>
<p>Happy saree shopping!</p>
<p>
With love,
The ShreeSilks Team
</p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;