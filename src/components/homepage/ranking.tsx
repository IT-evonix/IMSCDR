"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  {
    id: 1,
    icon: "/images/home/ranking1.png",
    value: 6000,
    suffix: "+",
    title: "Students",
    alt: "BPHES IMSCDR",
  },
  {
    id: 2,
    icon: "/images/home/ranking2.png",
    value: "NAAC",
    title: "Re-Accredited",
    alt: "BPHES IMSCDR",
  },
  {
    id: 3,
    icon: "/images/home/ranking3.webp",
    value: 16,
    suffix: "+",
    title: "Awards",
    alt: "BPHES IMSCDR",
  },
  {
    id: 4,
    icon: "/images/home/ranking4.webp",
    value: 30,
    suffix: "+ Years",
    title: "Teaching Experience",
    alt: "BPHES IMSCDR",
  },
];

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}

const Counter = ({
  end,
  suffix = "",
  duration = 2000,
  start,
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <h3>
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
};

const Ranking = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect(); // Run only once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ranking_main" ref={sectionRef}>
      <div className="container">
        <div className="ranking_wrapper">
          {stats.map((item) => (
            <div className="ranking_card" key={item.id}>
              <div className="ranking_icon">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={50}
                  height={50}
                  className="img-fluid"
                />
              </div>

              <div className="ranking_content">
                {typeof item.value === "number" ? (
                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                    start={startCounter}
                  />
                ) : (
                  <h3>{item.value}</h3>
                )}

                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ranking;