import React from 'react';
import Footer from './Footer';

const journeyData = [
  { week: "Week 1", title: "Initial Consult", description: "Review terms and sign contract with client. Present project timeline and clarify scope." },
  { week: "Week 2", title: "Design Inquiry", description: "Meeting at project site. Discuss preferred styles, aesthetics and needs assessment. Photograph and measure." },
  { week: "Week 3", title: "Initial Design Concept", description: "Meeting at Studio. If bath & kitchen, present layout/space plans. If furnishings, present colors fabrics, furnishings and decor." },
  { week: "Week 4", title: "Second Design Concept", description: "Meeting at Red Pill Studio. Finalize fixtures materials & layout. Review proposals with pricing." },
  { week: "Week 5", title: "Send out Design Concept", description: "Using several online platforms to release bid for contractors. Provide a week for bids. Revisit design and re-issue bid if costs miss client budget." },
  { week: "Week 6", title: "Finalize Sales Presentation", description: "Finalize contractor of choice, determine deposit amount, clarify scope of work and review final details." },
  { week: "Week 7", title: "Purchasing of Materials", description: "Purchase materials, drop off materials on-site and notify contractor." },
  { week: "Week 8", title: "Start Initial Installation", description: "Installation begins. Length of time required will be dependent on the overall project scope." },
  { week: "Week 9", title: "Review", description: "Project is completed. Present warranty for workmanship and materials, review details with client." },
];

const Journey = () => {
  return (
<div className="min-h-screen flex flex-col">
    <section id="journey" className="w-full py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Client Project Timeline</h2>
        <div className="relative"> {/* Container for the vertical line */}
          <div className="absolute left-1/2 -ml-1 h-full border-2 border-gray-400"></div> {/* Vertical line */}
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div key={index} className="relative flex items-center">
                <div className="w-1/2 text-right pr-8"> {/* Left side content */}
                  <h3 className="text-xl font-semibold">{item.week}</h3>
                  <p className="text-gray-700">{item.title}</p>
                </div>
                <div className="absolute left-1/2 -ml-3 z-10 w-6 h-6 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center"> {/* Circle */}
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>{/* Inner Circle */}
                </div>
                <div className="w-1/2 pl-8"> {/* Right side content */}
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default Journey;