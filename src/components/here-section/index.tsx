"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, BookOpen, Zap } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featureImages = [
    {
      src: "/images/hero/schedulo-feat1.svg",
      alt: "Schedulo 기능 1 - 일정 관리",
    },
    {
      src: "/images/hero/schedulo-feat2.svg",
      alt: "Schedulo 기능 2 - AI 에이전트",
    },
    {
      src: "/images/hero/schedulo-feat3.svg",
      alt: "Schedulo 기능 3 - 학사 시스템 연동",
    },
    {
      src: "/images/hero/schedulo-feat4.svg",
      alt: "Schedulo 기능 4 - 뽀모도로 타이머",
    },
    {
      src: "/images/hero/schedulo-feat5.svg",
      alt: "Schedulo 기능 5 - 스마트 알림",
    },
    {
      src: "/images/hero/schedulo-feat6.svg",
      alt: "Schedulo 기능 6 - 학습 분석",
    },
    {
      src: "/images/hero/schedulo-feat7.svg",
      alt: "Schedulo 기능 7 - 태그 관리",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featureImages.length);
    }, 5000); // 5초마다 슬라이드 변경

    return () => clearInterval(timer);
  }, [featureImages.length]);

  return (
    <section className="py-10 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in-up delay-100">
                <Zap className="w-4 h-4 animate-pulse" />
                스마트한 일정 관리 서비스
              </div>

              <p className="text-4xl lg:text-6xl font-bold text-balance leading-tight animate-fade-in-up delay-200">
                대학생을 위한
                <br />
                <span className="animate-gradient-x bg-gradient-to-r from-primary via-blue-500 to-primary bg-300 bg-clip-text text-transparent">
                  똑똑한 학습
                </span>
                <br />
                일정 관리
              </p>

              <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-lg animate-fade-in-up delay-300">
                학사 시스템 연동부터 AI 에이전트까지. 계획 수립부터 실행까지
                학습 전 과정을 한 번에 해결하는 통합 학습 관리 경험을
                만나보세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Button
                size="lg"
                variant="default"
                className="cursor-pointer"
                asChild
              >
                <Link href="https://www.schedulo.co.kr/">시작하기</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Feature Image Slider */}
          <div className="relative animate-fade-in-right delay-300">
            <div className="relative p-4 transition-all duration-300">
              {/* Current Image */}
              <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden rounded-lg">
                {featureImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Image Title */}
              <div className="mt-2 text-center relative h-8">
                {featureImages.map((image, index) => (
                  <p
                    key={index}
                    className={`absolute inset-0 text-lg font-semibold text-foreground transition-opacity duration-500 ease-in-out flex items-center justify-center ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  ></p>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? featureImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                aria-label="이전 슬라이드"
              >
                <svg
                  className="w-4 h-4 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % featureImages.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                aria-label="다음 슬라이드"
              >
                <svg
                  className="w-4 h-4 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
