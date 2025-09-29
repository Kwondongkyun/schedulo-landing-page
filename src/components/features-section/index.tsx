import { Card } from "@/components/ui/card";
import { Calendar, Bot, BookOpen, Timer, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "개인 맞춤형 일정 관리",
    description:
      "드래그 앤 드롭으로 손쉽게 일정을 관리하고, 태그를 통해 주제별로 분류할 수 있습니다.",
  },
  {
    icon: Bot,
    title: "AI 에이전트 Dulo",
    description:
      "대화형 AI로 모든 기능을 자연스럽게 이용하고, 개인화된 학습 조언을 받아보세요.",
  },
  {
    icon: BookOpen,
    title: "학사 시스템 연동",
    description:
      "시간표와 과제를 자동으로 불러와 별도 입력 없이 바로 일정에 반영됩니다.",
  },
  {
    icon: Timer,
    title: "뽀모도로 타이머",
    description:
      "집중력 향상을 위한 시간 관리 도구로 학습 시간을 효율적으로 관리하세요.",
  },
  {
    icon: Bell,
    title: "스마트 알림",
    description: "중요한 과제와 시험을 놓치지 않도록 맞춤형 알림을 제공합니다.",
  },
  {
    icon: BarChart3,
    title: "학습 분석",
    description: "학습 패턴을 분석하여 더 효과적인 공부 방법을 제안합니다.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <p className="text-3xl lg:text-4xl font-bold text-balance">
            학습 전 과정을{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-primary via-blue-500 to-primary bg-300 bg-clip-text text-transparent">
              한 번에
            </span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            계획 수립부터 실행까지, 대학생 학습에 필요한 모든 기능을 하나의
            플랫폼에서 경험하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-primary transition-all duration-300" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg transition-colors duration-300">
                    {feature.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
