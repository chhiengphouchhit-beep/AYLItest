import React from 'react';
import { Pillar } from '../types';

const pillarsData: Pillar[] = [
  {
    id: 1,
    title: 'Pillar 1: Academic Excellence and Curriculum Integration',
    goal: 'Deliver world-class, inclusive education through aligned curricula, effective teaching, and holistic student development across AYLA schools and any other school branches under AYLA.',
    strategicFocusAreas: [
      {
        focus: 'Integrated Curriculum System',
        actions: 'Align the Khmer National Curriculum with the Western Australian Curriculum, Chinese, and AYLA Enrichment Programs such as Digital/Robotic, Mathematics...',
        kpis: '100% of the curriculum is mapped and approved; curriculum review every 2 years.'
      },
      {
        focus: 'Quality Teaching Framework',
        actions: 'Implement “I Do, We Do, You Do”, CPA model, and AYLA’s mentoring program and QTA teacher standards across campuses.',
        kpis: '80% of teachers rated “Proficient” or higher by 2026.'
      },
      {
        focus: 'Assessment and consistent Data Collection, and Analysis of Culture',
        actions: 'Develop common assessment guidelines, grading systems, and reporting tools such as APP and LMS.',
        kpis: 'Quarterly data reports for each campus; 10% yearly improvement in student learning outcomes.'
      },
      {
        focus: 'Inclusive and Global Learning',
        actions: 'Strengthen bilingual (Khmer–English–Chinese) programs and global citizenship modules.',
        kpis: '3 international partnerships per year; participation in global competitions and exchanges.'
      }
    ]
  },
  {
    id: 2,
    title: 'Pillar 2: People, Systems, and Professional Development',
    goal: 'Build a professional, data-driven, and accountable organization that supports teacher growth, staff leadership capacity, and operational efficiency.',
    strategicFocusAreas: [
        {
            focus: 'Teacher Professional Growth: AYLA’s mentoring program and QTA',
            actions: 'Launch AYLA’s Quality Teaching Academy to offer micro-credential and mentoring programs.',
            kpis: '90% of teaching staff are trained annually; 70% complete the advanced module on LMS or the Course required.'
        },
        {
            focus: 'Leadership Development',
            actions: 'Establish leadership pipeline and induction for principals, heads, and coordinators.',
            kpis: '100 % leadership team completes the capacity-building cycle through our training and LMS.'
        },
        {
            focus: 'Digital Transformation',
            actions: 'Combine and centralise our teaching through Online materials with actual classes. Centralize operations through Staff App (HR, attendance, timesheet, communication) and unified LMS and APP.',
            kpis: '75% of teachers use them in their weekly classes by the end of 2026. 100% of staff use digital systems daily; 90% parents have access to their kids\' app.'
        },
        {
            focus: 'Monitoring, Evaluation, Assessment, and Learning (MEAL)',
            actions: 'Implement a company-wide performance data dashboard.',
            kpis: 'Annual M&E reports published; 85% satisfaction from internal & external (parents) stakeholders. 85% of students met their learning expectation based on the standard test or end-of-year result, followed the curriculum or course outline.'
        }
    ]
  },
  {
    id: 3,
    title: 'Pillar 3: Growth, Partnership, and Sustainability',
    goal: 'Expand AYLA’s impact through sustainable business models, strategic partnerships, and diversified education services and other business opportunities.',
    strategicFocusAreas: [
        {
            focus: 'Campus and Program Expansion',
            actions: 'Launch new campuses (Battambang, Phnom Penh, and Siem Reap or other places) and specialized programs (STEM, Digital, ELiF, Math Program).',
            kpis: '2 new campuses by 2027; 20% increase in student enrollment and 3% drop out yearly.'
        },
        {
            focus: 'Partnerships and Branding',
            actions: 'Strengthen collaboration with SCSA, Local, International Universities, INGOs, and universities.',
            kpis: '5 formal MOUs; AYLA recognized as a regional education hub.'
        },
        {
            focus: 'Business Development and Innovation',
            actions: 'Develop teacher supply and training services, an online learning app, and a consultancy hub.',
            kpis: '3 new business units launched; 25% of annual revenue from non-school services.'
        },
        {
            focus: 'Financial and Operational Sustainability',
            actions: 'Introduce transparent budgeting, fee structure, and investment plan.',
            kpis: 'Annual balanced budget; 10-15% growth in financial reserves each year.'
        },
        {
            focus: 'Other business',
            actions: 'Develop and invest in other business opportunities in the available markets.',
            kpis: '3 new business units launched; 25-30% of annual revenue generated.'
        }
    ]
  }
];

const GoalsSection: React.FC = () => {
  return (
    <section id="pillars" className="bg-white py-12 md:py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-[#005398]">AYLA Three-Pillar Strategic Plan In Detail</h2>
       </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {pillarsData.map((pillar) => (
          <div key={pillar.id}>
            <div className="bg-[#009FDF] text-white p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold">{pillar.title}</h2>
            </div>
            <div className="bg-[#005398] text-white p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-6">Goal: <span className="font-normal">{pillar.goal}</span></h3>
            </div>
            <div className="overflow-x-auto shadow-md rounded-b-lg">
                <table className="min-w-full bg-white border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#005398] border-b">Strategic Focus</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#005398] border-b">Key Actions</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#005398] border-b">Performance Indicators (KPIs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pillar.strategicFocusAreas.map((area, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-4 px-4 font-semibold border-b w-1/4">{area.focus}</td>
                                <td className="py-4 px-4 border-b w-2/4">{area.actions}</td>
                                <td className="py-4 px-4 border-b w-1/4">{area.kpis}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoalsSection;