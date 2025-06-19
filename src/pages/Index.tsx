
import { useState } from "react";
import { Github, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("pip install slopsquat-detector");
      setCopied(true);
      toast.success("Command copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy command");
    }
  };

  const handleGithubClick = () => {
    window.open("https://github.com/prashantpandeygit/slopsquat", "_blank");
  };

  const handleDocsClick = () => {
    window.open("https://pypi.org/project/slopsquat-detector/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 relative overflow-hidden font-inter">
      {}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.3)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.4)_0%,transparent_50%)] opacity-40" />
      
      {}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
          }}
        />
      </div>
      
      {}
      <div className="relative z-10 flex items-center justify-between px-6 py-6">
        <button
          onClick={handleDocsClick}
          className="group opacity-0 animate-reveal-down text-white text-sm font-semibold flex items-center gap-2"
        >
          Visit package at PyPI →
        </button>

        <button
          onClick={handleGithubClick}
          className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 opacity-0 animate-reveal-down"
        >
          <Github 
            size={28} 
            className="text-white group-hover:animate-github-spin transition-transform duration-300" 
          />
        </button>
      </div>

      {}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center" style={{ marginTop: '5vh' }}>
        {}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight opacity-0 animate-reveal-down">
            An open source tool detecting
            <br />
             Slopsquatting imports
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal-down-delay-1">
          Flags hallucinated imports from LLMs, typos, and suspicious sources to prevent slopsquatting and protect against malicious packages.
          </p>
        </div>

        {}
        <div className="max-w-md mx-auto opacity-0 animate-reveal-down-delay-2">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden shadow-2xl animate-terminal-glow hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/60 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">Terminal</span>
            </div>
            <div className="flex items-center justify-between px-4 py-4 bg-gray-900/90">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono text-sm">$</span>
                <span className="text-white font-mono text-sm">pip install slopsquat-detector</span>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-all duration-200"
                title="Copy command"
              >
                {copied ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
