import React from "react";
import { LogOut, ShieldCheck } from "lucide-react";
import { useAuth } from "@/src/hooks/useAuth";
import { User } from "@/src/types";

export function Sidebar({ currentTab, setCurrentTab }: { currentTab: string, setCurrentTab: (tab: string) => void }) {
  const { user, logout } = useAuth();

  if (!user) return null;

  // Navegação dinâmica com base no papel do usuário
  const navigationItems = [
    // — PRODUTIVIDADE
    { icon: "🏠", label: "Dashboard", href: "/dashboard" },
    { icon: "📅", label: "Agenda", href: "/agenda" }, 
    { icon: "✅", label: "Tarefas", href: "/tarefas" }, 
    { icon: "📝", label: "Notas", href: "/notas" }, 
    { icon: "⏰", label: "Alarmes", href: "/alarmes" }, 
    { icon: "🔄", label: "Hábitos", href: "/habitos" }, 
    { icon: "🎯", label: "Roleta Inteligente", href: "/roleta" },
    { icon: "👨‍👩‍👧", label: "Família", href: "/familia" },
    { icon: "💬", label: "WhatsApp Bot", href: "/whatsapp", badge: "Grátis", badgeColor: "#25D366" },
    
    // — FINANCEIRO (separador visual)
    { separator: true, label: "Financeiro" },
    { icon: "💰", label: "Financeiro", href: "/financeiro" },
    { icon: "📈", label: "Investimentos", href: "/investimentos" },
    { icon: "🏦", label: "Empréstimos", href: "/emprestimos" },
    
    // — ANÁLISE (separador visual)
    { separator: true, label: "Análise" },
    { icon: "📊", label: "Relatórios", href: "/relatorios" },
    { icon: "🛡️", label: "Auditoria", href: "/auditoria", badge: "Sec", badgeColor: "#A55EEA" },
    { icon: "🤖", label: "Assistente IA", href: "/assistente", badge: "Live", badgeColor: "#20BF6B" },
    
    // — CONTA (separador visual)
    { separator: true, label: "Conta" },
    { icon: "👤", label: "Perfil", href: "/perfil" },
    { icon: "⚙️", label: "Configurações", href: "/configuracoes" },

    // — GERENCIAMENTO ADM (Fase 2)
    ...(user.role === "SUPERADMIN" ? [
      { separator: true, label: "Administração" },
      { icon: "👥", label: "Usuários", href: "/usuarios" }
    ] : [])
  ];

  return (
    <aside className="w-64 bg-[#161B22]/95 backdrop-blur-md border-r border-[#30363D] h-screen flex flex-col justify-between fixed top-0 left-0 z-20 select-none pb-4 font-sans">
      {/* Header Info */}
      <div className="flex flex-col">
        <div className="p-5 flex items-center gap-3 border-b border-[#30363D]">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 italic">
            Ω
          </div>
          <div>
            <h1 className="text-sm font-semibold font-display text-[#E6EDF3] tracking-tight">DOLA <span className="text-slate-500 font-normal">AI</span></h1>
            <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Executive Platform</p>
          </div>
        </div>
 
        {/* User Card */}
        <div className="mx-4 my-4 p-3 bg-[#0B0F1A]/50 rounded-xl border border-[#30363D] flex items-center gap-3">
          <div className="relative">
            <img
              src={user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"}
              alt={user.name}
              className="w-9 h-9 rounded-full border border-[#30363D]"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#161B22] rounded-full" />
          </div>
          <div className="flex-1 overflow-hidden">
            <h2 className="text-xs font-semibold text-[#E6EDF3] truncate leading-tight">{user.name}</h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <ShieldCheck size={10} className="text-indigo-400" />
              <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider">{user.role}</p>
            </div>
          </div>
        </div>
 
        {/* Scrollable Nav list */}
        <nav className="flex-1 overflow-y-auto max-h-[60vh] px-2 space-y-0.5">
          {navigationItems.map((item, index) => {
            if (item.separator) {
              return (
                <div key={index} className="px-3 pt-4 pb-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">
                    {item.label}
                  </span>
                </div>
              );
            }
 
            const isSelected = currentTab === item.href;
 
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentTab(item.href || "/dashboard");
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer text-left ${
                  isSelected
                    ? "bg-indigo-600/15 text-indigo-400 border border-indigo-500/20"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-[#E6EDF3]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm opacity-90">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
 
                {item.badge && (
                  <span
                    className="px-1.5 py-0.5 rounded text-[8px] font-bold leading-none select-none uppercase tracking-wider"
                    style={{
                      background: `${(item as any).badgeColor || "rgba(255, 255, 255, 0.04)"}`,
                      color: (item as any).badgeColor ? "#fff" : "#ff5252"
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
 
      {/* Log out Footer */}
      <div className="px-4 pt-3 border-t border-[#30363D]">
        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
        >
          <LogOut size={14} />
          Sair da Conta
        </button>
      </div>
    </aside>
  );
}
