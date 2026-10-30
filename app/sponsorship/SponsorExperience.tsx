"use client";

import { useRef, useState, type PointerEvent } from "react";
import styles from "./sponsorship.module.css";

type PlacementId = "chest" | "arm" | "back" | "shorts";

const placements: Record<PlacementId, { name: string; detail: string; tier: string }> = {
  chest: {
    name: "Front chest",
    tier: "Lead placement",
    detail: "The clearest front-facing placement for race-day photographs and the campaign page.",
  },
  arm: {
    name: "Upper arm",
    tier: "Supporting placement",
    detail: "A compact mark designed to remain visible through movement and side-profile images.",
  },
  back: {
    name: "Upper back",
    tier: "Lead placement",
    detail: "A broad rear placement suited to running footage and movement through the race floor.",
  },
  shorts: {
    name: "Race shorts",
    tier: "Supporting placement",
    detail: "A subtle lower-body placement that appears across both training and race-day content.",
  },
};

function AthleteFront() {
  return (
    <svg viewBox="0 0 240 390" role="img" aria-label="Illustrated athlete viewed from the front">
      <ellipse cx="120" cy="372" rx="68" ry="10" fill="rgba(36, 46, 43, 0.11)" />
      <path d="M92 338c1-27 5-59 10-87h29l-4 87-12 29H99z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M148 338c-1-27-5-59-10-87h-29l4 87 12 29h16z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M96 330h19l1 34H94Z" fill="#303432" />
      <path d="M125 330h19l2 34h-22Z" fill="#303432" />
      <path d="M94 358h22l-2 14H78c3-7 8-11 16-14Z" fill="#f3f1ec" stroke="#303432" strokeWidth="2" />
      <path d="M146 358h-22l2 14h36c-3-7-8-11-16-14Z" fill="#f3f1ec" stroke="#303432" strokeWidth="2" />
      <path d="M81 369h34M125 369h34" fill="none" stroke="#303432" strokeWidth="3" strokeLinecap="round" />
      <path d="m91 361 9 7m0-9 9 7m40-5-9 7m0-9-9 7" fill="none" stroke="#989a96" strokeWidth="2" />
      <path d="M83 173c-13 24-20 58-21 91l14 3c7-29 16-55 28-75Z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M157 173c13 24 20 58 21 91l-14 3c-7-29-16-55-28-75Z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M60 260c-2 10-1 20 4 28 3 4 8 1 8-4l4-18Z" fill="#c9c6c0" stroke="#303432" strokeWidth="1.5" />
      <path d="M180 260c2 10 1 20-4 28-3 4-8 1-8-4l-4-18Z" fill="#c9c6c0" stroke="#303432" strokeWidth="1.5" />
      <path d="M86 156c8-10 20-15 34-15s26 5 34 15l6 67H80Z" fill="#eeece7" stroke="#303432" strokeWidth="1.7" />
      <path d="M96 217h48l11 51c-21 9-49 9-70 0Z" fill="#303432" />
      <path d="M104 140v-20h32v20c-8 8-24 8-32 0Z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M88 84c0-24 13-38 32-38s32 14 32 38v12c0 20-13 36-32 36S88 116 88 96Z" fill="#eeece7" stroke="#303432" strokeWidth="1.5" />
      <path d="M87 91c-4-27 8-45 32-47 3 8 1 15-5 22-7 8-16 12-27 14Z" fill="#242827" />
      <path d="M119 44c25 0 39 18 34 47-8-5-13-13-16-23-5 5-10 8-16 9 3-11 2-22-2-33Z" fill="#242827" />
      <path d="M118 47c2 4 3 9 2 14" fill="none" stroke="#d7d4cd" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M90 78c-2 9-1 18 3 25l3-27Z" fill="#242827" />
      <path d="M103 88c4-2 8-2 12 0M126 88c4-2 8-2 12 0M104 95c3 2 7 2 10 0M127 95c3 2 7 2 10 0" fill="none" stroke="#303432" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M120 95c-1 5-1 8 2 10" fill="none" stroke="#777a77" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M113 111c5 3 10 3 15 0" fill="none" stroke="#737572" strokeLinecap="round" strokeWidth="2" />
      <path d="M98 168c9-5 17-5 22 1 5-6 13-6 22-1M120 158v54M109 185h22M110 201h20" fill="none" stroke="#888b87" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="120" cy="208" r="1.7" fill="#777a77" />
      <path d="M84 184c7 7 12 9 18 9M156 184c-7 7-12 9-18 9" fill="none" stroke="#888b87" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M74 268c-3 2-5 7-4 12M166 268c3 2 5 7 4 12" fill="none" stroke="#6e716e" strokeLinecap="round" />
    </svg>
  );
}

function AthleteBack() {
  return (
    <svg viewBox="0 0 240 390" role="img" aria-label="Illustrated athlete viewed from the back">
      <ellipse cx="120" cy="372" rx="68" ry="10" fill="rgba(36, 46, 43, 0.11)" />
      <path d="M92 338c1-27 5-59 10-87h29l-4 87-12 29H99z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M148 338c-1-27-5-59-10-87h-29l4 87 12 29h16z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M96 330h19l1 34H94Z" fill="#303432" />
      <path d="M125 330h19l2 34h-22Z" fill="#303432" />
      <path d="M94 358h22l-2 14H78c3-7 8-11 16-14Z" fill="#f3f1ec" stroke="#303432" strokeWidth="2" />
      <path d="M146 358h-22l2 14h36c-3-7-8-11-16-14Z" fill="#f3f1ec" stroke="#303432" strokeWidth="2" />
      <path d="M81 369h34M125 369h34" fill="none" stroke="#303432" strokeWidth="3" strokeLinecap="round" />
      <path d="m91 361 9 7m0-9 9 7m40-5-9 7m0-9-9 7" fill="none" stroke="#989a96" strokeWidth="2" />
      <path d="M83 173c-13 24-20 58-21 91l14 3c7-29 16-55 28-75Z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M157 173c13 24 20 58 21 91l-14 3c-7-29-16-55-28-75Z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M60 260c-2 10-1 20 4 28 3 4 8 1 8-4l4-18Z" fill="#c9c6c0" stroke="#303432" strokeWidth="1.5" />
      <path d="M180 260c2 10 1 20-4 28-3 4-8 1-8-4l-4-18Z" fill="#c9c6c0" stroke="#303432" strokeWidth="1.5" />
      <path d="M86 156c8-10 20-15 34-15s26 5 34 15l6 67H80Z" fill="#eeece7" stroke="#303432" strokeWidth="1.7" />
      <path d="M96 217h48l11 51c-21 9-49 9-70 0Z" fill="#303432" />
      <path d="M104 140v-20h32v20c-8 8-24 8-32 0Z" fill="#d8d5cf" stroke="#303432" strokeWidth="1.5" />
      <path d="M88 84c0-24 13-38 32-38s32 14 32 38v12c0 20-13 36-32 36S88 116 88 96Z" fill="#eeece7" stroke="#303432" strokeWidth="1.5" />
      <path d="M87 91c-4-27 8-45 32-47 3 8 3 17 1 27v27c-12 0-24-3-33-7Z" fill="#242827" />
      <path d="M119 44c25 0 39 18 34 47-9 4-21 7-33 7V69c2-9 1-18-1-25Z" fill="#242827" />
      <path d="M118 47c2 4 3 9 2 14" fill="none" stroke="#d7d4cd" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M90 78c-2 9-1 18 3 25l3-27Z" fill="#242827" />
      <path d="M101 165c9 7 29 7 38 0M104 181c7 6 12 8 16 8s9-2 16-8M120 159v50" fill="none" stroke="#888b87" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SponsorExperience() {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState<PlacementId>("chest");
  const dragStart = useRef<{ x: number; rotation: number } | null>(null);
  const placement = placements[selected];

  function beginDrag(event: PointerEvent<HTMLDivElement>) {
    dragStart.current = { x: event.clientX, rotation };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    if (!dragStart.current) return;
    const nextRotation = dragStart.current.rotation + (event.clientX - dragStart.current.x) * 0.65;
    setRotation(((nextRotation % 360) + 360) % 360);
  }

  function endDrag() {
    dragStart.current = null;
  }

  function selectPlacement(id: PlacementId, showBack = false) {
    setSelected(id);
    setRotation(showBack ? 180 : 0);
  }

  return (
    <div className={styles.experience}>
      <div className={styles.modelPanel}>
        <div className={styles.modelTopline}>
          <span>athlete miniature · monochrome study</span>
          <span>{rotation > 90 && rotation < 270 ? "back" : "front"}</span>
        </div>

        <div
          className={styles.modelStage}
          onPointerDown={beginDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-label="Drag horizontally to rotate the illustrated athlete"
        >
          <div className={styles.modelOrbit} />
          <div className={styles.modelRotator} style={{ transform: `rotateY(${rotation}deg)` }}>
            <div className={styles.modelFace}>
              <AthleteFront />
              <button
                type="button"
                className={`${styles.hotspot} ${styles.hotspotChest} ${selected === "chest" ? styles.hotspotActive : ""}`}
                onClick={(event) => { event.stopPropagation(); selectPlacement("chest"); }}
                aria-label="Select front chest placement"
              ><span>01</span></button>
              <button
                type="button"
                className={`${styles.hotspot} ${styles.hotspotArm} ${selected === "arm" ? styles.hotspotActive : ""}`}
                onClick={(event) => { event.stopPropagation(); selectPlacement("arm"); }}
                aria-label="Select upper arm placement"
              ><span>02</span></button>
              <button
                type="button"
                className={`${styles.hotspot} ${styles.hotspotShorts} ${selected === "shorts" ? styles.hotspotActive : ""}`}
                onClick={(event) => { event.stopPropagation(); selectPlacement("shorts"); }}
                aria-label="Select race shorts placement"
              ><span>04</span></button>
            </div>
            <div className={`${styles.modelFace} ${styles.modelBack}`}>
              <AthleteBack />
              <button
                type="button"
                className={`${styles.hotspot} ${styles.hotspotBack} ${selected === "back" ? styles.hotspotActive : ""}`}
                onClick={(event) => { event.stopPropagation(); selectPlacement("back", true); }}
                aria-label="Select upper back placement"
              ><span>03</span></button>
            </div>
          </div>
          <p className={styles.dragHint}>drag to rotate</p>
        </div>

        <div className={styles.rotationControls}>
          <button type="button" onClick={() => setRotation((rotation + 315) % 360)} aria-label="Rotate left">←</button>
          <input
            aria-label="Athlete rotation"
            type="range"
            min="0"
            max="360"
            value={Math.round(rotation)}
            onChange={(event) => setRotation(Number(event.target.value))}
          />
          <button type="button" onClick={() => setRotation((rotation + 45) % 360)} aria-label="Rotate right">→</button>
        </div>
      </div>

      <aside className={styles.placementPanel} aria-live="polite">
        <div className={styles.available}><span /> available</div>
        <p className={styles.placementNumber}>placement {String(Object.keys(placements).indexOf(selected) + 1).padStart(2, "0")}</p>
        <h2>{placement.name}</h2>
        <p className={styles.tier}>{placement.tier}</p>
        <p className={styles.placementDetail}>{placement.detail}</p>
        <a
          href={`mailto:jiratnim@gmail.com?subject=${encodeURIComponent(`${placement.name} sponsorship · December 17 Vancouver`)}`}
        >
          ask about this placement <span aria-hidden="true">↗</span>
        </a>
        <div className={styles.placementIndex} aria-label="Choose a placement">
          {(Object.keys(placements) as PlacementId[]).map((id, index) => (
            <button
              key={id}
              type="button"
              className={selected === id ? styles.indexActive : ""}
              onClick={() => selectPlacement(id, id === "back")}
              aria-label={`Select ${placements[id].name}`}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
