
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does installation typically take?",
      answer: "Installation times vary based on your build. A basic lift kit with wheels and tires typically takes 1-2 days, while more complex builds with multiple add-ons can take 3-5 days."
    },
    {
      question: "Do you provide warranties on parts and labor?",
      answer: "Yes! All parts come with manufacturer warranties, and our labor is backed by our own 12-month/12,000-mile warranty."
    },
    {
      question: "Can I bring my own parts for installation?",
      answer: "We specialize in installing parts purchased through us to ensure quality and warranty coverage. This helps us guarantee the best results for your build."
    },
    {
      question: "What happens if I need adjustments after installation?",
      answer: "We provide free alignment checks and adjustments within 500 miles of your installation. Any warranty-related issues are handled promptly by our expert team."
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-alpine-blue">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
