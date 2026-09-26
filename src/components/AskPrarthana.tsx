import { useEffect, useRef, useState } from "react";
import { Send, X, Sparkles } from "lucide-react";
import avatar from "@/assets/ai-avatar.png";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What did you build at GoSentrix?",
  "What roles are you looking for?",
  "What's your strongest AI project?",
  "What's your tech stack?",
];

import { localAnswer } from "@/lib/localAnswers";

const AskPrarthana = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);
    const answer = localAnswer(q);
    // type it out for a friendly feel
    let i = 0;
    const tick = () => {
      i += 3;
      setMessages([...next, { role: "assistant", content: answer.slice(0, i) }]);
      if (i < answer.length) setTimeout(tick, 15);
      else setLoading(false);
    };
    setTimeout(tick, 350);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Chat with AI Prarthana"
          className="fixed bottom-5 right-5 z-50 group flex items-end gap-2"
        >
          <span className="hidden sm:block mb-6 px-3 py-2 rounded-2xl rounded-br-sm glass-card text-sm font-medium text-foreground shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
            Hi! Ask me anything ✨
          </span>
          <img src={avatar} alt="" width={816} height={816} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full gradient-hero border-2 border-primary/40 shadow-lg object-cover object-top animate-bounce-gentle group-hover:scale-105 transition-transform" />
        </button>
      )}

      {open && (
        <div role="dialog" aria-label="Chat with AI Prarthana" className="fixed z-50 bottom-0 right-0 sm:bottom-5 sm:right-5 w-full sm:w-[380px] h-[85vh] sm:h-[560px] flex flex-col rounded-t-3xl sm:rounded-3xl bg-card border border-border shadow-2xl overflow-hidden animate-scale-in">
          <div className="flex items-center gap-3 px-4 py-3 gradient-hero border-b border-border/60">
            <img src={avatar} alt="" className="w-11 h-11 rounded-full bg-card object-cover object-top border border-primary/30" />
            <div className="flex-1">
              <p className="font-heading font-bold text-foreground leading-tight">Mini Prarthana</p>
              <p className="text-xs text-foreground/70 flex items-center gap-1"><Sparkles className="w-3 h-3" /> AI version · answers from my resume</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-2 rounded-full hover:bg-card/60 text-foreground/80">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-foreground/80 bg-lavender/60 rounded-2xl rounded-tl-sm px-3 py-2 w-fit max-w-[85%]">
                  Hi, I'm Prarthana's AI twin 👓 Ask me about my experience, projects, or what I'm looking for in 2027!
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-foreground/80 hover:bg-lavender transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`text-sm whitespace-pre-wrap px-3 py-2 max-w-[85%] rounded-2xl ${m.role === "user" ? "gradient-primary text-primary-foreground rounded-br-sm" : "bg-lavender/60 text-foreground rounded-tl-sm"}`}>
                  {m.content || <span className="inline-flex gap-1"><span className="animate-pulse">●</span><span className="animate-pulse [animation-delay:150ms]">●</span><span className="animate-pulse [animation-delay:300ms]">●</span></span>}
                </p>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about me…"
              maxLength={500}
              aria-label="Your question"
              className="flex-1 rounded-full px-4 py-2 text-sm bg-muted text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send" className="p-2.5 rounded-full gradient-primary text-primary-foreground disabled:opacity-50">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AskPrarthana;
