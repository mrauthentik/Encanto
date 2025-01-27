import Footer from "./Footer";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{question}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="faq-icon" />
      </div>
      <motion.div
        className="faq-answer"
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What is Alaran?",
      answer: "Alaran is a fashion brand offering a wide range of clothing and accessories inspired by African culture."
    },
    {
      question: "Do you offer custom designs?",
      answer: "Yes, we provide custom design services tailored to your unique style and preferences."
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order through our website or contact our customer service team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and mobile money."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to various countries. Shipping costs may apply."
    }
  ];

  return (
    <div>
      <NavBar />
      <main>
        <div className="hero">
          <div className="box">
            <p>
              <Link to="/"> Home </Link>
              <FontAwesomeIcon icon={faArrowRight} className="setter-icon" />
              <span>
                <Link to="/faqs"> FAQs</Link>
              </span>
            </p>
          </div>
        </div>
      </main>
      <section className="faq-section">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <p className="faq-intro">
          Feel free to browse our FAQs. If you have further questions, contact our customer service or Email us directly.
        </p>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQs;
