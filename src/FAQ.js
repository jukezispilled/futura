import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded: isOpen });

  return (
    <div className="bg-white border rounded-lg overflow-hidden mb-4">
      <div
        className="px-4 py-3 flex justify-between items-center cursor-pointer"
        {...getToggleProps({ onClick: onToggle })}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="px-4 py-3 border-t border-gray-200">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is full-service web design and development?',
      answer:
        'Full-service web design and development encompasses the entire process of creating a website from start to finish. It includes everything from initial planning and design to development, hosting, and ongoing maintenance.',
    },
    {
      question: 'Why do I need a professionally designed website?',
      answer:
        "A professionally designed website helps establish your brand's online presence, attracts more customers, and enhances credibility. It ensures your site is user-friendly, visually appealing, and optimized for performance and search engines.",
    },
    {
      question: 'What are the benefits of hiring a full-service web development team?',
      answer:
        'Hiring a full-service web development team ensures you have experts handling all aspects of your website. This includes design, development, content management, SEO, and ongoing updates. It saves time, improves quality, and provides ongoing support.',
    },
    {
      question: "How can web design impact my business's growth?",
      answer:
        'Effective web design can significantly impact your business growth by improving user experience, increasing conversion rates, and enhancing brand visibility. A well-designed website attracts more visitors, converts them into customers, and encourages repeat business.',
    },
    {
      question: 'What should I look for when choosing a web design company?',
      answer:
        'When choosing a web design company, look for experience in your industry, a portfolio of successful projects, client testimonials, and a clear understanding of your business goals. Ensure they offer comprehensive services that meet your needs and budget.',
    },
    {
      question: 'How often should I update my website?',
      answer:
        'Regular website updates are essential to keep content fresh, ensure security, and adapt to changes in technology and user expectations. Aim to update your website content periodically and perform technical updates as needed to maintain optimal performance.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-min w-full flex justify-center items-center py-10 bg-white">
      <div className="max-w-3xl w-full space-y-4 px-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;