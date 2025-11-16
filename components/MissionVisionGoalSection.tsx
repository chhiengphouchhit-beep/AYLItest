import React from 'react';
import { MissionVisionItem } from '../types';

const data: MissionVisionItem[] = [
  {
    title: 'Our Vision',
    text: (
        <>
            <p className="mb-4">To empower young leaders and educators who are globally competent, ethically grounded, and nationally committed.</p>
            <p className="mb-4">At AYLA, we believe in empowering Cambodia’s next generation to soar high and shine globally, while staying rooted in their culture, humility, and heart. Through quality education, digital innovation, and global collaboration, we inspire young leaders and educators to think boldly, act kindly, and create change that uplifts communities.</p>
            <p>In doing so, AYLA envisions itself as a hub of transformative learning, where global ideas meet local wisdom, and where every learner is inspired to fly high while staying grounded in who they are and where they come from.</p>
        </>
    ),
    bgColor: 'bg-white',
    textColor: 'text-[#005398]'
  },
  {
    title: 'Our Mission',
    text: (
        <>
            <p>AYLA exists to nurture capable, compassionate, and globally minded young leaders through quality education, professional excellence, and sustainable growth. We are committed to fostering a culture of respect, resilience, and innovation, where every learner and educator is guided by integrity, excellence, inclusiveness, collaboration, and responsibility.</p>
            <p className="mt-4">We integrate the Khmer National Curriculum with international standards, empowering teachers and leaders through continuous professional development and data-driven practices that promote creativity and lifelong learning. Through strong partnerships, modern systems, and meaningful community engagement, AYLA strives to deliver world-class education that prepares students to thrive academically, socially, and ethically in a rapidly changing world.</p>
            <p className="mt-4">Our mission is to ensure every learner, teacher, and campus across the AYLA–PSIS network grows with purpose, excellence, and integrity, advancing education that is soaring yet rooted in Cambodia and beyond.</p>
        </>
    ),
    bgColor: 'bg-[#005398]',
    textColor: 'text-white'
  }
];

const Card: React.FC<{ item: MissionVisionItem }> = ({ item }) => (
  <div className={`${item.bgColor} ${item.textColor} p-8 md:p-12 w-full`}>
    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
    <div className="text-lg md:text-xl">{item.text}</div>
  </div>
);

const MissionVisionGoalSection: React.FC = () => {
  return (
    <section id="mission-vision">
      {data.map((item, index) => (
        <div key={index} className="flex justify-center">
            <div className="max-w-7xl w-full">
                <Card item={item} />
            </div>
        </div>
      ))}
    </section>
  );
};

export default MissionVisionGoalSection;