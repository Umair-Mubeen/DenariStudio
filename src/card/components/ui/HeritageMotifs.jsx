/**
 * Heritage SVG Motifs Library
 * Reusable Pakistani cultural patterns and decorative elements
 */

export function AjrakPattern({ color = "#c41e3a", opacity = 0.08, size = 60 }) {
  return (
    <svg width="100%" height="100%" style={{ position:"absolute", inset:0, pointerEvents:"none", opacity }} aria-hidden="true">
      <defs>
        <pattern id="ajrak-pattern" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          {/* Classic Ajrak geometric block */}
          <rect width={size} height={size} fill="none" />
          <circle cx={size/2} cy={size/2} r={size/6} fill="none" stroke={color} strokeWidth="1.2"/>
          <circle cx={size/2} cy={size/2} r={size/3} fill="none" stroke={color} strokeWidth="0.8"/>
          <path d={`M${size/2},2 L${size-2},${size/2} L${size/2},${size-2} L2,${size/2} Z`} fill="none" stroke={color} strokeWidth="0.8"/>
          <circle cx={size/2} cy={size/2} r="2" fill={color}/>
          <circle cx="2" cy="2" r="1.2" fill={color}/>
          <circle cx={size-2} cy="2" r="1.2" fill={color}/>
          <circle cx="2" cy={size-2} r="1.2" fill={color}/>
          <circle cx={size-2} cy={size-2} r="1.2" fill={color}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ajrak-pattern)"/>
    </svg>
  );
}

export function TruckArtBorder({ color = "#daa520", height = 24 }) {
  return (
    <svg viewBox="0 0 200 24" preserveAspectRatio="none" style={{ display:"block", width:"100%", height }} aria-hidden="true">
      <defs>
        <pattern id="truck-art-pattern" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
          {/* Floral medallion */}
          <circle cx="20" cy="12" r="6" fill="none" stroke={color} strokeWidth="1.2"/>
          <circle cx="20" cy="12" r="2" fill={color}/>
          {/* Petals around */}
          <path d="M20,3 Q22,7 20,9 Q18,7 20,3 Z" fill={color}/>
          <path d="M20,21 Q22,17 20,15 Q18,17 20,21 Z" fill={color}/>
          <path d="M11,12 Q15,10 17,12 Q15,14 11,12 Z" fill={color}/>
          <path d="M29,12 Q25,10 23,12 Q25,14 29,12 Z" fill={color}/>
          {/* Tiny accent dots */}
          <circle cx="5" cy="12" r="1" fill={color}/>
          <circle cx="35" cy="12" r="1" fill={color}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#truck-art-pattern)"/>
    </svg>
  );
}

export function KhyberMountain({ color = "#2d6a4f", height = 60 }) {
  return (
    <svg viewBox="0 0 400 60" preserveAspectRatio="none" style={{ display:"block", width:"100%", height }} aria-hidden="true">
      <path
        d="M0,60 L0,40 L40,15 L80,35 L120,10 L160,30 L200,8 L240,25 L280,15 L320,35 L360,20 L400,30 L400,60 Z"
        fill={color}
        opacity="0.15"
      />
      <path
        d="M0,60 L0,50 L50,30 L100,45 L150,25 L200,40 L250,28 L300,42 L350,32 L400,40 L400,60 Z"
        fill={color}
        opacity="0.25"
      />
    </svg>
  );
}

export function BalochiPattern({ color = "#1e3a8a", opacity = 0.08, size = 50 }) {
  return (
    <svg width="100%" height="100%" style={{ position:"absolute", inset:0, pointerEvents:"none", opacity }} aria-hidden="true">
      <defs>
        <pattern id="balochi-pattern" x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
          {/* Diamond + cross — typical Balochi embroidery */}
          <path d={`M${size/2},5 L${size-5},${size/2} L${size/2},${size-5} L5,${size/2} Z`} fill="none" stroke={color} strokeWidth="1"/>
          <path d={`M${size/2},${size/2-8} L${size/2},${size/2+8} M${size/2-8},${size/2} L${size/2+8},${size/2}`} stroke={color} strokeWidth="1"/>
          <circle cx={size/2} cy={size/2} r="2" fill={color}/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#balochi-pattern)"/>
    </svg>
  );
}

export function CrescentStar({ color = "#01411c", size = 60 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" aria-hidden="true">
      {/* Pakistan flag crescent + star */}
      <circle cx="28" cy="30" r="14" fill={color}/>
      <circle cx="32" cy="28" r="12" fill="white"/>
      <path d="M44,22 L46,28 L52,28 L47,32 L49,38 L44,34 L39,38 L41,32 L36,28 L42,28 Z" fill={color}/>
    </svg>
  );
}

export function OrnateDivider({ color = "#daa520", width = 200 }) {
  return (
    <svg viewBox="0 0 200 30" width={width} height="30" style={{ display:"block", margin:"0 auto" }} aria-hidden="true">
      {/* Truck-art style ornate divider */}
      <line x1="0" y1="15" x2="70" y2="15" stroke={color} strokeWidth="1" opacity="0.5"/>
      <line x1="130" y1="15" x2="200" y2="15" stroke={color} strokeWidth="1" opacity="0.5"/>
      <circle cx="85" cy="15" r="3" fill={color}/>
      <circle cx="115" cy="15" r="3" fill={color}/>
      <path d="M100,5 Q104,15 100,25 Q96,15 100,5 Z" fill={color}/>
      <circle cx="100" cy="15" r="5" fill="none" stroke={color} strokeWidth="1"/>
      <circle cx="100" cy="15" r="1.5" fill={color}/>
    </svg>
  );
}
