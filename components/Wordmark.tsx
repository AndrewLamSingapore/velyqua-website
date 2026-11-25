export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-foam ${className}`}>
      <svg viewBox="0 0 1024 1024" className="h-7 w-7 shrink-0" role="img" aria-label="VELYQUA mark">
        <path d="M164 258h184l164 394 164-394h184L594 804H430Z" fill="currentColor" />
        <path d="M302 716c70-92 111-176 123-253 11-70 1-138-31-205h110c29 81 34 158 16 231-20 82-69 172-147 271Z" fill="#00BFC7" />
        <path d="M420 758c71-89 115-171 132-245 16-70 13-137-11-202h102c21 78 19 151-5 220-27 78-78 161-154 249Z" fill="#62DED9" />
        <circle cx="624" cy="212" r="52" fill="#A5E9E5" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[14px] font-semibold tracking-[0.24em]">VELYQUA</span>
        <span className="mt-0.5 font-mono text-[10px] tracking-[0.34em] text-cyan-glow/75">维澜</span>
      </span>
    </span>
  );
}
