import Image from "next/image";

export function ScheduloLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className="transform  transition-all duration-300 cursor-pointer">
      <Image
        src="/images/schedulo.svg"
        alt="Schedulo Logo"
        width={200}
        height={32}
        className={`${className} transition-all duration-300 hover:opacity-80`}
        priority
      />
    </div>
  );
}
