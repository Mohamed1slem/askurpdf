import React from 'react';
import { FileText, Sparkles, MessageSquare, Check, ArrowRight } from 'lucide-react';

export default function InteractiveMockup() {
  return (
    <div className="relative w-full max-w-[500px] h-[380px] sm:h-[450px] flex items-center justify-center select-none">
      {/* Background ambient glows */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[80px]" />
      
      {/* Decorative Grid SVG background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Styled connection SVG line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" fill="none">
        <path
          id="connect-path"
          d="M 120 180 Q 220 120, 320 200"
          stroke="url(#line-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="8 6"
          className="animate-[dash_15s_linear_infinite]"
        />
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Sparkle on connection line */}
      <div className="absolute top-[138px] left-[195px] w-6 h-6 bg-indigo-500/30 rounded-full blur-sm animate-[ping_2s_infinite] pointer-events-none z-15" />
      <div className="absolute top-[141px] left-[198px] text-indigo-300 animate-pulse pointer-events-none z-20">
        <Sparkles className="w-3 h-3 fill-indigo-300" />
      </div>

      {/* Document Card (PDF) */}
      <div className="absolute left-4 top-16 w-[190px] sm:w-[220px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-[float-slow_6s_ease-in-out_infinite]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <FileText className="w-4.5 h-4.5 text-red-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide truncate max-w-[100px]">
                annual_report.pdf
              </span>
              <span className="text-[9px] text-gray-400">4.8 MB</span>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-emerald-400" />
          </div>
        </div>

        {/* Mock content lines */}
        <div className="space-y-2 mt-2">
          <div className="w-full h-1.5 bg-white/15 rounded-full" />
          <div className="w-5/6 h-1.5 bg-white/10 rounded-full" />
          <div className="w-4/5 h-1.5 bg-white/10 rounded-full" />
          <div className="w-full h-1.5 bg-white/15 rounded-full" />
          <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
        </div>

        {/* Document highlights tag */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
            Q3 Highlights
          </span>
          <span className="text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300">
            Finance
          </span>
        </div>
      </div>

      {/* AI Chat Card */}
      <div className="absolute right-4 bottom-12 w-[210px] sm:w-[250px] bg-[#111218]/90 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-4 shadow-[0_20px_50px_rgba(99,102,241,0.15)] animate-[float-medium_7s_ease-in-out_1.5s_infinite]">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2.5 mb-2.5">
          <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-white fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
              AskYourPDF Assistant
            </span>
            <span className="text-[7.5px] sm:text-[8px] text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              AI Agent Active
            </span>
          </div>
        </div>

        {/* Chat message bubbles */}
        <div className="space-y-3.5">
          {/* User question */}
          <div className="flex flex-col items-end">
            <div className="bg-white/5 border border-white/10 rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[90%]">
              <p className="text-[9.5px] sm:text-[10px] text-gray-300 font-medium">
                Compare Q3 growth to Q2.
              </p>
            </div>
          </div>

          {/* AI answer */}
          <div className="flex flex-col items-start">
            <div className="bg-indigo-600/10 border border-indigo-500/25 rounded-xl rounded-tl-sm px-2.5 py-2 max-w-[95%]">
              <p className="text-[9.5px] sm:text-[10.5px] text-gray-200 leading-normal font-light">
                📈 Q3 revenue grew <span className="text-white font-bold">12.4%</span> vs Q2. Operating margins expanded by <span className="text-white font-bold">2.5%</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Small input mockup */}
        <div className="mt-3.5 flex items-center gap-1.5 bg-white/5 border border-white/5 rounded-lg px-2 py-1 text-[8px] sm:text-[9px] text-gray-500">
          <MessageSquare className="w-2.5 h-2.5 text-gray-400" />
          <span>Ask follow up question...</span>
          <ArrowRight className="w-2.5 h-2.5 ml-auto text-indigo-400" />
        </div>
      </div>

      {/* Styled JSX for the custom animation classes */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }
      `}</style>
    </div>
  );
}
