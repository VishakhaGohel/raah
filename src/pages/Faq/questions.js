import React, { useState } from 'react';

const faqdata = [
  {
    question: "How have you selected your top charities?",
    answer: "We select our top charities based on rigorous evaluations of their impact, cost-effectiveness, transparency, and alignment with our mission."
  },
  {
    question: "How can I find out where my forfeited charity money went?",
    answer: "Contact the organization handling the forfeiture process, such as a government agency or financial institution, for information on how the funds were allocated to charitable causes."
  },
  {
    question: "What is an Anti-charity?",
    answer: "An anti-charity is an organization that opposes the goals or values of another charity, working against its mission or initiatives. It serves as a counterpart advocating for beliefs contrary to those promoted by the charity it opposes."
  },
  {
    question: "Are donations to your recommended charities tax deductible?",
    answer: "Donations to our recommended charities are typically tax-deductible, but it's wise to verify eligibility based on local regulations and the charity's status with tax authorities."
  },
  {
    question: "Do all the charities on your list actually save lives?",
    answer: "While not all charities on our list directly save lives, they aim to significantly impact various social, environmental, or humanitarian issues through their programs and initiatives. Each charity addresses specific needs within their respective areas of focus, contributing to positive change and improved well-being."
  },
  {
    question: "Doesn't the government already give plenty of foreign aid?",
    answer: "Despite government aid efforts, many challenges persist globally, and charitable organizations play a crucial role in addressing complex issues and providing support where needed. Charities often complement government initiatives, offering specialized expertise, flexibility, and targeted assistance to communities facing various humanitarian, social, and environmental challenges."
  }
];

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="auto-container">
        <div className="faq-content-box">
          <div className="accordion-box">
            {faqdata.map((faq, index) => (
              <FaqData
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqData({ index, question, answer, isActive, toggleAccordion }) {
  return (
    <div className={`accordion accordion-block ${isActive ? 'active' : ''}`}>
      <div className="accord-btn" onClick={() => toggleAccordion(index)}>
        <span className="count"></span>
        <h4>{question}</h4>
      </div>
      <div className="accord-content" style={{ display: isActive ? 'block' : 'none' }}>
        <div className="text">{answer}</div>
      </div>
    </div>
  );
}

export default Questions;
