"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 7,
    text: "Tools & Technologies",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp
                  end={item.num}
                  duration={3}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length < 40 ? "max-w-[200px]" : "max-w-[250px]"} leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
