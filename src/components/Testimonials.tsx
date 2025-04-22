
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const testimonials = [
  {
    quote: "One of the most talented students I've had the pleasure of teaching. Their grasp of complex algorithms and problem-solving abilities are exceptional.",
    author: "Dr. Jane Smith",
    title: "Professor of Computer Science, Montclair State University"
  },
  {
    quote: "An exceptional collaborator who consistently delivered high-quality work. Their technical skills and attention to detail made our project a success.",
    author: "John Johnson",
    title: "Project Lead, Student Collaboration"
  },
  {
    quote: "Demonstrates a unique blend of technical expertise and creative thinking. Their contributions to our research project were invaluable.",
    author: "Dr. Michael Brown",
    title: "Research Advisor, AI Lab"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-softGray/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md reveal">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg width="45" height="36" className="text-softBlue/50 mb-2" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0534 36C8.70318 36 5.07122 34.5532 2.1575 31.6596C0.719167 29.7872 0 27.234 0 24C0 21.8723 0.623145 19.5532 1.86944 17.0426C3.1157 14.5319 4.74054 12.1277 6.74394 9.83C8.74735 7.53191 11.0349 5.40426 13.6065 3.44681C16.178 1.48936 18.8456 0 21.6091 0L24.8629 5.74468C19.4688 7.27657 15.3505 9.70212 12.5081 13.0213C9.66574 16.3404 8.24454 19.9149 8.24454 23.7447C8.24454 24.1702 8.29255 24.5532 8.38856 24.8936C8.48457 25.234 8.62857 25.5319 8.82056 25.7872C9.6888 24.9362 10.989 24.5106 12.7211 24.5106C15.1966 24.5106 17.2479 25.2766 18.875 26.8085C20.502 28.3404 21.3156 30.3404 21.3156 32.8085C21.3156 34.5532 20.6165 35.9574 19.2184 37C17.8203 38.0426 15.9128 36 13.0534 36ZM35.7323 36C31.382 36 27.7501 34.5532 24.8364 31.6596C23.398 29.7872 22.6789 27.234 22.6789 24C22.6789 21.8723 23.302 19.5532 24.5483 17.0426C25.7946 14.5319 27.4194 12.1277 29.4229 9.83C31.4263 7.53191 33.7138 5.40426 36.2854 3.44681C38.8569 1.48936 41.5245 0 44.288 0L47.5418 5.74468C42.1477 7.27657 38.0295 9.70212 35.187 13.0213C32.3446 16.3404 30.9234 19.9149 30.9234 23.7447C30.9234 24.1702 30.9714 24.5532 31.0674 24.8936C31.1634 25.234 31.3074 25.5319 31.4994 25.7872C32.3677 24.9362 33.6678 24.5106 35.4 24.5106C37.8754 24.5106 39.9268 25.2766 41.5538 26.8085C43.1808 28.3404 43.9943 30.3404 43.9943 32.8085C43.9943 34.5532 43.2953 35.9574 41.8972 37C40.4991 38.0426 38.5917 36 35.7323 36Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <p className="text-charcoal/80 italic mb-8">{testimonial.quote}</p>
              </CardContent>
              
              <CardFooter className="border-t pt-4 flex flex-col items-start">
                <h4 className="font-semibold text-charcoal">{testimonial.author}</h4>
                <p className="text-charcoal/60 text-sm">{testimonial.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
