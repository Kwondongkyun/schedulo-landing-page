import { ScheduloLogo } from "@/components/schedulo-logo";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <ScheduloLogo />
            <p className="text-sm text-muted-foreground max-w-xs">
              대학생을 위한 스마트한 일정 관리 서비스
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">주요 기능</p>
            <div className="space-y-3 text-sm">
              <div className="text-muted-foreground">
                • 개인 맞춤형 일정 관리
              </div>
              <div className="text-muted-foreground">• AI 에이전트 Dulo</div>
              <div className="text-muted-foreground">• 학사 시스템 연동</div>
              <div className="text-muted-foreground">• 뽀모도로 타이머</div>
              <div className="text-muted-foreground">• 스마트 알림 시스템</div>
            </div>
          </div>

          {/* GitHub Links */}
          <div className="space-y-4">
            <p className="font-semibold text-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              프로젝트 저장소
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="https://github.com/schedulo-project"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                📁 Schedulo Organization
              </a>
              <a
                href="https://github.com/schedulo-project/FE-SCHEDULO"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                🌐 Frontend Repository
              </a>
              <a
                href="https://github.com/schedulo-project/BE-SCHEDULO"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                ⚙️ Backend Repository
              </a>
              <a
                href="https://github.com/schedulo-project/ELECTRON-SCHEDULO"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                💻 Desktop App Repository
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-sm text-muted-foreground text-center">
            © 2025 Schedulo Team. 캡스톤 디자인 프로젝트로 개발되었습니다.
          </div>
        </div>
      </div>

      {/* Character Images - Fixed to bottom right of screen */}
      <div className="fixed bottom-4 right-4 flex items-center gap-2 z-50">
        <div className="relative group">
          <Image
            src="/characters/onesung1.png"
            alt="원숭이 1"
            width={25}
            height={25}
            className="rounded-full transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-lg bg-white/80 backdrop-blur-sm"
          />
        </div>
        <div className="relative group">
          <Image
            src="/characters/onesung2.png"
            alt="원숭이 2"
            width={25}
            height={25}
            className="rounded-full transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-lg bg-white/80 backdrop-blur-sm"
          />
        </div>
        <div className="relative group">
          <Image
            src="/characters/sasum.png"
            alt="사슴이"
            width={25}
            height={25}
            className="rounded-full transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-lg bg-white/80 backdrop-blur-sm"
          />
        </div>
      </div>
    </footer>
  );
}
