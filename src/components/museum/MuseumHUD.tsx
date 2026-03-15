import { Home, Volume2, VolumeX, Info } from 'lucide-react';

interface MuseumHUDProps {
  onExit: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  showHelp: boolean;
  onToggleHelp: () => void;
}

const MuseumHUD = ({ onExit, isMuted, onToggleMute, showHelp, onToggleHelp }: MuseumHUDProps) => {
  return (
    <>
      {/* Top-left nav */}
      <div className="fixed top-6 left-6 z-40 flex items-center gap-3">
        <button
          onClick={onExit}
          className="glass-panel rounded-full p-3 hover:bg-accent/20 transition-colors"
          title="Exit Museum"
        >
          <Home className="h-4 w-4 text-foreground" />
        </button>
        <button
          onClick={onToggleMute}
          className="glass-panel rounded-full p-3 hover:bg-accent/20 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-foreground" />
          ) : (
            <Volume2 className="h-4 w-4 text-foreground" />
          )}
        </button>
        <button
          onClick={onToggleHelp}
          className="glass-panel rounded-full p-3 hover:bg-accent/20 transition-colors"
          title="Controls"
        >
          <Info className="h-4 w-4 text-foreground" />
        </button>
      </div>

      {/* Center reticle */}
      <div className="fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-2 h-2 rounded-full border border-accent/60" />
      </div>

      {/* Help panel */}
      {showHelp && (
        <div className="fixed bottom-6 left-6 z-40 glass-panel rounded-lg p-5 max-w-xs fade-in">
          <h3 className="font-display text-sm font-semibold text-foreground mb-3">Controls</h3>
          <div className="space-y-2 font-body text-xs text-muted-foreground">
            <p><span className="text-foreground font-medium">W A S D</span> — Move</p>
            <p><span className="text-foreground font-medium">Mouse</span> — Look around</p>
            <p><span className="text-foreground font-medium">Click</span> — Interact with exhibits</p>
            <p><span className="text-foreground font-medium">VR Headset</span> — Immersive mode</p>
          </div>
        </div>
      )}

      {/* Museum name */}
      <div className="fixed top-6 right-6 z-40">
        <p className="font-display text-sm text-foreground/60 italic">The Grand Museum</p>
      </div>
    </>
  );
};

export default MuseumHUD;
