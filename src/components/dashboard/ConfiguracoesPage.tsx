// ============================================
// DOLA AI — Executive Assistant
// Arquivo: src/components/dashboard/ConfiguracoesPage.tsx
// Fase: 6 — Inteligência Executiva Central
// ============================================

import React, { useState } from "react";
import { Settings, Volume2, ShieldAlert, Cpu, Eye, Check } from "lucide-react";
import { useToast } from "../ui/Toast";

export function ConfiguracoesPage() {
  const { toast } = useToast();
  const [notifyVolume, setNotifyVolume] = useState("MEDIUM");
  const [enableSound, setEnableSound] = useState(true);
  const [enableAI, setEnableAI] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  const handleSave = () => {
    toast("Configurações atualizadas com sucesso no ecossistema Dola AI.", "success");
  };

  const handleCompactDb = () => {
    toast("Otimização concluída: 0 bytes de lixo limpos. Banco em arquivo JSON compacto e otimizado.", "info");
  };

  return (
    <div className="space-y-8 select-none max-w-3xl mx-auto">
      {/* Header section */}
      <div>
        <h1 className="text-sm font-bold text-[#E6EDF3] flex items-center gap-2 font-display uppercase tracking-tight">
          <Settings className="text-indigo-400" size={16} /> Configurações de Sistema
        </h1>
        <p className="text-[10px] text-slate-400 mt-1">Personalize parâmetros de notificações síncronas, controle e compactação de banco local e IA.</p>
      </div>

      <div className="space-y-6 text-left">
        {/* Module Segment: Notifications and Sound */}
        <div className="p-5 bg-[#161B22]/30 border border-[#30363D] rounded-2xl space-y-4">
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-display flex items-center gap-2">
            <Volume2 className="text-indigo-400" size={14} /> Som & Notificações
          </h2>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-300">Volume dos Alertas Síncronos</h3>
                <p className="text-[10px] text-slate-500">Ajusta o nível dos bipes dos despertadores</p>
              </div>
              <select
                value={notifyVolume}
                onChange={(e) => setNotifyVolume(e.target.value)}
                className="bg-[#0B0F1A] border border-[#30363D] text-[11px] text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none"
              >
                <option value="LOW">Baixo (Mudo)</option>
                <option value="MEDIUM">Médio</option>
                <option value="HIGH">Alto</option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <h3 className="text-xs font-bold text-slate-300">Notificações por Som do Sistema</h3>
                <p className="text-[10px] text-slate-500">Ativa som nos despertadores e bipes dos hábitos</p>
              </div>
              <button
                type="button"
                onClick={() => setEnableSound(!enableSound)}
                className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
                  enableSound ? "bg-indigo-600" : "bg-slate-850"
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${enableSound ? "translate-x-4" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Module Segment: Cognition and AI Security */}
        <div className="p-5 bg-[#161B22]/30 border border-[#30363D] rounded-2xl space-y-4">
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-display flex items-center gap-2">
            <Cpu className="text-indigo-400" size={14} /> Cognição de Aprendizado Mútuo
          </h2>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-300">Integração do Motor Gemini</h3>
                <p className="text-[10px] text-slate-500">Permite ao assistente cruzar finanças e hábitos para gerar conselhos</p>
              </div>
              <button
                type="button"
                onClick={() => setEnableAI(!enableAI)}
                className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
                  enableAI ? "bg-indigo-600" : "bg-slate-850"
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${enableAI ? "translate-x-4" : ""}`} />
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <h3 className="text-xs font-bold text-slate-300">Modo de Privacidade Extrema</h3>
                <p className="text-[10px] text-slate-500">Oculta valores absolutos de dinheiro na tela principal em público</p>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyMode(!privacyMode)}
                className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
                  privacyMode ? "bg-indigo-600" : "bg-slate-850"
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${privacyMode ? "translate-x-4" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Module Segment: Database & Maintenance Operations */}
        <div className="p-5 bg-[#161B22]/30 border border-[#30363D] rounded-2xl space-y-4">
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-widest font-display flex items-center gap-2">
            <ShieldAlert className="text-amber-500" size={14} /> Manutenção & Backup
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
            <div>
              <h3 className="text-xs font-bold text-slate-300">Compactação do Banco JSON Coletor</h3>
              <p className="text-[10px] text-slate-500">Pesquisa registros lixo e limpa o banco interno offline para otimizar</p>
            </div>
            <button
              onClick={handleCompactDb}
              type="button"
              className="px-4 py-2 bg-[#0B0F1A] border border-[#30363D] hover:border-slate-500 text-slate-300 hover:text-white text-2xs font-semibold rounded-xl cursor-pointer transition-all"
            >
              Compactar Banco
            </button>
          </div>
        </div>

        {/* Action submit footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleSave}
            type="button"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl cursor-pointer transition-colors flex items-center gap-1.5"
          >
            <Check size={13} /> Sincronizar Tudo
          </button>
        </div>
      </div>
    </div>
  );
}
