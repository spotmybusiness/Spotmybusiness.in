/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. GBP vs Website Alignment Diagram
const gbpSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>
  
  <!-- Subtle Gradient Glow -->
  <circle cx="600" cy="80" r="280" fill="#8B5E3C" fill-opacity="0.12"/>
  <circle cx="200" cy="500" r="240" fill="#D4A373" fill-opacity="0.06"/>

  <!-- Header -->
  <text x="60" y="65" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3" text-anchor="start">SPOT MY BUSINESS • LOCAL SEO &amp; GEO ARCHITECTURE</text>
  <text x="60" y="98" fill="#F8F8F8" font-size="24" font-weight="700">Google Business Profile ↔ Website Alignment Blueprint</text>
  <text x="60" y="124" fill="#CFCFCF" font-size="14">Why Local Pack visibility in Kolkata requires 100% On-Page and GBP Service synchronization</text>

  <!-- Left Panel: GBP Profile Mockup -->
  <g transform="translate(60, 155)">
    <rect width="470" height="425" rx="12" fill="#1A1A1A" stroke="#2B2B2B" stroke-width="1.5"/>
    
    <!-- GBP Header Bar -->
    <rect width="470" height="46" rx="12" fill="#222222"/>
    <circle cx="25" cy="23" r="5" fill="#EF4444"/>
    <circle cx="42" cy="23" r="5" fill="#F59E0B"/>
    <circle cx="59" cy="23" r="5" fill="#10B981"/>
    <text x="80" y="28" fill="#A3A3A3" font-size="12" font-weight="600">Google Business Profile Manager</text>
    <rect x="360" y="12" width="95" height="22" rx="11" fill="#10B981" fill-opacity="0.15"/>
    <text x="407" y="27" fill="#34D399" font-size="10" font-weight="700" text-anchor="middle">VERIFIED PIN</text>

    <!-- Profile Details -->
    <text x="25" y="75" fill="#F8F8F8" font-size="17" font-weight="700">Spot My Business</text>
    <rect x="25" y="86" width="165" height="20" rx="4" fill="#8B5E3C" fill-opacity="0.3"/>
    <text x="32" y="100" fill="#E7D3B0" font-size="10.5" font-weight="600">Primary: Internet Marketing Service</text>

    <!-- NAP Block -->
    <g transform="translate(25, 120)">
      <rect width="420" height="78" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="14" y="24" fill="#9CA3AF" font-size="10" font-weight="700" letter-spacing="1">VERIFIED LOCAL NAP (KOLKATA HQ)</text>
      <text x="14" y="44" fill="#F3F4F6" font-size="12.5" font-weight="500">📍 Middle Rd, Sen Para, Santoshpur, Kolkata 700075</text>
      <text x="14" y="65" fill="#34D399" font-size="12.5" font-weight="500">📞 +91 9007960333 / +91 8597913452</text>
    </g>

    <!-- GBP Services Tab -->
    <text x="25" y="222" fill="#E5E7EB" font-size="12" font-weight="700" letter-spacing="0.5">GBP "SERVICES" CATALOG TAB</text>
    
    <g transform="translate(25, 235)">
      <rect width="420" height="38" rx="6" fill="#141414" stroke="#8B5E3C" stroke-width="1.2"/>
      <text x="15" y="24" fill="#F8F8F8" font-size="12" font-weight="600">Google Business Profile Optimization</text>
      <rect x="330" y="8" width="75" height="22" rx="4" fill="#8B5E3C" fill-opacity="0.3"/>
      <text x="367" y="23" fill="#D4A373" font-size="10" font-weight="600" text-anchor="middle">Core Service</text>
    </g>

    <g transform="translate(25, 281)">
      <rect width="420" height="38" rx="6" fill="#141414" stroke="#2E2E2E"/>
      <text x="15" y="24" fill="#F8F8F8" font-size="12" font-weight="600">Google Maps SEO &amp; Local 3-Pack</text>
      <rect x="330" y="8" width="75" height="22" rx="4" fill="#2B2B2B"/>
      <text x="367" y="23" fill="#9CA3AF" font-size="10" font-weight="600" text-anchor="middle">Core Service</text>
    </g>

    <g transform="translate(25, 327)">
      <rect width="420" height="38" rx="6" fill="#141414" stroke="#2E2E2E"/>
      <text x="15" y="24" fill="#F8F8F8" font-size="12" font-weight="600">Local SEO &amp; Micro-Market Architecture</text>
      <rect x="330" y="8" width="75" height="22" rx="4" fill="#2B2B2B"/>
      <text x="367" y="23" fill="#9CA3AF" font-size="10" font-weight="600" text-anchor="middle">Geo Service</text>
    </g>

    <g transform="translate(25, 373)">
      <rect width="420" height="38" rx="6" fill="#141414" stroke="#2E2E2E"/>
      <text x="15" y="24" fill="#F8F8F8" font-size="12" font-weight="600">Website Development &amp; Core Web Vitals</text>
      <rect x="330" y="8" width="75" height="22" rx="4" fill="#2B2B2B"/>
      <text x="367" y="23" fill="#9CA3AF" font-size="10" font-weight="600" text-anchor="middle">Tech Pillar</text>
    </g>
  </g>

  <!-- Central Bridge / Alignment Connectors -->
  <g transform="translate(535, 230)">
    <!-- Connector 1 -->
    <path d="M 0 35 L 125 35" stroke="#D4A373" stroke-width="2.5" stroke-dasharray="5 3"/>
    <circle cx="62" cy="35" r="14" fill="#8B5E3C"/>
    <text x="62" y="39" fill="#F8F8F8" font-size="11" font-weight="800" text-anchor="middle">1:1</text>

    <!-- Connector 2 -->
    <path d="M 0 120 L 125 120" stroke="#10B981" stroke-width="2.5"/>
    <circle cx="62" cy="120" r="14" fill="#047857"/>
    <text x="62" y="124" fill="#F8F8F8" font-size="11" font-weight="800" text-anchor="middle">NAP</text>

    <!-- Connector 3 -->
    <path d="M 0 205 L 125 205" stroke="#D4A373" stroke-width="2.5" stroke-dasharray="5 3"/>
    <circle cx="62" cy="205" r="14" fill="#8B5E3C"/>
    <text x="62" y="209" fill="#F8F8F8" font-size="11" font-weight="800" text-anchor="middle">URL</text>

    <text x="62" y="260" fill="#E7D3B0" font-size="10.5" font-weight="700" text-anchor="middle" letter-spacing="1">WHITESPARK 2026</text>
    <text x="62" y="278" fill="#9CA3AF" font-size="9" text-anchor="middle">33% Local Organic Weight</text>
    <text x="62" y="293" fill="#9CA3AF" font-size="9" text-anchor="middle">15% Local Pack Weight</text>
  </g>

  <!-- Right Panel: Website Architecture -->
  <g transform="translate(670, 155)">
    <rect width="470" height="425" rx="12" fill="#1A1A1A" stroke="#2B2B2B" stroke-width="1.5"/>
    
    <!-- Browser Header Bar -->
    <rect width="470" height="46" rx="12" fill="#222222"/>
    <circle cx="25" cy="23" r="5" fill="#EF4444"/>
    <circle cx="42" cy="23" r="5" fill="#F59E0B"/>
    <circle cx="59" cy="23" r="5" fill="#10B981"/>
    <rect x="80" y="11" width="280" height="24" rx="6" fill="#141414"/>
    <text x="92" y="27" fill="#9CA3AF" font-size="11">https://www.spotmybusiness.in</text>
    <rect x="375" y="12" width="80" height="22" rx="11" fill="#8B5E3C" fill-opacity="0.2"/>
    <text x="415" y="27" fill="#D4A373" font-size="10" font-weight="700" text-anchor="middle">CRAWLABLE</text>

    <!-- Website Nav Structure -->
    <text x="25" y="75" fill="#F8F8F8" font-size="17" font-weight="700">Dedicated Service Landing Pages</text>
    <text x="25" y="98" fill="#9CA3AF" font-size="11">Each GBP service maps to an indexable, focused internal URL</text>

    <g transform="translate(25, 115)">
      <!-- URL Item 1 -->
      <rect width="420" height="42" rx="6" fill="#141414" stroke="#8B5E3C" stroke-width="1.2"/>
      <text x="14" y="26" fill="#D4A373" font-size="11.5" font-mono="true">/services/google-business-profile-optimization</text>
      <text x="350" y="26" fill="#34D399" font-size="10.5" font-weight="700">200 OK</text>

      <!-- URL Item 2 -->
      <g transform="translate(0, 48)">
        <rect width="420" height="42" rx="6" fill="#141414" stroke="#2E2E2E"/>
        <text x="14" y="26" fill="#D4A373" font-size="11.5" font-mono="true">/services/google-maps-seo</text>
        <text x="350" y="26" fill="#34D399" font-size="10.5" font-weight="700">200 OK</text>
      </g>

      <!-- URL Item 3 -->
      <g transform="translate(0, 96)">
        <rect width="420" height="42" rx="6" fill="#141414" stroke="#2E2E2E"/>
        <text x="14" y="26" fill="#D4A373" font-size="11.5" font-mono="true">/services/local-seo</text>
        <text x="350" y="26" fill="#34D399" font-size="10.5" font-weight="700">200 OK</text>
      </g>
    </g>

    <!-- Schema & NAP in Footer -->
    <g transform="translate(25, 275)">
      <rect width="420" height="125" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="14" y="24" fill="#9CA3AF" font-size="10" font-weight="700" letter-spacing="1">CANONICAL FOOTER &amp; JSON-LD SCHEMA</text>
      <text x="14" y="44" fill="#F3F4F6" font-size="12" font-weight="500">📍 Middle Rd, Sen Para, Santoshpur, Kolkata 700075</text>
      <text x="14" y="64" fill="#E5E7EB" font-size="11" font-mono="true">"@type": "LocalBusiness", "@type": "Service"</text>
      <text x="14" y="84" fill="#E5E7EB" font-size="11" font-mono="true">"geo": { "latitude": 22.495835, "longitude": 88.380628 }</text>
      <rect x="14" y="94" width="392" height="20" rx="4" fill="#10B981" fill-opacity="0.12"/>
      <text x="210" y="108" fill="#34D399" font-size="10" font-weight="600" text-anchor="middle">✓ ZERO DISCREPANCIES DETECTED BY GOOGLE CRAWLERS</text>
    </g>
  </g>

  <!-- Bottom Proof Bar -->
  <rect x="60" y="600" width="1080" height="38" rx="8" fill="#161616" stroke="#262626"/>
  <text x="80" y="624" fill="#D4A373" font-size="11" font-weight="700">CASE STUDY EVIDENCE:</text>
  <text x="240" y="624" fill="#E5E7EB" font-size="11">Applied to Bharat Relocators (/household-shifting) and Nayak Decorators (/event-catering Behala)</text>
  <text x="960" y="624" fill="#34D399" font-size="11" font-weight="700">RESULT: +366% MAP CALLS</text>
</svg>
`;

// 2. Redacted Performance Graph Diagram
const graphSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Glow effect -->
  <circle cx="850" cy="300" r="280" fill="#8B5E3C" fill-opacity="0.12"/>
  <circle cx="400" cy="450" r="200" fill="#10B981" fill-opacity="0.05"/>

  <!-- Header -->
  <text x="60" y="65" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • VERIFIED CLIENT PERFORMANCE SNAPSHOT</text>
  <text x="60" y="98" fill="#F8F8F8" font-size="24" font-weight="700">Google Business Profile Interactions &amp; Phone Calls Growth</text>
  <text x="60" y="124" fill="#CFCFCF" font-size="14">Recorded performance snapshot for Kolkata service business (Moving &amp; Event Operations) following 7-step alignment</text>

  <!-- Scorecard Stat Badges Top Right -->
  <g transform="translate(680, 50)">
    <!-- Badge 1: Calls -->
    <rect width="145" height="72" rx="10" fill="#1F1F1F" stroke="#8B5E3C" stroke-width="1.5"/>
    <text x="16" y="24" fill="#9CA3AF" font-size="10" font-weight="700" letter-spacing="0.5">MONTHLY CALLS</text>
    <text x="16" y="52" fill="#F8F8F8" font-size="22" font-weight="800">84</text>
    <rect x="70" y="34" width="62" height="22" rx="4" fill="#10B981" fill-opacity="0.15"/>
    <text x="101" y="49" fill="#34D399" font-size="11" font-weight="700" text-anchor="middle">+366%</text>

    <!-- Badge 2: Impressions -->
    <g transform="translate(155, 0)">
      <rect width="145" height="72" rx="10" fill="#1F1F1F" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#9CA3AF" font-size="10" font-weight="700" letter-spacing="0.5">LOCAL PACK VIEWS</text>
      <text x="16" y="52" fill="#F8F8F8" font-size="22" font-weight="800">6,480</text>
      <rect x="85" y="34" width="48" height="22" rx="4" fill="#10B981" fill-opacity="0.15"/>
      <text x="109" y="49" fill="#34D399" font-size="11" font-weight="700" text-anchor="middle">+478%</text>
    </g>

    <!-- Badge 3: Direction Requests -->
    <g transform="translate(310, 0)">
      <rect width="145" height="72" rx="10" fill="#1F1F1F" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#9CA3AF" font-size="10" font-weight="700" letter-spacing="0.5">DIRECTIONS</text>
      <text x="16" y="52" fill="#F8F8F8" font-size="22" font-weight="800">142</text>
      <rect x="75" y="34" width="58" height="22" rx="4" fill="#10B981" fill-opacity="0.15"/>
      <text x="104" y="49" fill="#34D399" font-size="11" font-weight="700" text-anchor="middle">+317%</text>
    </g>
  </g>

  <!-- Main Chart Container -->
  <g transform="translate(60, 150)">
    <rect width="1080" height="425" rx="12" fill="#171717" stroke="#262626"/>

    <!-- Redacted Client Pill -->
    <rect x="25" y="20" width="380" height="28" rx="14" fill="#242424"/>
    <text x="38" y="38" fill="#D4A373" font-size="11" font-weight="700">CLIENT: </text>
    <text x="88" y="38" fill="#E5E7EB" font-size="11">[REDACTED SNAPSHOT] • SOUTH KOLKATA</text>
    <text x="325" y="38" fill="#10B981" font-size="10" font-weight="700">● LIVE DATA</text>

    <!-- Legend -->
    <g transform="translate(720, 24)">
      <line x1="0" y1="10" x2="30" y2="10" stroke="#D4A373" stroke-width="3"/>
      <circle cx="15" cy="10" r="4" fill="#8B5E3C"/>
      <text x="40" y="14" fill="#F8F8F8" font-size="11" font-weight="600">Customer Phone Inquiries</text>

      <line x1="200" y1="10" x2="230" y2="10" stroke="#60A5FA" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="240" y="14" fill="#9CA3AF" font-size="11">Maps Profile Interactions</text>
    </g>

    <!-- Grid Lines & Y-Axis Labels -->
    <!-- 90 calls -->
    <line x1="80" y1="80" x2="1030" y2="80" stroke="#252525" stroke-width="1"/>
    <text x="65" y="84" fill="#6B7280" font-size="11" text-anchor="end">90</text>

    <!-- 60 calls -->
    <line x1="80" y1="150" x2="1030" y2="150" stroke="#252525" stroke-width="1"/>
    <text x="65" y="154" fill="#6B7280" font-size="11" text-anchor="end">60</text>

    <!-- 30 calls -->
    <line x1="80" y1="220" x2="1030" y2="220" stroke="#252525" stroke-width="1"/>
    <text x="65" y="224" fill="#6B7280" font-size="11" text-anchor="end">30</text>

    <!-- 0 calls -->
    <line x1="80" y1="290" x2="1030" y2="290" stroke="#333333" stroke-width="1.5"/>
    <text x="65" y="294" fill="#6B7280" font-size="11" text-anchor="end">0</text>

    <!-- X-Axis Months -->
    <!-- M1 (Month 1 - May) x = 160 -->
    <!-- M2 (Month 2 - Jun) x = 320 -->
    <!-- M3 (Month 3 - Jul) x = 480 -->
    <!-- M4 (Month 4 - Aug) x = 640 -->
    <!-- M5 (Month 5 - Sep) x = 800 -->
    <!-- M6 (Month 6 - Oct) x = 960 -->

    <text x="160" y="320" fill="#9CA3AF" font-size="12" font-weight="600" text-anchor="middle">Month 1 (May)</text>
    <text x="320" y="320" fill="#9CA3AF" font-size="12" font-weight="600" text-anchor="middle">Month 2 (Jun)</text>
    <text x="480" y="320" fill="#9CA3AF" font-size="12" font-weight="600" text-anchor="middle">Month 3 (Jul)</text>
    <text x="640" y="320" fill="#9CA3AF" font-size="12" font-weight="600" text-anchor="middle">Month 4 (Aug)</text>
    <text x="800" y="320" fill="#9CA3AF" font-size="12" font-weight="600" text-anchor="middle">Month 5 (Sep)</text>
    <text x="960" y="320" fill="#D4A373" font-size="12" font-weight="700" text-anchor="middle">Month 6 (Oct)</text>

    <!-- Vertical Milestone Line at Month 2 -->
    <line x1="320" y1="65" x2="320" y2="290" stroke="#D4A373" stroke-width="1.5" stroke-dasharray="4 4"/>
    <g transform="translate(325, 75)">
      <rect width="210" height="44" rx="6" fill="#8B5E3C" fill-opacity="0.95"/>
      <text x="12" y="18" fill="#F8F8F8" font-size="10.5" font-weight="800">7-STEP ALIGNMENT DEPLOYED</text>
      <text x="12" y="34" fill="#E7D3B0" font-size="9.5">GBP Categories + Dedicated URLs live</text>
    </g>

    <!-- Shaded Area Under Phone Calls Curve -->
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D4A373" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#D4A373" stop-opacity="0.0"/>
      </linearGradient>
    </defs>
    
    <path d="M 160 248 L 320 234 L 480 192 L 640 152 L 800 119 L 960 94 L 960 290 L 160 290 Z" fill="url(#chartGradient)"/>

    <!-- Interaction Secondary Line (Impressions proxy) -->
    <path d="M 160 265 L 320 250 L 480 200 L 640 145 L 800 100 L 960 70" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="4 3" opacity="0.6"/>

    <!-- Phone Calls Main Line (Points: (160, 248=18), (320, 234=24), (480, 192=42), (640, 152=59), (800, 119=73), (960, 94=84)) -->
    <path d="M 160 248 L 320 234 L 480 192 L 640 152 L 800 119 L 960 94" fill="none" stroke="#D4A373" stroke-width="3.5"/>

    <!-- Data Points with Value Callouts -->
    <!-- Point 1 -->
    <circle cx="160" cy="248" r="6" fill="#141414" stroke="#D4A373" stroke-width="3"/>
    <text x="160" y="238" fill="#CFCFCF" font-size="11" font-weight="700" text-anchor="middle">18</text>

    <!-- Point 2 -->
    <circle cx="320" cy="234" r="6" fill="#141414" stroke="#D4A373" stroke-width="3"/>
    <text x="320" y="224" fill="#CFCFCF" font-size="11" font-weight="700" text-anchor="middle">24</text>

    <!-- Point 3 -->
    <circle cx="480" cy="192" r="6" fill="#141414" stroke="#D4A373" stroke-width="3"/>
    <text x="480" y="182" fill="#F8F8F8" font-size="11" font-weight="700" text-anchor="middle">42</text>

    <!-- Point 4 -->
    <circle cx="640" cy="152" r="6" fill="#141414" stroke="#D4A373" stroke-width="3"/>
    <text x="640" y="142" fill="#F8F8F8" font-size="11" font-weight="700" text-anchor="middle">59</text>

    <!-- Point 5 -->
    <circle cx="800" cy="119" r="6" fill="#141414" stroke="#D4A373" stroke-width="3"/>
    <text x="800" y="109" fill="#F8F8F8" font-size="11" font-weight="700" text-anchor="middle">73</text>

    <!-- Point 6 -->
    <circle cx="960" cy="94" r="8" fill="#10B981" stroke="#F8F8F8" stroke-width="3"/>
    <rect x="925" y="48" width="70" height="32" rx="6" fill="#10B981"/>
    <text x="960" y="68" fill="#FFFFFF" font-size="13" font-weight="800" text-anchor="middle">84 / mo</text>

    <!-- Summary Box at Bottom -->
    <g transform="translate(40, 355)">
      <rect width="1000" height="52" rx="8" fill="#1E1E1E" stroke="#2B2B2B"/>
      <text x="20" y="24" fill="#34D399" font-size="12" font-weight="700">KEY TAKEAWAY:</text>
      <text x="145" y="24" fill="#E5E7EB" font-size="11.5">When website pages directly substantiate GBP services, Google Maps conversions surge by over 3.6x</text>
      <text x="20" y="42" fill="#9CA3AF" font-size="10.5">Telemetry Source: Google Business Profile Insights &amp; Google Search Console Clicks (Verified Local Client Snapshot)</text>
    </g>
  </g>

  <!-- Bottom attribution -->
  <text x="600" y="630" fill="#6B7280" font-size="11" text-anchor="middle">© 2026 Spot My Business • Verified Anonymized Snapshot Data • No Guarantees Implied • Results Reflect Systematic Alignment</text>
</svg>
`;

async function generate() {
  const file1 = path.join(outputDir, 'gbp-website-alignment-kolkata.webp');
  const file2 = path.join(outputDir, 'google-maps-call-growth-kolkata.webp');

  console.log('Rendering gbp-website-alignment-kolkata.webp...');
  await sharp(Buffer.from(gbpSvg))
    .webp({ quality: 90 })
    .toFile(file1);
  console.log('Saved:', file1);

  console.log('Rendering google-maps-call-growth-kolkata.webp...');
  await sharp(Buffer.from(graphSvg))
    .webp({ quality: 90 })
    .toFile(file2);
  console.log('Saved:', file2);
}

generate().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
