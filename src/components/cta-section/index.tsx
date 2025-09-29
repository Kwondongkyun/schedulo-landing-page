import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 text-center transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl animate-fade-in-up">
          <div className="space-y-6">
            <p className="text-3xl lg:text-4xl font-bold text-balance animate-fade-in-up delay-200">
              지금 바로{" "}
              <span className="animate-gradient-x bg-gradient-to-r from-primary via-blue-500 to-primary bg-300 bg-clip-text text-transparent">
                Schedulo
              </span>
              와 함께
              <br />
              스마트한 학습을 시작하세요
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up delay-300">
              무료로 시작하여 학습 효율을 높이고, 체계적인 일정 관리의 힘을
              경험해보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse cursor-pointer"
                asChild
              >
                <Link href="https://www.schedulo.co.kr/">시작하기</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
