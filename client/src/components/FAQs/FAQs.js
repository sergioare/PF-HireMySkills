import React from "react";
import styles from "../FAQs/FAQs.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const FAQs = () => {
  return (
    <div className={styles.faqs}>
      <Navbar />
      <div className="container ">
        <h2 className="text-center">
          <b>What do you need help with? </b>
        </h2>
        <div className="col-12">
          <h4 className="col-12 pb-3">
            <b>Popular topics</b>
          </h4>
          <div className="row gap-3 justify-content-center pb-2">
            <div className="col-12 col-md-2 p-3 border border-secondary rounded border-2 shadow p-3 mb-5 rounded">
              <a href="#contract" className="text-decoration-none">
                <h5 className="text-black text-center link-info">
                  <b>Contract management of a professional</b>
                </h5>
              </a>
            </div>
            <div className="col-12 col-md-2 p-3 border border-secondary rounded border-2 shadow p-3 mb-5 rounded">
              <a href="#payment" className="text-decoration-none">
                <h5 className="text-black text-center pt-4 link-info">
                  <b>Payments</b>
                </h5>
              </a>
            </div>
            <div className="col-12 col-md-2 p-3 border border-secondary rounded border-2 shadow p-3 mb-5 rounded">
              <a href="#professional" className="text-decoration-none">
                <h5 className="text-black text-center pt-4 link-info">
                  <b>Professionals</b>
                </h5>
              </a>
            </div>
            <div className="col-12 col-md-2 p-3 border border-secondary rounded border-2 shadow p-3 mb-5 rounded">
              <a href="#client" className="text-decoration-none">
                <h5 className="text-black text-center pt-4 link-info">
                  <b>Clients</b>
                </h5>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12">
          <p>
            <b>How it works HireMySkills?</b>
            <br />
            HireMySkills provides a well thought out, readable and dynamic
            environment for you to:
            <br />
            <ul>
              <li>
                The professional can search for jobs in their area of expertise;
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
            publishing your profile, in a few minutes you can start reviewing
            the proposals of the professional you need!
            <br />
            <br />
          </p>
          <hr />
          <p>
            <b>What is HireMySkills?</b>
            <br />
            On HireMySkills, we help our customers find the best remote talent
            for their projects, just like we help professionals find jobs that
            fulfill their expectations, abilities and payment desired. We do
            this in the safest way possible for both parties.🙂 <br />
            <br />
            <br />
          </p>
          <hr />
          <p id="client">
            <b>First steps as a customer</b>
            <br />
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
          <hr />
          <p id="contract">
            <b>Hiring professionals</b>
            <br />
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
          <br />
          <br />
          <hr />
          <p id="payment">
            <b>Payment methods</b>
            <br />
            <img
              className="rounded mx-auto d-block pb-4"
              src="https://woocommerce.com/wp-content/uploads/2021/05/fb-mercado-pago-v2@2x.png"
              alt="Img not found"
              width="450px"
            />
            HireMy Skills has a payment method available, payment market and
            everything depends on the type of device used, your country of
            residence and regulatory permits.
          </p>
          <br />
          <br />
          <hr />
          <p id="professional">
            <b>How to start selling on HireMySkills</b>
            <br />
            At HireMySkills is the expanding digital services platform. Share
            your skills with our customer community and earn money while doing
            it! If you have a skill that you can offer and benefit someone else
            with your knowledge, don't wait any longer! and register on our
            platform,
            <br />
            HireMySkills is the place for you.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
