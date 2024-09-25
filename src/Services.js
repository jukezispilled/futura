import { Link } from 'react-router-dom';
import Services from './Services';
import WebDev from './WebDev';

function Service({ title, description, link }) {
  return (
    <div className="relative w-[70%] rounded-xl bg-[#E098F1] bg-opacity-70 mb-8">
      <div className="absolute -top-10 left-5 bg-white border-4 border-[#E098F1] p-4 rounded-xl text-3xl font-custom font-semibold">{title}</div>
      <div className="flex justify-center">
        <div className="w-3/5 text-center p-12 font-medium text-lg">
          {description}
          <div className="flex justify-center">
            {/* Use Link component from react-router-dom */}
            <Link to={link} className="p-2 bg-white rounded-md mt-2 font-bold">
              See More
            </Link>
          </div>
        </div>
        <div className="w-2/5 grid content-center bg-white rounded-xl m-6">
          <div className="h-full w-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Servicelist() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center flex-col pb-10 pt-[20%] gap-10">
      <Service title="Web Dev/Design" description="This is preview text. This is only a preview. Preview explanation of service. Thanks! This is preview text. This is only a preview. Preview explanation of service. Thanks!" link="/services/WebDev" />
      <Service title="Ad Creatives" description="This is preview text. This is only a preview. Preview explanation of service. Thanks! This is preview text. This is only a preview. Preview explanation of service. Thanks!" link="/services/AdCreative"/>
      <Service title="LeadGen" description="This is preview text. This is only a preview. Preview explanation of service. Thanks! This is preview text. This is only a preview. Preview explanation of service. Thanks!" link="/services/LeadGen"/>
      <Service title="Chatbot Dev" description="This is preview text. This is only a preview. Preview explanation of service. Thanks! This is preview text. This is only a preview. Preview explanation of service. Thanks!" link="/services/Chatbot"/>
      {/* Add more Service components for other services */}
    </div>
  );
}

export default Servicelist;