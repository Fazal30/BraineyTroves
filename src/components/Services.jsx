import React from "react";
import int1 from "../assets/exc.jpeg"
import arc1 from "../assets/core.jpeg"
// import arc1 from "../assets/arc1.jpeg"
// import arc1 from "../assets/arc1.jpeg"
const Services = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to elevate your career and business success.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {/* Executive Placement */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/5 w-full">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src={int1}
                  alt="Executive Placement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Executive Placement
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our executive placement services cater to seasoned professionals seeking new challenges and leadership roles. We match top-tier talent with organizations that value expertise and vision.
              </p>
            </div>
          </div>

          {/* Graduate Recruitment */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="lg:w-2/5 w-full">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop"
                  alt="Graduate Recruitment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Graduate Recruitment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For fresh graduates eager to launch their careers, we offer tailored recruitment services. We connect emerging talent with opportunities that align with their skills and ambitions.
              </p>
            </div>
          </div>

          {/* Career Transition */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/5 w-full">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  alt="Career Transition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Career Transition Consulting
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide personalized career transition support to ensure smooth and successful shifts in professional paths. Our consultants offer strategic insights and practical advice for every stage of your career journey.
              </p>
            </div>
          </div>

          {/* Talent Acquisition */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="lg:w-2/5 w-full">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Talent Acquisition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Talent Acquisition
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our talent acquisition services help organizations find the perfect candidates for their needs. We leverage our extensive network and market knowledge to identify individuals who will thrive in dynamic workplaces.
              </p>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/5 w-full">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
                  alt="Market Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                Market Trend Analysis
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Stay ahead of industry trends with our comprehensive market analysis. We offer valuable insights to help both candidates and companies make informed decisions about career and organizational growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
