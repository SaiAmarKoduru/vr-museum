import { Exhibit } from '@/data/exhibits';
import { X } from 'lucide-react';

interface ExhibitPanelProps {
  exhibit: Exhibit | null;
  onClose: () => void;
}

const ExhibitPanel = ({ exhibit, onClose }: ExhibitPanelProps) => {
  if (!exhibit) return null;

  return (
    <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md p-6 slide-in-right">
      <div className="glass-panel h-full rounded-lg p-8 flex flex-col overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="self-end mb-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Exhibit type badge */}
        <span className="inline-block w-fit mb-4 px-3 py-1 text-xs font-body tracking-[0.2em] uppercase border border-accent/40 text-accent rounded-sm">
          {exhibit.type}
        </span>

        {/* Title */}
        <h2 className="font-display text-3xl font-bold text-foreground mb-1 leading-tight">
          {exhibit.title}
        </h2>

        {/* Artist & Year */}
        <p className="font-body text-sm text-muted-foreground mb-6">
          {exhibit.artist} · {exhibit.year}
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-accent mb-6" />

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">About</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {exhibit.description}
          </p>
        </div>

        {/* Historical Details */}
        <div className="mb-6">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">Historical Context</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {exhibit.history}
          </p>
        </div>

        {/* Details grid */}
        <div className="mt-auto pt-6 border-t border-border">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Medium</p>
              <p className="text-sm font-body text-foreground mt-1">
                {exhibit.type === 'sculpture' ? 'Mixed Media Sculpture' : 'Pigment on Panel'}
              </p>
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">Year</p>
              <p className="text-sm font-body text-foreground mt-1">{exhibit.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitPanel;
