"use client";
import { Button } from "@/components/ui/button";
import { ScheduloLogo } from "@/components/schedulo-logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50 animate-slide-down">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Button
          variant="default"
          className="animate-fade-in-left bg-transparent hover:bg-transparent"
          onClick={() => router.push("/")}
        >
          <ScheduloLogo />
        </Button>

        <nav className="hidden md:flex items-center gap-8 animate-fade-in-up delay-200">
          <Link
            href="/introduce"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform"
          >
            소개
          </Link>
          <Link
            href="/tech-stack"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform"
          >
            기술스택
          </Link>
        </nav>

        <div className="flex items-center gap-3 animate-fade-in-right delay-300">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            asChild
          >
            <Link href="https://www.schedulo.co.kr/">시작하기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
