import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#009FDF] text-white p-6 md:p-10">
          <h3 className="text-3xl md:text-4xl font-bold">What is AYLA?</h3>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 space-y-6 text-lg">
            <p>
              AYLA is a comprehensive education and leadership institution/group that integrates academic excellence, professional development, and sustainable growth. Through its three strategic pillars: Academic Excellence and Curriculum Integration, People, Systems, and Professional Development, and Growth, Partnership, and Sustainability. AYLA prepares learners and educators to thrive in a rapidly changing world. Guided by the values of Respect, Resilience, and Innovation, AYLA champions integrity, inclusiveness, collaboration, and excellence in every aspect of its work.
            </p>
            <p>
              Australia Young Leaders Academy (AYLA) is a Cambodia-based education and leadership organization that operates across three major business domains:
            </p>
          </div>
          <div className="md:col-span-2">
            <img src="https://picsum.photos/seed/aylaleaders/800/600" alt="Young leaders in a collaborative environment" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src="https://picsum.photos/seed/franchise/400/250" alt="Students in a modern classroom" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h4 className="font-bold text-xl text-[#005398] mb-2">Education and School Franchising</h4>
                    <p>AYLA develops and manages AYLA Schools and provides franchise support to partner schools under the AYLA network. These schools deliver a blended curriculum that integrates the Khmer National Curriculum, the Western Australian Curriculum, and Chinese and enrichment programs, ensuring global competitiveness and local relevance.</p>
                </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src="https://picsum.photos/seed/mentoring/400/250" alt="Mentoring session in progress" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h4 className="font-bold text-xl text-[#005398] mb-2">Programs and Services</h4>
                    <p>AYLA offers specialized educational programs and services designed to enhance learning and professional growth, including: Mentoring and Leadership Programs, Mathematics, Khmer Literacy, Coding, and Digital Education, Academic Competitions and Student Enrichment Activities, Teacher Training, Head-Hunting, and Professional Development Services through AYLA’s Quality Teaching Academy (QTA).</p>
                </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src="https://picsum.photos/seed/innovation/400/250" alt="Students working with technology and robotics" className="w-full h-48 object-cover"/>
                <div className="p-6">
                    <h4 className="font-bold text-xl text-[#005398] mb-2">Innovation and Business Ventures</h4>
                    <p>To promote sustainability and innovation, AYLA invests in and develops education-related products and business opportunities, such as: Smart Class Technology, Educational Content and Apps, Campus and Office Solutions, and Consultancy and Partnership Projects in education, technology, and organizational development.</p>
                </div>
            </div>
        </div>
         <div className="mt-12 bg-[#F18821] text-white p-6 md:p-10 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">AYLA Three-Pillar Strategic Plan (Nov, 2025–2029)</h3>
            <p>These pillars are essential because they provide a clear structure for achieving AYLA’s vision. They ensure that academic quality is consistent, teachers and systems are strong and professional, and the institution grows sustainably through collaboration and innovation. Together, they create a balanced framework that supports excellence, equity, and long-term educational and business success.</p>
             <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
              <li>Pillar 1: Academic Excellence and Curriculum Integration (National, International, and Chinese), plus relevant extracurricular curricular.</li>
              <li>Pillar 2: People, Systems, and Professional Development</li>
              <li>Pillar 3: Growth, Partnership, and Sustainability</li>
            </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;