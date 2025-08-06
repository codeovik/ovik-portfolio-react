import { useEffect, useState } from "react";

export default function FAQ() {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("/assets/data/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqData(data));
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="lg:mt-150 mt-100 text-black font-myfont dark:text-white max-w-[1400px] mx-auto grid gap-20 lg:grid-cols-[3fr_2fr] px-20 md:px-40"
    >
      <div className="flex flex-col lg:gap-10 gap-10 order-2 lg:order-1">
        {faqData.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`faq-item bg-lightbox dark:bg-darkbox md:p-25 p-15 cursor-pointer border-2 lg:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 ${
              activeIndex === index ? "border-primary" : ""
            } rounded-2xl md:rounded-3xl transition-all`}
          >
            <div className="flex justify-between items-center">
              <span className="md:text-lg text-sm font-bold">
                {faq.question}
              </span>
              <span className="icon text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`faq-answer transition-all overflow-hidden ${
                activeIndex === index ? "max-h-96 mt-5" : "max-h-0"
              } lg:text-base text-xs`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <h2 className="hidden lg:block text-8xl lg:font-medium order-1 transition-all">
        Most<br />asked<br />questions
      </h2>
      <h2 className="text-center font-medium lg:hidden md:text-6xl text-5xl mb-10">
        Most asked questions
      </h2>
    </section>
  );
}
