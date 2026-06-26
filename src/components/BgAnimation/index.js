import React from 'react';
import './index.scss';

// size: px   left: %    dur: rise seconds   delay: start offset   drift: direction   type: tiny|sm|md|lg|xl
const BUBBLES = [
  // tiny specks
  { size: 3,  left: 3,  dur: 13, delay: 0,  drift: 'right', type: 'tiny' },
  { size: 4,  left: 16, dur: 11, delay: 5,  drift: 'left',  type: 'tiny' },
  { size: 3,  left: 34, dur: 14, delay: 9,  drift: 'right', type: 'tiny' },
  { size: 4,  left: 52, dur: 12, delay: 3,  drift: 'left',  type: 'tiny' },
  { size: 3,  left: 71, dur: 13, delay: 7,  drift: 'right', type: 'tiny' },
  { size: 4,  left: 88, dur: 11, delay: 11, drift: 'left',  type: 'tiny' },

  // small
  { size: 7,  left: 7,  dur: 18, delay: 4,  drift: 'left',  type: 'sm' },
  { size: 9,  left: 22, dur: 20, delay: 12, drift: 'right', type: 'sm' },
  { size: 6,  left: 41, dur: 17, delay: 1,  drift: 'left',  type: 'sm' },
  { size: 8,  left: 58, dur: 19, delay: 8,  drift: 'right', type: 'sm' },
  { size: 7,  left: 77, dur: 16, delay: 6,  drift: 'left',  type: 'sm' },
  { size: 9,  left: 93, dur: 21, delay: 14, drift: 'right', type: 'sm' },

  // medium
  { size: 14, left: 11, dur: 24, delay: 2,  drift: 'right', type: 'md' },
  { size: 18, left: 29, dur: 26, delay: 10, drift: 'left',  type: 'md' },
  { size: 12, left: 47, dur: 22, delay: 6,  drift: 'right', type: 'md' },
  { size: 16, left: 64, dur: 28, delay: 13, drift: 'left',  type: 'md' },
  { size: 13, left: 82, dur: 23, delay: 4,  drift: 'right', type: 'md' },

  // large
  { size: 36, left: 6,  dur: 34, delay: 3,  drift: 'left',  type: 'lg' },
  { size: 44, left: 25, dur: 38, delay: 15, drift: 'right', type: 'lg' },
  { size: 32, left: 55, dur: 32, delay: 7,  drift: 'left',  type: 'lg' },
  { size: 48, left: 75, dur: 40, delay: 1,  drift: 'right', type: 'lg' },

  // extra large — slow drifting giants
  { size: 65, left: 15, dur: 46, delay: 9,  drift: 'right', type: 'xl' },
  { size: 80, left: 40, dur: 50, delay: 20, drift: 'left',  type: 'xl' },
  { size: 70, left: 68, dur: 44, delay: 5,  drift: 'right', type: 'xl' },
  { size: 75, left: 88, dur: 48, delay: 17, drift: 'left',  type: 'xl' },
];

const BgAnimation = () => (
  <div className="bg-anim" aria-hidden="true">
    {BUBBLES.map((b, i) => (
      <span
        key={i}
        className={`bg-anim__bubble bg-anim__bubble--${b.drift} bg-anim__bubble--${b.type}`}
        style={{
          width:             b.size,
          height:            b.size,
          left:              `${b.left}%`,
          animationDuration: `${b.dur}s`,
          animationDelay:    `-${b.delay}s`,
        }}
      />
    ))}
  </div>
);

export default BgAnimation;
