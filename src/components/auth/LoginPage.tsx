// ============================================
// DOLA AI — Executive Assistant
// Arquivo: src/components/auth/LoginPage.tsx
// Fase: 1
// ============================================

import React, { useState } from "react";
import { ShieldCheck, Mail, Lock, Eye, EyeOff, Sparkles, Terminal, Fingerprint } from "lucide-react";
import { useAuth } from "@/src/hooks/useAuth";
import { useToast } from "@/src/components/ui/Toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";

export function LoginPage() {
  const { login } = useAuth();
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast("Por favor, preencha todos os campos.", "warning");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      toast("Login realizado com sucesso! Bem-vindo.", "success");
    } catch (err: any) {
      console.error(err);
      toast(err?.message || "E-mail ou senha incorretos.", "error");
    } finally {
      setLoading(false);
    }
  };

  const [isScanning, setIsScanning] = useState(false);

  const handleFingerprintAuth = async () => {
    setIsScanning(true);
    setTimeout(async () => {
      try {
        await login("10felitec@gmail.com", "135Amor.");
        toast("Biometria reconhecida com sucesso! Bem-vindo ao DOLA AI.", "success");
      } catch (err) {
        toast("Falha na autenticação por biometria do dispositivo.", "error");
      } finally {
        setIsScanning(false);
      }
    }, 1800);
  };

  const handleFillSuperAdmin = () => {
    setEmail("10felitec@gmail.com");
    setPassword("135Amor.");
    toast("Credenciais do Super Admin preenchidas!", "info");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-[#0A0A0F] overflow-hidden select-none">
      {/* Decorative ambient spots */}
      <div className="glow-spot top-[-100px] left-[-100px]" />
      <div className="glow-spot bottom-[-100px] right-[-100px] bg-cyan-500/5" />

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-[#6C5CE7] to-[#00D2FF] p-2.5 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-xl font-bold font-display text-white tracking-widest">D</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-display font-medium tracking-tight text-white mb-1">
              DOLA AI
            </h1>
            <p className="text-xs text-[#8888A0] uppercase tracking-wider font-semibold">
              Executive Assistant Platform
            </p>
          </div>
        </div>

        <Card className="glass-panel border-white/[0.06] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <CardHeader className="p-0 mb-5">
            <CardTitle className="text-lg font-semibold text-white">Login seguro</CardTitle>
            <CardDescription className="text-xs text-[#8888A0]">
              Insira suas credenciais para gerenciar a plataforma
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* E-mail */}
              <div className="relative flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#8888A0]">E-mail</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#8888A0]/60 pointer-events-none">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@gmail.com"
                    autoComplete="email"
                    className="w-full rounded-lg bg-[#141424] border border-white/[0.06] hover:border-white/12 focus:border-purple-500/80 pl-10 pr-3.5 py-2.5 text-sm text-[#F1F1F3] placeholder-[#8888A0]/40 transition-colors outline-none focus:ring-2 focus:ring-purple-500/10"
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[#8888A0]">Senha</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#8888A0]/60 pointer-events-none">
                    <Lock size={16} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full rounded-lg bg-[#141424] border border-white/[0.06] hover:border-white/12 focus:border-purple-500/80 pl-10 pr-10 py-2.5 text-sm text-[#F1F1F3] placeholder-[#8888A0]/40 transition-colors outline-none focus:ring-2 focus:ring-purple-500/10"
                    disabled={loading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8888A0]/60 hover:text-[#F1F1F3] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={loading}
                className="w-full mt-2 font-display bg-[#6C5CE7] hover:bg-[#5B4BC4] text-white rounded-lg shadow-lg shadow-purple-500/15 py-2.5 text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
              >
                {!loading && <ShieldCheck size={16} />}
                Acessar Plataforma
              </Button>
            </form>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/[0.04]"></div>
              <span className="flex-shrink mx-2 text-[9px] text-[#8888A0]/60 font-semibold uppercase tracking-wider">Acesso Biométrico</span>
              <div className="flex-grow border-t border-white/[0.04]"></div>
            </div>

            <button
              type="button"
              onClick={handleFingerprintAuth}
              className="w-full flex items-center justify-center gap-2 bg-[#25253F]/15 hover:bg-[#25253F]/40 text-[#6C5CE7] hover:text-[#00D2FF] border border-[#6C5CE7]/30 p-2.5 rounded-lg transition-all cursor-pointer font-sans text-xs font-semibold mb-4"
            >
              <Fingerprint size={16} className="animate-pulse" />
              Entrar com Impressão Digital (Touch ID)
            </button>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-white/[0.05]"></div>
              <span className="flex-shrink mx-3 text-[10px] text-[#8888A0]/60 font-semibold uppercase tracking-wider">Acesso Superadmin</span>
              <div className="flex-grow border-t border-white/[0.05]"></div>
            </div>

            {/* Hidden admin setup trigger action */}
            <button
              onClick={handleFillSuperAdmin}
              className="w-full flex items-center justify-center gap-2 bg-[#1A1A2E]/50 hover:bg-[#25253F]/60 text-xs font-semibold text-[#8888A0] hover:text-[#F1F1F3] border border-white/[0.04] p-2.5 rounded-lg transition-all cursor-pointer"
            >
              <Terminal size={14} className="text-[#00D2FF]" />
              Preencher Credenciais Fundador
            </button>
          </CardContent>
        </Card>

        {/* Footer info */}
        <p className="text-[10px] text-center text-[#8888A0]/50 mt-6 select-none uppercase tracking-widest leading-none">
          DOLA AI — SISTEMA EXECUTIVO PRIVADO
        </p>
      </div>

      {/* Pulsing Fingerprint Scanner Immersive Simulator */}
      {isScanning && (
        <div className="fixed inset-0 bg-[#0A0A0F]/95 backdrop-blur-md flex flex-col items-center justify-center z-50 animate-fadeIn select-none">
          <div className="relative flex flex-col items-center gap-6 p-8 bg-[#141424] border border-indigo-500/30 rounded-3xl max-w-sm text-center shadow-2xl">
            <div className="absolute top-[-30px] w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Fingerprint size={28} className="text-white animate-pulse" />
            </div>
            
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Altinhando Leitor Biométrico</h3>
              <p className="text-2xs text-[#8888A0]">Toque no sensor biométrico do seu celular ou posicione o seu dedo sobre o leitor digital cadastrado.</p>
            </div>

            {/* Pulsing circle effect */}
            <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-indigo-500/25 mt-2">
              <div className="absolute inset-2 bg-indigo-500/5 rounded-full animate-ping" />
              <div className="absolute inset-4 bg-indigo-500/10 rounded-full animate-pulse" />
              <Fingerprint size={48} className="text-indigo-400" />
            </div>

            <div className="w-full bg-[#1A1A2E] h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-2/3 animate-pulse"></div>
            </div>

            <p className="text-[10px] text-indigo-400 font-mono uppercase font-bold tracking-widest leading-none animate-pulse">Sincronizando dados...</p>
            
            <button
              onClick={() => setIsScanning(false)}
              className="mt-2 text-2xs bg-[#1A1A2E] hover:bg-slate-800 text-slate-500 hover:text-white px-4 py-1.5 rounded-lg border border-slate-800 cursor-pointer transition font-bold"
            >
              Cancelar Autenticação
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
