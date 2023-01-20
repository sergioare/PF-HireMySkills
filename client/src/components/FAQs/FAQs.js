import React from "react";
import s from "../FAQs/FAQs.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const FAQs = () => {
  return (
    <div className={s.faqs}>
      <Navbar />
      <h2>What do you need help with? </h2>
      <h4>Popular topics</h4>

      <div className={s.faqMain}>
        <p>
          Contract management <br />
          of a professional
        </p>
        <p>Payments</p>
        <p>Invoice</p>
        <p>Client</p>
      </div>
      <div className={s.faqSeccion}>
        <p>
          <b>How it works HireMySkills?</b>
          <hr />
          HireMySkills provides a well thought out, readable and dynamic
          environment for you to:
          <br />
          <ul>
            <li>
              The professional can search for jobs in their area of ​expertise;
            </li>
            <li>
              The client can look for the solution to his problem and find the
              professional who can best do it.
            </li>
          </ul>
          <br />
          Creating a profile, creating a skill, and submitting proposals to
          projects are free.
          <br />
          <br />
          So you as a professional can create your profile for free and start
          offering your services, if your profile is approved in HireMySkills
          <br />
          <br />
          And you as a customer can also create your profile for free. After
          publishing your profile, in a few minutes you can start reviewing the
          proposals of the professional you need!
          <br />
          <br />
          <br />
        </p>
        <p>
          <b>What is HireMySkills?</b>
          <hr />
          On HireMySkills, we help our customers find the best remote talent for
          their projects, just like we help professionals find jobs that fulfill
          their expectations, abilities and payment desired. We do this in the
          safest way possible for both parties.🙂 <br />
          <br />
          <br />
        </p>
        <p>
          <b>First steps as a customer</b>
          <hr />
          You can search for offers of professionals on our platform of your
          interest, that adapts to your needs and with the best offers in the
          labor market.
          <br />
          Here you can also find offers, promotions and discounts of your
          interest!
          <br />
          <br />
          <br />
        </p>
        <p>
          <b>Hiring professionals</b>
          <hr />
          I have accepted a proposal. What is the next step?
          <br />
          After having accepted a proposal, you must make the payment of the
          guarantee deposit in case it is a fixed price job, or if it were a
          project for hours, you must validate your payment method. From this
          you can start working.
          <br />
          To end the work, all that remains is for both to qualify. This
          qualification is confidential, you will only be able to see how the
          chosen professional has qualified you after you have already issued
          your qualification.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
