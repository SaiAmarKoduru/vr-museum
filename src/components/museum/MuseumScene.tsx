import { useEffect, useRef, useCallback } from 'react';
import { exhibits, Exhibit } from '@/data/exhibits';

// A-Frame must be imported before any scene usage
import 'aframe';

interface MuseumSceneProps {
  onExhibitClick: (exhibit: Exhibit) => void;
  isMuted: boolean;
}

const MuseumScene = ({ onExhibitClick, isMuted }: MuseumSceneProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handleExhibitInteraction = useCallback((exhibitId: string) => {
    const exhibit = exhibits.find(e => e.id === exhibitId);
    if (exhibit) {
      onExhibitClick(exhibit);
    }
  }, [onExhibitClick]);

  useEffect(() => {
    // Register click-handler component for A-Frame
    if (!(AFRAME as any).components['exhibit-click']) {
      AFRAME.registerComponent('exhibit-click', {
        schema: { exhibitId: { type: 'string' } },
        init: function () {
          this.el.addEventListener('click', () => {
            const id = this.data.exhibitId;
            window.dispatchEvent(new CustomEvent('exhibit-clicked', { detail: { id } }));
          });
          // Visual hover feedback
          this.el.addEventListener('mouseenter', () => {
            (this.el as any).setAttribute('material', 'emissiveIntensity', 0.3);
          });
          this.el.addEventListener('mouseleave', () => {
            (this.el as any).setAttribute('material', 'emissiveIntensity', 0);
          });
        }
      });
    }

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      handleExhibitInteraction(detail.id);
    };
    window.addEventListener('exhibit-clicked', handler);
    return () => window.removeEventListener('exhibit-clicked', handler);
  }, [handleExhibitInteraction]);

  const wallColor = '#F5F5F5';
  const floorColor = '#E2E2E2';
  const ceilingColor = '#FAFAFA';

  return (
    <div ref={sceneRef} className="fixed inset-0 z-10">
      {/* @ts-ignore - A-Frame JSX */}
      <a-scene
        embedded
        vr-mode-ui="enabled: true"
        cursor="rayOrigin: mouse; fuse: false"
        raycaster="objects: .clickable"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Assets */}
        {/* @ts-ignore */}
        <a-assets>
          {!isMuted && (
            // @ts-ignore
            <audio
              id="ambient-music"
              src="https://cdn.pixabay.com/audio/2022/02/23/audio_ea70ad08e0.mp3"
              autoPlay
              loop
              preload="auto"
            />
          )}
        </a-assets>

        {/* Camera with WASD + look controls */}
        {/* @ts-ignore */}
        <a-entity
          position="0 1.6 0"
          camera=""
          look-controls="pointerLockEnabled: true"
          wasd-controls="acceleration: 20"
        />

        {/* Ambient + directional lighting */}
        {/* @ts-ignore */}
        <a-light type="ambient" color="#FFF8F0" intensity="0.5" />
        {/* @ts-ignore */}
        <a-light type="directional" color="#FFF5E6" intensity="0.6" position="0 10 0" />
        {/* @ts-ignore */}
        <a-light type="point" color="#FFFAF0" intensity="0.4" position="-5 6 -15" />
        {/* @ts-ignore */}
        <a-light type="point" color="#FFFAF0" intensity="0.4" position="5 6 -25" />

        {/* ============ MAIN HALL ============ */}
        {/* Floor */}
        {/* @ts-ignore */}
        <a-plane
          rotation="-90 0 0"
          width="22"
          height="50"
          color={floorColor}
          material={`color: ${floorColor}; roughness: 0.6; metalness: 0.1`}
          position="0 0 -20"
        />

        {/* Ceiling */}
        {/* @ts-ignore */}
        <a-plane
          rotation="90 0 0"
          width="22"
          height="50"
          color={ceilingColor}
          position="0 8 -20"
        />

        {/* Left wall */}
        {/* @ts-ignore */}
        <a-plane
          rotation="0 90 0"
          width="50"
          height="8"
          color={wallColor}
          position="-10 4 -20"
          material={`color: ${wallColor}; roughness: 0.8`}
        />

        {/* Right wall */}
        {/* @ts-ignore */}
        <a-plane
          rotation="0 -90 0"
          width="50"
          height="8"
          color={wallColor}
          position="10 4 -20"
          material={`color: ${wallColor}; roughness: 0.8`}
        />

        {/* Back wall */}
        {/* @ts-ignore */}
        <a-plane
          width="22"
          height="8"
          color={wallColor}
          position="0 4 -45"
          material={`color: ${wallColor}; roughness: 0.8`}
        />

        {/* Front wall (behind camera) */}
        {/* @ts-ignore */}
        <a-plane
          rotation="0 180 0"
          width="22"
          height="8"
          color={wallColor}
          position="0 4 5"
          material={`color: ${wallColor}; roughness: 0.8`}
        />

        {/* ============ DECORATIVE ELEMENTS ============ */}
        {/* Baseboard molding - left */}
        {/* @ts-ignore */}
        <a-box
          width="0.15"
          height="0.3"
          depth="50"
          color="#E8E4DE"
          position="-9.93 0.15 -20"
        />
        {/* Baseboard molding - right */}
        {/* @ts-ignore */}
        <a-box
          width="0.15"
          height="0.3"
          depth="50"
          color="#E8E4DE"
          position="9.93 0.15 -20"
        />

        {/* Ceiling trim - left */}
        {/* @ts-ignore */}
        <a-box
          width="0.2"
          height="0.2"
          depth="50"
          color="#F0ECE6"
          position="-9.9 7.9 -20"
        />
        {/* Ceiling trim - right */}
        {/* @ts-ignore */}
        <a-box
          width="0.2"
          height="0.2"
          depth="50"
          color="#F0ECE6"
          position="9.9 7.9 -20"
        />

        {/* ============ COLUMNS ============ */}
        {[0, -10, -20, -30, -40].map((z) => (
          <a-entity key={`col-${z}`}>
            {/* @ts-ignore */}
            <a-cylinder
              radius="0.35"
              height="8"
              color="#F0ECE6"
              position={`-8 4 ${z}`}
              material="roughness: 0.7; metalness: 0"
            />
            {/* @ts-ignore */}
            <a-cylinder
              radius="0.35"
              height="8"
              color="#F0ECE6"
              position={`8 4 ${z}`}
              material="roughness: 0.7; metalness: 0"
            />
          </a-entity>
        ))}

        {/* ============ EXHIBITS ============ */}
        {exhibits.map((exhibit) => (
          <a-entity key={exhibit.id}>
            {/* Pedestal for sculptures */}
            {exhibit.type === 'sculpture' && (
              // @ts-ignore
              <a-box
                width="1.2"
                height="0.6"
                depth="1.2"
                color="#E8E4DE"
                position={`${exhibit.position.x} 0.3 ${exhibit.position.z}`}
                material="roughness: 0.5; metalness: 0.05"
              />
            )}

            {/* Exhibit object */}
            {/* @ts-ignore */}
            {exhibit.geometry === 'torus' && (
              // @ts-ignore
              <a-torus
                class="clickable"
                radius="0.8"
                radius-tubular="0.2"
                segments-radial="32"
                segments-tubular="48"
                position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
                rotation={`${exhibit.rotation.x} ${exhibit.rotation.y} ${exhibit.rotation.z}`}
                material={`color: ${exhibit.color}; roughness: 0.3; metalness: 0.6; emissive: ${exhibit.color}; emissiveIntensity: 0`}
                exhibit-click={`exhibitId: ${exhibit.id}`}
              />
            )}
            {exhibit.geometry === 'box' && (
              // @ts-ignore
              <a-box
                class="clickable"
                width={exhibit.scale.x}
                height={exhibit.scale.y}
                depth={exhibit.scale.z}
                position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
                rotation={`${exhibit.rotation.x} ${exhibit.rotation.y} ${exhibit.rotation.z}`}
                material={`color: ${exhibit.color}; roughness: 0.4; metalness: 0.3; emissive: ${exhibit.color}; emissiveIntensity: 0`}
                exhibit-click={`exhibitId: ${exhibit.id}`}
              />
            )}
            {exhibit.geometry === 'sphere' && (
              // @ts-ignore
              <a-sphere
                class="clickable"
                radius={exhibit.scale.x * 0.6}
                segments-width="64"
                segments-height="64"
                position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
                material={`color: ${exhibit.color}; roughness: 0.2; metalness: 0.7; emissive: ${exhibit.color}; emissiveIntensity: 0`}
                exhibit-click={`exhibitId: ${exhibit.id}`}
              />
            )}
            {exhibit.geometry === 'dodecahedron' && (
              // @ts-ignore
              <a-dodecahedron
                class="clickable"
                radius="0.9"
                position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
                rotation={`${exhibit.rotation.x} ${exhibit.rotation.y} ${exhibit.rotation.z}`}
                material={`color: ${exhibit.color}; roughness: 0.4; metalness: 0.4; emissive: ${exhibit.color}; emissiveIntensity: 0`}
                exhibit-click={`exhibitId: ${exhibit.id}`}
              />
            )}
            {exhibit.geometry === 'cylinder' && (
              // @ts-ignore
              <a-cylinder
                class="clickable"
                radius={exhibit.scale.x * 0.4}
                height={exhibit.scale.y * 1.5}
                position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
                material={`color: ${exhibit.color}; roughness: 0.3; metalness: 0.5; emissive: ${exhibit.color}; emissiveIntensity: 0`}
                exhibit-click={`exhibitId: ${exhibit.id}`}
              />
            )}
            {exhibit.geometry === 'cone' && (
              // @ts-ignore
              <a-cone
                class="clickable"
                radius-bottom={exhibit.scale.x * 0.6}
                radius-top="0"
                height={exhibit.scale.y}
                position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
                material={`color: ${exhibit.color}; roughness: 0.5; metalness: 0.2; emissive: ${exhibit.color}; emissiveIntensity: 0`}
                exhibit-click={`exhibitId: ${exhibit.id}`}
              />
            )}

            {/* Spot light on each exhibit */}
            {/* @ts-ignore */}
            <a-light
              type="spot"
              color="#FFF8F0"
              intensity="0.8"
              angle="35"
              penumbra="0.5"
              position={`${exhibit.position.x} 7 ${exhibit.position.z}`}
              target={`#light-target-${exhibit.id}`}
            />
            {/* @ts-ignore */}
            <a-entity
              id={`light-target-${exhibit.id}`}
              position={`${exhibit.position.x} ${exhibit.position.y} ${exhibit.position.z}`}
            />

            {/* Label */}
            {/* @ts-ignore */}
            <a-text
              value={exhibit.title}
              color="#1A1A1A"
              align="center"
              width="3"
              position={`${exhibit.position.x} 0.1 ${exhibit.position.z + (exhibit.type === 'painting' ? 0.5 : 1.5)}`}
              rotation="-90 0 0"
              font="mozillavr"
            />
          </a-entity>
        ))}

        {/* Sky background */}
        {/* @ts-ignore */}
        <a-sky color="#F0ECE6" />
      </a-scene>
    </div>
  );
};

export default MuseumScene;
