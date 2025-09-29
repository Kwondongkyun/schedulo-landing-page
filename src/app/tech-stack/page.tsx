import { Card } from "@/components/ui/card";
import Image from "next/image";

const allTechStack = [
  // Frontend
  {
    category: "Core",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white",
      "https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white",
      "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
    ],
  },
  {
    category: "Styling",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white",
      "https://img.shields.io/badge/CSS Modules-000000?style=flat&logo=css3&logoColor=white",
    ],
  },
  {
    category: "State Management",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/React Query-FF4154?style=flat&logo=reactquery&logoColor=white",
      "https://img.shields.io/badge/Zustand-593D88?style=flat&logo=react&logoColor=white",
    ],
  },
  {
    category: "HTTP Client",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white",
    ],
  },
  {
    category: "Router",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/Next.js Router-000000?style=flat&logo=next.js&logoColor=white",
    ],
  },
  {
    category: "Forms",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/React Hook Form-EC5990?style=flat&logo=reacthookform&logoColor=white",
    ],
  },
  {
    category: "UI Components",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/Shadcn/ui-000000?style=flat&logo=react&logoColor=white",
      "https://img.shields.io/badge/Radix UI-161618?style=flat&logo=radixui&logoColor=white",
    ],
  },
  {
    category: "Calendar & Charts",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/FullCalendar-4285F4?style=flat&logo=google-calendar&logoColor=white",
      "https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white",
    ],
  },
  {
    category: "Drag & Drop",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/React DnD-000000?style=flat&logo=react&logoColor=white",
    ],
  },
  {
    category: "Backend Services",
    section: "Frontend",
    badges: [
      "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black",
      "https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white",
    ],
  },
  // Backend
  {
    category: "Framework",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
      "https://img.shields.io/badge/Django REST-092E20?style=flat&logo=django&logoColor=white",
    ],
  },
  {
    category: "Database",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white",
    ],
  },
  {
    category: "Task Queue",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/Celery-37B24D?style=flat&logo=celery&logoColor=white",
      "https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white",
    ],
  },
  {
    category: "Crawling",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/Selenium-43B02A?style=flat&logo=selenium&logoColor=white",
    ],
  },
  {
    category: "Notifications",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/FCM-FFCA28?style=flat&logo=firebase&logoColor=black",
    ],
  },
  {
    category: "Chatbot",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/Gemini AI-8E75B2?style=flat&logo=google&logoColor=white",
      "https://img.shields.io/badge/LangGraph-1C3C3C?style=flat&logo=python&logoColor=white",
    ],
  },
  {
    category: "Deployment",
    section: "Backend",
    badges: [
      "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",
      "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white",
      "https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white",
    ],
  },
  // Design
  {
    category: "디자인 도구",
    section: "Design",
    badges: [
      "https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white",
    ],
  },
];

export default function TechStack() {
  const frontendTechs = allTechStack.filter(
    (tech) => tech.section === "Frontend"
  );
  const backendTechs = allTechStack.filter(
    (tech) => tech.section === "Backend"
  );
  const designTechs = allTechStack.filter((tech) => tech.section === "Design");

  return (
    <div className="min-h-screen bg-background">
      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-3xl font-bold mb-4">기술 스택</p>
            <p className="text-muted-foreground">
              Schedulo 개발에 사용된 모든 기술들
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <p className="text-lg font-bold flex items-center gap-2">
                  프론트엔드
                </p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-semibold text-gray-900 pb-3 border-b">
                        분류
                      </th>
                      <th className="text-left text-sm font-semibold text-gray-900 pb-3 border-b">
                        기술
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {frontendTechs.map((tech, index) => (
                      <tr key={`frontend-${index}`}>
                        <td className="py-3 text-sm font-medium text-gray-700 align-top pr-4">
                          {tech.category}
                        </td>
                        <td className="py-3">
                          <div className="flex flex-wrap gap-1">
                            {tech.badges.map((badge, badgeIndex) => (
                              <Image
                                key={badgeIndex}
                                src={badge}
                                alt=""
                                width={80}
                                height={20}
                                className="h-5 w-auto"
                                unoptimized
                              />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <p className="text-lg font-bold flex items-center gap-2">
                  백엔드
                </p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-semibold text-gray-900 pb-3 border-b">
                        분류
                      </th>
                      <th className="text-left text-sm font-semibold text-gray-900 pb-3 border-b">
                        기술
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {backendTechs.map((tech, index) => (
                      <tr key={`backend-${index}`}>
                        <td className="py-3 text-sm font-medium text-gray-700 align-top pr-4">
                          {tech.category}
                        </td>
                        <td className="py-3">
                          <div className="flex flex-wrap gap-1">
                            {tech.badges.map((badge, badgeIndex) => (
                              <Image
                                key={badgeIndex}
                                src={badge}
                                alt=""
                                width={80}
                                height={20}
                                className="h-5 w-auto"
                                unoptimized
                              />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Design */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b">
                <p className="text-lg font-bold flex items-center gap-2">
                  디자인
                </p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-semibold text-gray-900 pb-3 border-b">
                        분류
                      </th>
                      <th className="text-left text-sm font-semibold text-gray-900 pb-3 border-b">
                        기술
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {designTechs.map((tech, index) => (
                      <tr key={`design-${index}`}>
                        <td className="py-3 text-sm font-medium text-gray-700 align-top pr-4">
                          {tech.category}
                        </td>
                        <td className="py-3">
                          <div className="flex flex-wrap gap-1">
                            {tech.badges.map((badge, badgeIndex) => (
                              <Image
                                key={badgeIndex}
                                src={badge}
                                alt=""
                                width={80}
                                height={20}
                                className="h-5 w-auto"
                                unoptimized
                              />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Image */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold mb-4">시스템 아키텍처</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Image
              src="/images/tech-architecture.png"
              alt="Schedulo 기술 아키텍처"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Development Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-3xl font-bold mb-12">프로젝트 정보</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-l-blue-500/30 hover:border-l-blue-500 transition-all duration-300">
              <div className="space-y-3">
                <p className="font-bold text-xl text-blue-600">개발 기간</p>
                <p className="text-muted-foreground font-medium">
                  2024년 9월 ~ 2025년 1월
                </p>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-purple-500/30 hover:border-l-purple-500 transition-all duration-300">
              <div className="space-y-3">
                <p className="font-bold text-xl text-purple-600">팀 구성</p>
                <p className="text-muted-foreground font-medium">
                  6명 (FE 3명, BE 2명, Design 1명)
                </p>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-indigo-500/30 hover:border-l-indigo-500 transition-all duration-300">
              <div className="space-y-3">
                <p className="font-bold text-xl text-indigo-600">
                  프로젝트 유형
                </p>
                <p className="text-muted-foreground font-medium">
                  캡스톤 디자인 프로젝트
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
