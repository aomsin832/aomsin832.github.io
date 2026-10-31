"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import styles from "./sponsorship.module.css";

type PlacementId = "chest" | "leftArm" | "rightArm" | "leg";

const placements: Record<PlacementId, { name: string; detail: string; tier: string }> = {
  chest: {
    name: "Front chest",
    tier: "Lead placement",
    detail: "The clearest front-facing placement for race-day photographs and the campaign page.",
  },
  leftArm: {
    name: "Left upper arm",
    tier: "Supporting placement",
    detail: "A compact temporary tattoo designed for side-profile movement and race-day images.",
  },
  rightArm: {
    name: "Right upper arm",
    tier: "Supporting placement",
    detail: "A second side-profile placement with clear visibility through carries and wall balls.",
  },
  leg: {
    name: "Thigh placement",
    tier: "Lead placement",
    detail: "A larger temporary tattoo placement built for running footage and full-body photographs.",
  },
};

const viewLabels = [
  "front",
  "front right",
  "right profile",
  "back right",
  "back",
  "back left",
  "left profile",
  "front left",
];

const spritePositions = [0, 100 / 7, 200 / 7, 300 / 7, 400 / 7, 500 / 7, 87.5, 100];

const placementRotation: Record<PlacementId, number> = {
  chest: 0,
  leftArm: 315,
  rightArm: 45,
  leg: 0,
};

export default function SponsorExperience() {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState<PlacementId>("chest");
  const dragStart = useRef<{ x: number; rotation: number } | null>(null);
  const placement = placements[selected];
  const frame = Math.round(rotation / 45) % 8;
  const isBackView = frame >= 3 && frame <= 5;
  const isFrontView = frame === 0 || frame === 1 || frame === 7;
  const spritePosition = `${spritePositions[frame]}% 50%`;

  function normalizeRotation(value: number) {
    return ((value % 360) + 360) % 360;
  }

  function beginDrag(event: PointerEvent<HTMLDivElement>) {
    dragStart.current = { x: event.clientX, rotation };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    if (!dragStart.current) return;
    setRotation(normalizeRotation(dragStart.current.rotation + (event.clientX - dragStart.current.x) * 0.8));
  }

  function endDrag() {
    dragStart.current = null;
  }

  function selectPlacement(id: PlacementId) {
    setSelected(id);
    setRotation(placementRotation[id]);
  }

  function hotspotClass(id: PlacementId) {
    return `${styles.hotspot} ${selected === id ? styles.hotspotActive : ""}`;
  }

  const spriteStyle = {
    backgroundPosition: spritePosition,
  } as CSSProperties;

  return (
    <div className={styles.experience}>
      <div className={styles.modelPanel}>
        <div className={styles.modelTopline}>
          <span>graphite athlete study · 8 views</span>
          <span>{viewLabels[frame]}</span>
        </div>

        <div
          className={styles.modelStage}
          onPointerDown={beginDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-label="Drag horizontally to rotate the pencil-rendered athlete"
        >
          <div
            className={`${styles.modelSprite} ${frame === 6 ? styles.leftProfile : ""}`}
            style={spriteStyle}
            role="img"
            aria-label={`Pencil-rendered athlete viewed from the ${viewLabels[frame]}`}
          >
            {isFrontView && (
              <button
                type="button"
                className={`${hotspotClass("chest")} ${styles.hotspotChest}`}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => selectPlacement("chest")}
                aria-label="Select front chest placement"
              ><span>01</span></button>
            )}

            {!isBackView && frame !== 6 && (
              <button
                type="button"
                className={`${hotspotClass("rightArm")} ${styles.hotspotArm}`}
                style={{ left: "28%" }}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => selectPlacement("rightArm")}
                aria-label="Select right upper arm placement"
              ><span>02</span></button>
            )}

            {!isBackView && frame !== 2 && (
              <button
                type="button"
                className={`${hotspotClass("leftArm")} ${styles.hotspotArm}`}
                style={{ left: "72%" }}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => selectPlacement("leftArm")}
                aria-label="Select left upper arm placement"
              ><span>03</span></button>
            )}

            {!isBackView && (
              <button
                type="button"
                className={`${hotspotClass("leg")} ${styles.hotspotShorts}`}
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => selectPlacement("leg")}
                aria-label="Select thigh placement"
              ><span>04</span></button>
            )}
          </div>
          <p className={styles.dragHint}>drag or use the arrows to change view</p>
        </div>

        <div className={styles.rotationControls}>
          <button
            type="button"
            onClick={() => setRotation(normalizeRotation(rotation - 45))}
            aria-label="Rotate left"
          >←</button>
          <input
            aria-label="Athlete rotation"
            type="range"
            min="0"
            max="315"
            step="45"
            value={frame * 45}
            onChange={(event) => setRotation(Number(event.target.value))}
          />
          <button
            type="button"
            onClick={() => setRotation(normalizeRotation(rotation + 45))}
            aria-label="Rotate right"
          >→</button>
        </div>
      </div>

      <aside className={styles.placementPanel} aria-live="polite">
        <div className={styles.available}><span /> available</div>
        <div className={styles.logoCallout}>
          <span>your company logo</span>
          <strong>could be here.</strong>
        </div>
        <p className={styles.placementNumber}>
          placement {String(Object.keys(placements).indexOf(selected) + 1).padStart(2, "0")}
        </p>
        <h2>{placement.name}</h2>
        <p className={styles.tier}>{placement.tier}</p>
        <p className={styles.placementDetail}>{placement.detail}</p>
        <a
          href={`mailto:jiratnim@gmail.com?subject=${encodeURIComponent(`${placement.name} sponsorship · December 17 Vancouver`)}`}
        >
          ask about this placement <span aria-hidden="true">↗︎</span>
        </a>
        <div className={styles.placementIndex} aria-label="Choose a placement">
          {(Object.keys(placements) as PlacementId[]).map((id, index) => (
            <button
              key={id}
              type="button"
              className={selected === id ? styles.indexActive : ""}
              onClick={() => selectPlacement(id)}
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
