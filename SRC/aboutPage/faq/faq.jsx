import React, { useState } from 'react';
import styles from './faq.module.css'; // Import your CSS module for styling

const FrequentlyAskedQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    { question: 'Why Us ?', answer: 'The best savings are always reserved for people buying in bulk but not anymore, we offer parts at wholesale prices with intentions of making it look like bulk orders in return getting lesser prices than the market. Our number one ranked car parts catalog won’t let you down. Direct supplier negotiations are already sealed in our agreements. You won’t haggle for a lower price here. We’ve already done that.' },
    { question: 'Savings', answer: 'We buy in bulk from various shipyards, which allows us to purchase parts at wholesale prices and pass the price advantage on to our customers.' },
    { question: 'A Grade Parts', answer: 'We make sure to provide our customers with A-quality, low-mileage auto parts at affordable prices.' },
    {question: 'Warranty', answer:'We offer our customers a 30-day warranty on recycled auto parts with a money-back guarantee *. With a flexible refund policy. Parts like engine, transmission, and axle assembly are provided with a 60-90 days standard warranty.'},
    {question:'Customer Centric Approach', answer:'At Jask Auto Parts, our motto is a happy customer bringing in 100 new customers. Just Ask! – Jask.'},
    {question:'Part Finder',answer:'We are the first in the industry to provide part finder service. Wherein the user is just charged a small fee to help locate the part available in their locality in turn saving shipping cost.'},
    // Add more FAQs as needed
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqHeader}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.questionButton} ${selectedQuestion === index ? styles.active : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </button>
            <div className={`${styles.answer} ${selectedQuestion === index ? styles.showAnswer : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
