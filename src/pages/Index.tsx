import { useState, useCallback } from 'react';
import LandingHero from '@/components/museum/LandingHero';
import MuseumScene from '@/components/museum/MuseumScene';
import MuseumHUD from '@/components/museum/MuseumHUD';
import ExhibitPanel from '@/components/museum/ExhibitPanel';
import { Exhibit } from '@/data/exhibits';

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showHelp, setShowHelp] = useState(true);

  const handleEnter = useCallback(() => {
    setEntered(true);
    // Auto-hide help after 5 seconds
    setTimeout(() => setShowHelp(false), 5000);
  }, []);

  const handleExhibitClick = useCallback((exhibit: Exhibit) => {
    setSelectedExhibit(exhibit);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedExhibit(null);
  }, []);

  if (!entered) {
    return <LandingHero onEnter={handleEnter} />;
  }

  return (
    <>
      <MuseumScene onExhibitClick={handleExhibitClick} isMuted={isMuted} />
      <MuseumHUD
        onExit={() => setEntered(false)}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        showHelp={showHelp}
        onToggleHelp={() => setShowHelp(!showHelp)}
      />
      <ExhibitPanel exhibit={selectedExhibit} onClose={handleClosePanel} />
    </>
  );
};

export default Index;
