"use client";

import { useEffect, useState, useRef } from "react";

export function StatsSection() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedStats, setAnimatedStats] = useState([
    { number: 0, target: 98, suffix: "%" },
    { number: 0, target: 75, suffix: "%" },
    { number: 0, target: 90, suffix: "%" },
    { number: 0, target: 85, suffix: "%" },
  ]);

  const stats = [
    {
      label: "학습 효율 향상",
      description: "체계적인 일정 관리로",
    },
    {
      label: "시간 절약",
      description: "자동화된 일정 생성으로",
    },
    {
      label: "과제 완료율",
      description: "스마트 알림 시스템으로",
    },
    {
      label: "사용자 만족도",
      description: "직관적인 인터페이스로",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // 30%가 보이면 애니메이션 시작
        rootMargin: "0px 0px -100px 0px", // 조금 더 올라와야 시작
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isClient, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // 애니메이션 시작 전에 숫자를 0으로 리셋
    setAnimatedStats((prev) => prev.map((stat) => ({ ...stat, number: 0 })));

    const timers = animatedStats.map((stat, index) => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setAnimatedStats((prev) =>
          prev.map((s, i) =>
            i === index ? { ...s, number: Math.floor(current) } : s
          )
        );
      }, 50);
      return timer;
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={sectionRef} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <p className="text-3xl lg:text-4xl font-bold text-balance">
            검증된{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-primary via-blue-500 to-primary bg-300 bg-clip-text text-transparent">
              성과
            </span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            실제 사용자들이 경험한 Schedulo의 효과를 확인해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up transform hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary animate-pulse">
                {isClient ? animatedStats[index].number : 0}
                {animatedStats[index].suffix}
              </div>
              <div className="font-semibold text-lg">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
