import React from 'react';

const coreValues = ['Respect', 'Resilience', 'Innovation'];
const subCoreValues = ['Integrity', 'Resilience', 'Excellence', 'Inclusiveness', 'Innovation', 'Collaboration', 'Responsibility'];

const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#009FDF] text-white p-6 md:p-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold">OUR VALUES</h2>
        </div>
        <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-[#005398] mb-4">Core Values</h3>
            <div className="flex justify-center gap-4 flex-wrap">
                {coreValues.map((value, index) => (
                    <div key={index} className="bg-gray-100 text-[#005398] font-semibold py-3 px-6 rounded-full text-lg">
                        {value}
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-[#005398] mb-4">Sub-Core Values</h3>
            <div className="flex justify-center gap-4 flex-wrap">
                {subCoreValues.map((value, index) => (
                    <div key={index} className="bg-gray-100 text-[#005398] font-semibold py-3 px-6 rounded-lg text-lg">
                        {value}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;