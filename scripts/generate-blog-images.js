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

// 3. Post 1 Hero: 9-Step GBP Optimization Checklist Diagram
const checklistHeroSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Subtle Glows -->
  <circle cx="950" cy="120" r="260" fill="#8B5E3C" fill-opacity="0.12"/>
  <circle cx="250" cy="520" r="240" fill="#D4A373" fill-opacity="0.06"/>

  <!-- Header -->
  <text x="60" y="62" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • 2026 PRACTITIONER AUDIT FRAMEWORK</text>
  <text x="60" y="96" fill="#F8F8F8" font-size="25" font-weight="700">Google Business Profile Optimization: 9-Step Verification Architecture</text>
  <text x="60" y="122" fill="#CFCFCF" font-size="13.5">Calibrating Relevance, Distance, Prominence &amp; Gemini AI Search Eligibility (≥3.5★ Threshold)</text>

  <!-- Top Right Badge -->
  <g transform="translate(930, 50)">
    <rect width="210" height="60" rx="10" fill="#1B1B1B" stroke="#8B5E3C" stroke-width="1.5"/>
    <text x="105" y="25" fill="#D4A373" font-size="10" font-weight="700" letter-spacing="1" text-anchor="middle">GEMINI LOCAL AI WEIGHT</text>
    <text x="105" y="46" fill="#34D399" font-size="14" font-weight="800" text-anchor="middle">38% Reviews • ≥3.5★ Gate</text>
  </g>

  <!-- 3x3 Grid of the 9 Steps -->
  <!-- Row 1 (y=148) -->
  <g transform="translate(60, 148)">
    <!-- Step 1 -->
    <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.4"/>
    <rect x="16" y="16" width="54" height="22" rx="5" fill="#8B5E3C" fill-opacity="0.25"/>
    <text x="43" y="31" fill="#E7D3B0" font-size="10.5" font-weight="700" text-anchor="middle">STEP 01</text>
    <text x="275" y="31" fill="#34D399" font-size="10" font-weight="700">NAP + PIN</text>
    <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Core NAP &amp; Operating Hours</text>
    <text x="16" y="80" fill="#CFCFCF" font-size="11.5">1:1 legal name, street address, postal code,</text>
    <text x="16" y="97" fill="#9CA3AF" font-size="11">verified special hours &amp; direct local phone.</text>

    <!-- Step 2 -->
    <g transform="translate(368, 0)">
      <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.4"/>
      <rect x="16" y="16" width="54" height="22" rx="5" fill="#8B5E3C" fill-opacity="0.25"/>
      <text x="43" y="31" fill="#E7D3B0" font-size="10.5" font-weight="700" text-anchor="middle">STEP 02</text>
      <text x="250" y="31" fill="#F59E0B" font-size="10" font-weight="700">#1 RANK DRIVER</text>
      <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Primary &amp; Secondary Categories</text>
      <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Specific primary category (avoids #1 → #31 drop)</text>
      <text x="16" y="97" fill="#9CA3AF" font-size="11">+ 2 to 4 focused secondary categories.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(736, 0)">
      <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
      <rect x="16" y="16" width="54" height="22" rx="5" fill="#262626"/>
      <text x="43" y="31" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 03</text>
      <text x="260" y="31" fill="#9CA3AF" font-size="10" font-weight="700">CATALOG</text>
      <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Pre-Defined &amp; Custom Services</text>
      <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Populate service menus, course batches, and</text>
      <text x="16" y="97" fill="#9CA3AF" font-size="11">deliverables mapped to dedicated site URLs.</text>
    </g>
  </g>

  <!-- Row 2 (y=286) -->
  <g transform="translate(60, 286)">
    <!-- Step 4 -->
    <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
    <rect x="16" y="16" width="54" height="22" rx="5" fill="#262626"/>
    <text x="43" y="31" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 04</text>
    <text x="255" y="31" fill="#9CA3AF" font-size="10" font-weight="700">≤750 CHARS</text>
    <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Compliant Business Description</text>
    <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Clear scope &amp; neighborhoods served; zero URLs,</text>
    <text x="16" y="97" fill="#9CA3AF" font-size="11">zero phone numbers, zero promotional spam.</text>

    <!-- Step 5 -->
    <g transform="translate(368, 0)">
      <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
      <rect x="16" y="16" width="54" height="22" rx="5" fill="#262626"/>
      <text x="43" y="31" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 05</text>
      <text x="250" y="31" fill="#9CA3AF" font-size="10" font-weight="700">TRUST SIGNALS</text>
      <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Attributes &amp; Opening Date</text>
      <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Activate "Years in business" badge, payment</text>
      <text x="16" y="97" fill="#9CA3AF" font-size="11">options, accessibility &amp; consultation modes.</text>
    </g>

    <!-- Step 6 -->
    <g transform="translate(736, 0)">
      <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.4"/>
      <rect x="16" y="16" width="54" height="22" rx="5" fill="#8B5E3C" fill-opacity="0.25"/>
      <text x="43" y="31" fill="#E7D3B0" font-size="10.5" font-weight="700" text-anchor="middle">STEP 06</text>
      <text x="235" y="31" fill="#34D399" font-size="10" font-weight="700">DIVERSITY SAFE</text>
      <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Landing Page &amp; UTM Tracking</text>
      <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Prevent organic/pack URL cannibalization + tag</text>
      <text x="16" y="97" fill="#9CA3AF" font-size="11">with ?utm_source=google&amp;utm_campaign=gbp.</text>
    </g>
  </g>

  <!-- Row 3 (y=424) -->
  <g transform="translate(60, 424)">
    <!-- Step 7 -->
    <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
    <rect x="16" y="16" width="54" height="22" rx="5" fill="#262626"/>
    <text x="43" y="31" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 07</text>
    <text x="250" y="31" fill="#9CA3AF" font-size="10" font-weight="700">VISUAL PROOF</text>
    <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Authentic Photos &amp; Signage</text>
    <text x="16" y="80" fill="#CFCFCF" font-size="11.5">10–15 real storefront, classroom, or fleet photos;</text>
    <text x="16" y="97" fill="#9CA3AF" font-size="11">zero stock imagery to pass visual verification.</text>

    <!-- Step 8 -->
    <g transform="translate(368, 0)">
      <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#10B981" stroke-width="1.4"/>
      <rect x="16" y="16" width="54" height="22" rx="5" fill="#10B981" fill-opacity="0.2"/>
      <text x="43" y="31" fill="#34D399" font-size="10.5" font-weight="700" text-anchor="middle">STEP 08</text>
      <text x="235" y="31" fill="#34D399" font-size="10" font-weight="700">38% AI SIGNAL</text>
      <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Review Velocity &amp; ≥3.5★ Gate</text>
      <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Steady ethical reviews + owner replies to trigger</text>
      <text x="16" y="97" fill="#9CA3AF" font-size="11">Map Justifications &amp; Gemini AI citations.</text>
    </g>

    <!-- Step 9 -->
    <g transform="translate(736, 0)">
      <rect width="344" height="122" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
      <rect x="16" y="16" width="54" height="22" rx="5" fill="#262626"/>
      <text x="43" y="31" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 09</text>
      <text x="245" y="31" fill="#9CA3AF" font-size="10" font-weight="700">GOVERNANCE</text>
      <text x="16" y="58" fill="#F8F8F8" font-size="14.5" font-weight="700">Edit Defence &amp; Maintenance</text>
      <text x="16" y="80" fill="#CFCFCF" font-size="11.5">Weekly audit against unauthorized "Suggested</text>
      <text x="16" y="97" fill="#9CA3AF" font-size="11">Edits", pin drift, and seasonal hour changes.</text>
    </g>
  </g>

  <!-- Bottom Evidence Bar -->
  <rect x="60" y="572" width="1080" height="54" rx="10" fill="#181818" stroke="#2B2B2B"/>
  <text x="84" y="596" fill="#D4A373" font-size="11.5" font-weight="700">VERIFIED CLIENT BENCHMARKS:</text>
  <text x="275" y="596" fill="#F3F4F6" font-size="11.5">Science Squad Dankuni (5.0★ • #1 Maps) • Bharat Relocators (4.9★ • 300+ Reviews) • Nayak Decorators Behala (4.8★)</text>
  <text x="84" y="614" fill="#9CA3AF" font-size="10.5">Sources: Google Business Profile Guidelines, Sterling Sky Empirical Category Testing &amp; First Page Sage Oct 2026 GEO Study</text>
</svg>
`;

// 4. Post 1 Visual 1: Science Squad Dankuni GBP Comparison Graphic
const scienceSquadComparisonSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Glows -->
  <circle cx="900" cy="340" r="270" fill="#10B981" fill-opacity="0.07"/>
  <circle cx="300" cy="340" r="240" fill="#EF4444" fill-opacity="0.05"/>

  <!-- Header -->
  <text x="60" y="62" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • FIELD CASE STUDY COMPARISON</text>
  <text x="60" y="96" fill="#F8F8F8" font-size="24" font-weight="700">Incomplete Listing vs. Fully Optimized Google Business Profile</text>
  <text x="60" y="122" fill="#CFCFCF" font-size="13.5">How structured categories, course batch services, and website alignment elevated Science Squad in Dankuni, West Bengal</text>

  <!-- Left Panel: Unoptimized Coaching Listing -->
  <g transform="translate(60, 150)">
    <rect width="510" height="430" rx="12" fill="#1A1A1A" stroke="#3F2323" stroke-width="1.5"/>
    <rect width="510" height="46" rx="12" fill="#261919"/>
    <circle cx="26" cy="23" r="6" fill="#EF4444"/>
    <text x="44" y="28" fill="#FCA5A5" font-size="12" font-weight="700" letter-spacing="0.5">TYPICAL UNOPTIMIZED COACHING PROFILE</text>
    <rect x="382" y="12" width="110" height="22" rx="11" fill="#EF4444" fill-opacity="0.2"/>
    <text x="437" y="27" fill="#F87171" font-size="10" font-weight="700" text-anchor="middle">POSITION #18+</text>

    <!-- Row items -->
    <g transform="translate(24, 66)">
      <rect width="462" height="58" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">PRIMARY CATEGORY SELECTION</text>
      <text x="16" y="42" fill="#F87171" font-size="13" font-weight="600">✗ Generic "Educational Consultant" or "School"</text>
    </g>

    <g transform="translate(24, 136)">
      <rect width="462" height="68" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">SERVICES &amp; COURSE CATALOG TAB</text>
      <text x="16" y="42" fill="#E5E7EB" font-size="12.5">✗ Left blank — zero mention of Class 7–12 Boards, JEE,</text>
      <text x="16" y="58" fill="#9CA3AF" font-size="11.5">   NEET, or Spoken English batch schedules</text>
    </g>

    <g transform="translate(24, 216)">
      <rect width="462" height="68" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">LINKED WEBSITE &amp; LANDING PAGE</text>
      <text x="16" y="42" fill="#E5E7EB" font-size="12.5">✗ No website or single flyer page without crawlable</text>
      <text x="16" y="58" fill="#9CA3AF" font-size="11.5">   syllabus details, faculty info, or local schema</text>
    </g>

    <g transform="translate(24, 296)">
      <rect width="462" height="58" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">STUDENT &amp; PARENT REVIEW SIGNALS</text>
      <text x="16" y="42" fill="#F87171" font-size="12.5">✗ Sporadic unverified ratings; zero owner responses</text>
    </g>

    <rect x="24" y="368" width="462" height="42" rx="8" fill="#261919"/>
    <text x="255" y="394" fill="#FCA5A5" font-size="11.5" font-weight="700" text-anchor="middle">OUTCOME: Invisible for high-intent "coaching center in Dankuni" searches</text>
  </g>

  <!-- Right Panel: Science Squad Dankuni Optimized Profile -->
  <g transform="translate(630, 150)">
    <rect width="510" height="430" rx="12" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.8"/>
    <rect width="510" height="46" rx="12" fill="#231D16"/>
    <circle cx="26" cy="23" r="6" fill="#10B981"/>
    <text x="44" y="28" fill="#E7D3B0" font-size="12" font-weight="700" letter-spacing="0.5">SCIENCE SQUAD (DANKUNI, WB) • SMB STANDARD</text>
    <rect x="372" y="12" width="120" height="22" rx="11" fill="#10B981" fill-opacity="0.2"/>
    <text x="432" y="27" fill="#34D399" font-size="10" font-weight="700" text-anchor="middle">#1 GOOGLE MAPS</text>

    <!-- Row items -->
    <g transform="translate(24, 66)">
      <rect width="462" height="58" rx="8" fill="#141414" stroke="#8B5E3C" stroke-width="1.2"/>
      <text x="16" y="22" fill="#D4A373" font-size="10" font-weight="700">CALIBRATED CATEGORY HIERARCHY</text>
      <text x="16" y="42" fill="#34D399" font-size="13" font-weight="600">✓ Primary: Coaching Center + Focused Secondary Categories</text>
    </g>

    <g transform="translate(24, 136)">
      <rect width="462" height="68" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="22" fill="#D4A373" font-size="10" font-weight="700">STRUCTURED ACADEMIC SERVICE CATALOG</text>
      <text x="16" y="42" fill="#F8F8F8" font-size="12.5">✓ Class 7–12 Boards, JEE, NEET &amp; Spoken English</text>
      <text x="16" y="58" fill="#9CA3AF" font-size="11.5">   with clear batch schedules &amp; student intake details</text>
    </g>

    <g transform="translate(24, 216)">
      <rect width="462" height="68" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="22" fill="#D4A373" font-size="10" font-weight="700">1:1 WEBSITE &amp; LOCAL ENTITY ALIGNMENT</text>
      <text x="16" y="42" fill="#F8F8F8" font-size="12.5">✓ Dedicated academic website with matching Dankuni NAP,</text>
      <text x="16" y="58" fill="#9CA3AF" font-size="11.5">   course modules, and direct parent call/WhatsApp routing</text>
    </g>

    <g transform="translate(24, 296)">
      <rect width="462" height="58" rx="8" fill="#141414" stroke="#10B981" stroke-width="1.2"/>
      <text x="16" y="22" fill="#34D399" font-size="10" font-weight="700">VERIFIED REPUTATION &amp; GEMINI AI ELIGIBILITY</text>
      <text x="16" y="42" fill="#F8F8F8" font-size="12.5" font-weight="600">✓ 5.0★ Rating (30+ Authentic Reviews) • Passes ≥3.5★ AI Filter</text>
    </g>

    <rect x="24" y="368" width="462" height="42" rx="8" fill="#0F291E" stroke="#10B981" stroke-width="1"/>
    <text x="255" y="394" fill="#34D399" font-size="11.5" font-weight="700" text-anchor="middle">RECORDED SNAPSHOT: #1 Google Maps Position &amp; Direct Admission Inquiries</text>
  </g>

  <!-- Bottom Caption -->
  <text x="600" y="618" fill="#9CA3AF" font-size="11" text-anchor="middle">Recorded client project snapshot from Spot My Business portfolio (/case-studies) • Science Squad, Dankuni, West Bengal</text>
</svg>
`;

// 5. Post 2 Hero: Google Maps SEO Storefront vs. Service-Area Business Diagram
const mapsStorefrontVsSabSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Subtle Glows -->
  <circle cx="300" cy="260" r="240" fill="#8B5E3C" fill-opacity="0.1"/>
  <circle cx="900" cy="260" r="240" fill="#10B981" fill-opacity="0.07"/>

  <!-- Header -->
  <text x="60" y="62" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • GOOGLE MAPS SEO ARCHITECTURE (2026)</text>
  <text x="60" y="96" fill="#F8F8F8" font-size="24.5" font-weight="700">Storefront Pin vs. Service-Area Boundary Configuration</text>
  <text x="60" y="122" fill="#CFCFCF" font-size="13.5">Matching your Google Business Profile location settings to how customers actually interact with your business</text>

  <!-- Left Panel: Storefront Model -->
  <g transform="translate(60, 148)">
    <rect width="510" height="405" rx="12" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.6"/>
    <rect width="510" height="46" rx="12" fill="#231D16"/>
    <circle cx="26" cy="23" r="6" fill="#D4A373"/>
    <text x="44" y="28" fill="#E7D3B0" font-size="12" font-weight="700" letter-spacing="0.5">MODEL A: STOREFRONT &amp; FACILITY BUSINESS</text>
    <rect x="372" y="12" width="120" height="22" rx="11" fill="#8B5E3C" fill-opacity="0.3"/>
    <text x="432" y="27" fill="#E7D3B0" font-size="10" font-weight="700" text-anchor="middle">VISIBLE PIN</text>

    <!-- Visual Radar / Pin Box -->
    <g transform="translate(24, 64)">
      <rect width="462" height="104" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <circle cx="70" cy="52" r="36" fill="#8B5E3C" fill-opacity="0.15" stroke="#D4A373" stroke-dasharray="3 3"/>
      <circle cx="70" cy="52" r="18" fill="#8B5E3C" fill-opacity="0.3"/>
      <circle cx="70" cy="52" r="6" fill="#F8F8F8"/>
      <text x="130" y="32" fill="#D4A373" font-size="11" font-weight="700">PHYSICAL CUSTOMER DESTINATION</text>
      <text x="130" y="54" fill="#F8F8F8" font-size="13" font-weight="600">Customers travel to your premises</text>
      <text x="130" y="74" fill="#9CA3AF" font-size="11.5">Examples: Coaching Centers, Clinics, Retail, Workshops</text>
      <text x="130" y="91" fill="#34D399" font-size="11" font-weight="600">✓ Display full street address, floor &amp; landmark</text>
    </g>

    <!-- Technical Specs -->
    <g transform="translate(24, 182)">
      <rect width="462" height="60" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="23" fill="#9CA3AF" font-size="10" font-weight="700">MAP PIN &amp; SIGNAGE REQUIREMENT</text>
      <text x="16" y="43" fill="#E5E7EB" font-size="12">Rooftop entrance pin + permanent exterior signage photos</text>
    </g>

    <g transform="translate(24, 254)">
      <rect width="462" height="60" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="23" fill="#9CA3AF" font-size="10" font-weight="700">PRIMARY RANKING &amp; CONVERSION SIGNAL</text>
      <text x="16" y="43" fill="#E5E7EB" font-size="12">Immediate proximity radius + "Get Directions" tap velocity</text>
    </g>

    <rect x="24" y="328" width="462" height="54" rx="8" fill="#231D16" stroke="#8B5E3C" stroke-width="1"/>
    <text x="40" y="351" fill="#D4A373" font-size="10.5" font-weight="700">VERIFIED STOREFRONT BENCHMARK:</text>
    <text x="40" y="369" fill="#F8F8F8" font-size="12" font-weight="600">Science Squad (Dankuni, WB) • 5.0★ (30+) • #1 Google Maps</text>
  </g>

  <!-- Right Panel: Service-Area Business (SAB) Model -->
  <g transform="translate(630, 148)">
    <rect width="510" height="405" rx="12" fill="#1A1A1A" stroke="#10B981" stroke-width="1.6"/>
    <rect width="510" height="46" rx="12" fill="#13261F"/>
    <circle cx="26" cy="23" r="6" fill="#10B981"/>
    <text x="44" y="28" fill="#6EE7B7" font-size="12" font-weight="700" letter-spacing="0.5">MODEL B: SERVICE-AREA BUSINESS (SAB)</text>
    <rect x="356" y="12" width="136" height="22" rx="11" fill="#10B981" fill-opacity="0.2"/>
    <text x="424" y="27" fill="#34D399" font-size="10" font-weight="700" text-anchor="middle">BOUNDARY POLYGON</text>

    <!-- Visual Polygon / Zone Box -->
    <g transform="translate(24, 64)">
      <rect width="462" height="104" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <polygon points="42,26 96,20 110,58 84,86 36,78" fill="#10B981" fill-opacity="0.15" stroke="#34D399" stroke-width="1.5" stroke-dasharray="4 2"/>
      <circle cx="72" cy="54" r="4" fill="#34D399"/>
      <text x="130" y="32" fill="#34D399" font-size="11" font-weight="700">ON-SITE DELIVERY AT CUSTOMER LOCATION</text>
      <text x="130" y="54" fill="#F8F8F8" font-size="13" font-weight="600">Your team travels to the client's address</text>
      <text x="130" y="74" fill="#9CA3AF" font-size="11.5">Examples: Packers &amp; Movers, Event Caterers, Home Spa</text>
      <text x="130" y="91" fill="#34D399" font-size="11" font-weight="600">✓ Up to 20 realistic local zones (≤2 hr drive radius)</text>
    </g>

    <!-- Technical Specs -->
    <g transform="translate(24, 182)">
      <rect width="462" height="60" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="23" fill="#9CA3AF" font-size="10" font-weight="700">ADDRESS VISIBILITY &amp; COMPLIANCE RULE</text>
      <text x="16" y="43" fill="#E5E7EB" font-size="12">Hide residential address if unstaffed; define contiguous PINs/cities</text>
    </g>

    <g transform="translate(24, 254)">
      <rect width="462" height="60" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="23" fill="#9CA3AF" font-size="10" font-weight="700">PRIMARY RANKING &amp; CONVERSION SIGNAL</text>
      <text x="16" y="43" fill="#E5E7EB" font-size="12">Website service-area pages + direct Phone / WhatsApp Quote CTR</text>
    </g>

    <rect x="24" y="328" width="462" height="54" rx="8" fill="#13261F" stroke="#10B981" stroke-width="1"/>
    <text x="40" y="351" fill="#34D399" font-size="10.5" font-weight="700">VERIFIED SAB BENCHMARKS:</text>
    <text x="40" y="369" fill="#F8F8F8" font-size="12" font-weight="600">Bharat Relocators (4.9★) &amp; Nayak Decorators Behala (4.8★)</text>
  </g>

  <!-- Bottom Signal Bar -->
  <rect x="60" y="572" width="1080" height="54" rx="10" fill="#181818" stroke="#2B2B2B"/>
  <text x="84" y="596" fill="#D4A373" font-size="11.5" font-weight="700">2026 GOOGLE MAPS SIGNALS:</text>
  <text x="260" y="596" fill="#F3F4F6" font-size="11.5">Verification Centroid Proximity • 15% Website On-Page Weight • 38% Gemini Local Review Weight • Zero Virtual Offices</text>
  <text x="84" y="614" fill="#9CA3AF" font-size="10.5">Aligned with Google Business Profile Address Guidelines, LocalBusiness Schema &amp; BrightLocal Service-Area Standards</text>
</svg>
`;

// 6. Post 2 Visual 1: Storefront vs. SAB Customer Conversion Flow
const storefrontVsSabFlowSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Header -->
  <text x="60" y="62" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • OPERATIONAL CONVERSION PATHWAYS</text>
  <text x="60" y="96" fill="#F8F8F8" font-size="24" font-weight="700">How Searchers Convert on Google Maps: Storefront vs. Service-Area</text>
  <text x="60" y="122" fill="#CFCFCF" font-size="13.5">Real customer journey architecture from our documented client portfolio (/industries &amp; /case-studies)</text>

  <!-- Top Flow: Storefront (Science Squad Dankuni) -->
  <g transform="translate(60, 152)">
    <rect width="1080" height="205" rx="12" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.5"/>
    <rect x="24" y="18" width="250" height="24" rx="6" fill="#8B5E3C" fill-opacity="0.25"/>
    <text x="36" y="34" fill="#E7D3B0" font-size="11" font-weight="700">PATHWAY 01 • STOREFRONT CAMPUS MODEL</text>
    <text x="290" y="34" fill="#F8F8F8" font-size="13" font-weight="700">Science Squad (Dankuni, West Bengal) — 5.0★ (30+ Reviews)</text>

    <!-- 4 Flow Nodes -->
    <g transform="translate(24, 58)">
      <rect width="235" height="122" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#D4A373" font-size="10" font-weight="700">1. LOCAL SEARCH QUERY</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="12.5" font-weight="600">"JEE / NEET coaching</text>
      <text x="16" y="66" fill="#F8F8F8" font-size="12.5" font-weight="600">center in Dankuni"</text>
      <text x="16" y="94" fill="#9CA3AF" font-size="10.5">Parent/student searches</text>
      <text x="16" y="109" fill="#9CA3AF" font-size="10.5">within 5 km commuter belt</text>
    </g>

    <text x="271" y="122" fill="#D4A373" font-size="18" font-weight="800" text-anchor="middle">→</text>

    <g transform="translate(284, 58)">
      <rect width="245" height="122" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#D4A373" font-size="10" font-weight="700">2. MAPS PIN VERIFICATION</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="12.5" font-weight="600">Exact street pin + batch</text>
      <text x="16" y="66" fill="#F8F8F8" font-size="12.5" font-weight="600">hours &amp; classroom photos</text>
      <text x="16" y="94" fill="#9CA3AF" font-size="10.5">Confirms safe, accessible</text>
      <text x="16" y="109" fill="#9CA3AF" font-size="10.5">physical facility location</text>
    </g>

    <text x="541" y="122" fill="#D4A373" font-size="18" font-weight="800" text-anchor="middle">→</text>

    <g transform="translate(554, 58)">
      <rect width="245" height="122" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#D4A373" font-size="10" font-weight="700">3. WEBSITE SYLLABUS CHECK</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="12.5" font-weight="600">sciencesquadkolkata.in</text>
      <text x="16" y="66" fill="#F8F8F8" font-size="12.5" font-weight="600">Course explorer &amp; faculty</text>
      <text x="16" y="94" fill="#9CA3AF" font-size="10.5">1:1 NAP &amp; Class 7–12 / JEE</text>
      <text x="16" y="109" fill="#9CA3AF" font-size="10.5">batch timing synchronization</text>
    </g>

    <text x="811" y="122" fill="#34D399" font-size="18" font-weight="800" text-anchor="middle">→</text>

    <g transform="translate(824, 58)">
      <rect width="232" height="122" rx="8" fill="#0F291E" stroke="#10B981" stroke-width="1.2"/>
      <text x="16" y="24" fill="#34D399" font-size="10" font-weight="700">4. STOREFRONT ACTION</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="13" font-weight="700">Tap "Get Directions"</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="13" font-weight="700">&amp; Walk-In Admission</text>
      <text x="16" y="98" fill="#34D399" font-size="11" font-weight="700">#1 Google Maps Position</text>
    </g>
  </g>

  <!-- Bottom Flow: Service-Area Business (Bharat Relocators & Nayak Decorators) -->
  <g transform="translate(60, 382)">
    <rect width="1080" height="205" rx="12" fill="#1A1A1A" stroke="#10B981" stroke-width="1.5"/>
    <rect x="24" y="18" width="250" height="24" rx="6" fill="#10B981" fill-opacity="0.2"/>
    <text x="36" y="34" fill="#34D399" font-size="11" font-weight="700">PATHWAY 02 • SERVICE-AREA (SAB) MODEL</text>
    <text x="290" y="34" fill="#F8F8F8" font-size="13" font-weight="700">Bharat Relocators (Haltu, 4.9★) &amp; Nayak Decorators (Behala, 4.8★)</text>

    <!-- 4 Flow Nodes -->
    <g transform="translate(24, 58)">
      <rect width="235" height="122" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#34D399" font-size="10" font-weight="700">1. HYPERLOCAL INTENT QUERY</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="12.5" font-weight="600">"packers movers Haltu" or</text>
      <text x="16" y="66" fill="#F8F8F8" font-size="12.5" font-weight="600">"caterer in Behala"</text>
      <text x="16" y="94" fill="#9CA3AF" font-size="10.5">Homeowner needs team to</text>
      <text x="16" y="109" fill="#9CA3AF" font-size="10.5">visit their residence/venue</text>
    </g>

    <text x="271" y="122" fill="#34D399" font-size="18" font-weight="800" text-anchor="middle">→</text>

    <g transform="translate(284, 58)">
      <rect width="245" height="122" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#34D399" font-size="10" font-weight="700">2. COVERAGE &amp; TRUST CHECK</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="12.5" font-weight="600">Verified South Kolkata zone</text>
      <text x="16" y="66" fill="#F8F8F8" font-size="12.5" font-weight="600">+ 300+ / 50+ real reviews</text>
      <text x="16" y="94" fill="#9CA3AF" font-size="10.5">Map Justification confirms</text>
      <text x="16" y="109" fill="#9CA3AF" font-size="10.5">specific neighborhood service</text>
    </g>

    <text x="541" y="122" fill="#34D399" font-size="18" font-weight="800" text-anchor="middle">→</text>

    <g transform="translate(554, 58)">
      <rect width="245" height="122" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="24" fill="#34D399" font-size="10" font-weight="700">3. DEDICATED SERVICE URL</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="12.5" font-weight="600">Route / catering menu page</text>
      <text x="16" y="66" fill="#F8F8F8" font-size="12.5" font-weight="600">with instant quote path</text>
      <text x="16" y="94" fill="#9CA3AF" font-size="10.5">Validates fleet, menu items</text>
      <text x="16" y="109" fill="#9CA3AF" font-size="10.5">&amp; transparent process</text>
    </g>

    <text x="811" y="122" fill="#34D399" font-size="18" font-weight="800" text-anchor="middle">→</text>

    <g transform="translate(824, 58)">
      <rect width="232" height="122" rx="8" fill="#0F291E" stroke="#10B981" stroke-width="1.2"/>
      <text x="16" y="24" fill="#34D399" font-size="10" font-weight="700">4. SAB DIRECT ACTION</text>
      <text x="16" y="48" fill="#F8F8F8" font-size="13" font-weight="700">Tap "Call Now" or</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="13" font-weight="700">WhatsApp Quote Form</text>
      <text x="16" y="98" fill="#34D399" font-size="11" font-weight="700">High-Intent Phone Inquiries</text>
    </g>
  </g>

  <!-- Footer Note -->
  <text x="600" y="622" fill="#9CA3AF" font-size="11" text-anchor="middle">Spot My Business • Operational Business Model Taxonomy (/industries) • Recorded Client Portfolio Snapshots</text>
</svg>
`;

// 7. Post 3 Hero: 5-Step Local & Hyperlocal SEO Strategy Diagram
const localSeoFiveStepSvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Subtle Glows -->
  <circle cx="600" cy="180" r="260" fill="#8B5E3C" fill-opacity="0.1"/>
  <circle cx="920" cy="480" r="220" fill="#10B981" fill-opacity="0.06"/>

  <!-- Header -->
  <text x="60" y="62" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • HYPERLOCAL &amp; LOCAL SEO ARCHITECTURE (2026)</text>
  <text x="60" y="96" fill="#F8F8F8" font-size="24.5" font-weight="700">The 5-Step Local SEO System: Website ↔ Google Maps ↔ Near Me Intent</text>
  <text x="60" y="122" fill="#CFCFCF" font-size="13.5">Building durable neighborhood search visibility across Kolkata and Indian markets without thin doorway pages</text>

  <!-- Central Hub Banner -->
  <g transform="translate(60, 148)">
    <rect width="1080" height="74" rx="10" fill="#1B1815" stroke="#8B5E3C" stroke-width="1.5"/>
    <text x="28" y="30" fill="#D4A373" font-size="11" font-weight="700" letter-spacing="1">CORE ARCHITECTURAL PRINCIPLE (WHITESPARK 2026 BENCHMARK)</text>
    <text x="28" y="54" fill="#F8F8F8" font-size="14" font-weight="600">Website On-Page Signals Drive 33% of Local Organic &amp; 15% of Local Pack Rankings — The Website Anchors Every Surface</text>
    <rect x="910" y="20" width="145" height="34" rx="8" fill="#10B981" fill-opacity="0.2"/>
    <text x="982" y="42" fill="#34D399" font-size="11" font-weight="700" text-anchor="middle">ANTI-DOORWAY</text>
  </g>

  <!-- 5-Step Horizontal Cards (y=244) -->
  <g transform="translate(60, 244)">
    <!-- Step 01 -->
    <g transform="translate(0, 0)">
      <rect width="204" height="295" rx="10" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.4"/>
      <rect x="16" y="18" width="58" height="24" rx="6" fill="#8B5E3C" fill-opacity="0.25"/>
      <text x="45" y="34" fill="#E7D3B0" font-size="10.5" font-weight="700" text-anchor="middle">STEP 01</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="14.5" font-weight="700">Local Intent &amp;</text>
      <text x="16" y="88" fill="#F8F8F8" font-size="14.5" font-weight="700">Model Audit</text>
      <text x="16" y="118" fill="#CFCFCF" font-size="11.5">Map real neighborhood</text>
      <text x="16" y="136" fill="#CFCFCF" font-size="11.5">phrases ("in Behala",</text>
      <text x="16" y="154" fill="#CFCFCF" font-size="11.5">"near Haltu", "Dankuni")</text>
      <text x="16" y="172" fill="#CFCFCF" font-size="11.5">&amp; buyer urgency.</text>
      <rect x="16" y="228" width="172" height="48" rx="6" fill="#141414" stroke="#2B2B2B"/>
      <text x="26" y="248" fill="#D4A373" font-size="10" font-weight="700">FOCUS:</text>
      <text x="26" y="264" fill="#9CA3AF" font-size="10.5">Hyperlocal vs. City-Wide</text>
    </g>

    <!-- Step 02 -->
    <g transform="translate(219, 0)">
      <rect width="204" height="295" rx="10" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.4"/>
      <rect x="16" y="18" width="58" height="24" rx="6" fill="#8B5E3C" fill-opacity="0.25"/>
      <text x="45" y="34" fill="#E7D3B0" font-size="10.5" font-weight="700" text-anchor="middle">STEP 02</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="14.5" font-weight="700">Anti-Doorway</text>
      <text x="16" y="88" fill="#F8F8F8" font-size="14.5" font-weight="700">Service Pages</text>
      <text x="16" y="118" fill="#CFCFCF" font-size="11.5">Create distinct pages</text>
      <text x="16" y="136" fill="#CFCFCF" font-size="11.5">for genuine corridors</text>
      <text x="16" y="154" fill="#CFCFCF" font-size="11.5">with real landmarks,</text>
      <text x="16" y="172" fill="#CFCFCF" font-size="11.5">menus &amp; logistics.</text>
      <rect x="16" y="228" width="172" height="48" rx="6" fill="#141414" stroke="#2B2B2B"/>
      <text x="26" y="248" fill="#34D399" font-size="10" font-weight="700">PROOF:</text>
      <text x="26" y="264" fill="#9CA3AF" font-size="10.5">Nayak &amp; Republic URLs</text>
    </g>

    <!-- Step 03 -->
    <g transform="translate(438, 0)">
      <rect width="204" height="295" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
      <rect x="16" y="18" width="58" height="24" rx="6" fill="#262626"/>
      <text x="45" y="34" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 03</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="14.5" font-weight="700">Internal Links &amp;</text>
      <text x="16" y="88" fill="#F8F8F8" font-size="14.5" font-weight="700">Contact Paths</text>
      <text x="16" y="118" fill="#CFCFCF" font-size="11.5">Connect hub-and-spoke</text>
      <text x="16" y="136" fill="#CFCFCF" font-size="11.5">service pages to friction-</text>
      <text x="16" y="154" fill="#CFCFCF" font-size="11.5">free Call, WhatsApp &amp;</text>
      <text x="16" y="172" fill="#CFCFCF" font-size="11.5">quote inquiry forms.</text>
      <rect x="16" y="228" width="172" height="48" rx="6" fill="#141414" stroke="#2B2B2B"/>
      <text x="26" y="248" fill="#D4A373" font-size="10" font-weight="700">SCHEMA:</text>
      <text x="26" y="264" fill="#9CA3AF" font-size="10.5">Service + areaServed</text>
    </g>

    <!-- Step 04 -->
    <g transform="translate(657, 0)">
      <rect width="204" height="295" rx="10" fill="#1A1A1A" stroke="#2D2D2D" stroke-width="1.4"/>
      <rect x="16" y="18" width="58" height="24" rx="6" fill="#262626"/>
      <text x="45" y="34" fill="#D4A373" font-size="10.5" font-weight="700" text-anchor="middle">STEP 04</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="14.5" font-weight="700">NAP Symmetry &amp;</text>
      <text x="16" y="88" fill="#F8F8F8" font-size="14.5" font-weight="700">Indian Citations</text>
      <text x="16" y="118" fill="#CFCFCF" font-size="11.5">1:1 character match</text>
      <text x="16" y="136" fill="#CFCFCF" font-size="11.5">across website, GBP &amp;</text>
      <text x="16" y="154" fill="#CFCFCF" font-size="11.5">trusted Indian business</text>
      <text x="16" y="172" fill="#CFCFCF" font-size="11.5">directories (29% AI wt).</text>
      <rect x="16" y="228" width="172" height="48" rx="6" fill="#141414" stroke="#2B2B2B"/>
      <text x="26" y="248" fill="#34D399" font-size="10" font-weight="700">TRUST:</text>
      <text x="26" y="264" fill="#9CA3AF" font-size="10.5">Zero Automated Blasts</text>
    </g>

    <!-- Step 05 -->
    <g transform="translate(876, 0)">
      <rect width="204" height="295" rx="10" fill="#1A1A1A" stroke="#10B981" stroke-width="1.4"/>
      <rect x="16" y="18" width="58" height="24" rx="6" fill="#10B981" fill-opacity="0.2"/>
      <text x="45" y="34" fill="#34D399" font-size="10.5" font-weight="700" text-anchor="middle">STEP 05</text>
      <text x="16" y="68" fill="#F8F8F8" font-size="14.5" font-weight="700">Search Console</text>
      <text x="16" y="88" fill="#F8F8F8" font-size="14.5" font-weight="700">Refinement</text>
      <text x="16" y="118" fill="#CFCFCF" font-size="11.5">Track real neighborhood</text>
      <text x="16" y="136" fill="#CFCFCF" font-size="11.5">query impressions, clicks</text>
      <text x="16" y="154" fill="#CFCFCF" font-size="11.5">&amp; review themes to</text>
      <text x="16" y="172" fill="#CFCFCF" font-size="11.5">refine pages quarterly.</text>
      <rect x="16" y="228" width="172" height="48" rx="6" fill="#141414" stroke="#2B2B2B"/>
      <text x="26" y="248" fill="#34D399" font-size="10" font-weight="700">TELEMETRY:</text>
      <text x="26" y="264" fill="#9CA3AF" font-size="10.5">1st-Party GSC Data</text>
    </g>
  </g>

  <!-- Bottom Bar -->
  <rect x="60" y="562" width="1080" height="62" rx="10" fill="#181818" stroke="#2B2B2B"/>
  <text x="84" y="587" fill="#D4A373" font-size="11.5" font-weight="700">KOLKATA &amp; PAN-INDIA COVERAGE:</text>
  <text x="295" y="587" fill="#F3F4F6" font-size="11.5">Santoshpur HQ • Behala • Haltu • Salt Lake • Dankuni • Delhi NCR • Mumbai • Bengaluru • 20 Verified Markets</text>
  <text x="84" y="607" fill="#9CA3AF" font-size="10.5">Spot My Business (/services/local-seo &amp; /locations) • Remote Engineering from Middle Rd, Sen Para, Santoshpur, Kolkata 700075</text>
</svg>
`;

// 8. Post 3 Visual 1: Authentic Hyperlocal Page vs. Thin Doorway Page
const authenticVsDoorwaySvg = `
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
  <!-- Background -->
  <rect width="1200" height="675" fill="#0B0B0B"/>
  <rect x="20" y="20" width="1160" height="635" rx="16" fill="#141414" stroke="#242424" stroke-width="2"/>

  <!-- Glows -->
  <circle cx="300" cy="340" r="240" fill="#EF4444" fill-opacity="0.05"/>
  <circle cx="900" cy="340" r="260" fill="#10B981" fill-opacity="0.07"/>

  <!-- Header -->
  <text x="60" y="62" fill="#D4A373" font-size="12" font-weight="700" letter-spacing="3">SPOT MY BUSINESS • ANTI-DOORWAY ARCHITECTURE STANDARD</text>
  <text x="60" y="96" fill="#F8F8F8" font-size="24" font-weight="700">Thin Programmatic Doorway Page vs. Authentic Hyperlocal Landing Page</text>
  <text x="60" y="122" fill="#CFCFCF" font-size="13.5">Why Google demotes mass-duplicated city swaps—and how real neighborhood context wins "Near Me" searches</text>

  <!-- Left Panel: Thin Doorway Spam -->
  <g transform="translate(60, 150)">
    <rect width="510" height="430" rx="12" fill="#1A1A1A" stroke="#3F2323" stroke-width="1.5"/>
    <rect width="510" height="46" rx="12" fill="#261919"/>
    <circle cx="26" cy="23" r="6" fill="#EF4444"/>
    <text x="44" y="28" fill="#FCA5A5" font-size="12" font-weight="700" letter-spacing="0.5">THIN DOORWAY PAGE (GOOGLE SPAM POLICY VIOLATION)</text>

    <g transform="translate(24, 66)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">URL &amp; TEMPLATE PATTERN</text>
      <text x="16" y="42" fill="#F87171" font-size="12" font-weight="600">✗ 150 cloned URLs (/best-service-in-[city-name])</text>
      <text x="16" y="56" fill="#9CA3AF" font-size="10.5">   with identical paragraphs and swapped city tokens</text>
    </g>

    <g transform="translate(24, 140)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">LOCAL OPERATIONAL CONTEXT</text>
      <text x="16" y="42" fill="#E5E7EB" font-size="12">✗ Zero local landmarks, zero real project history,</text>
      <text x="16" y="56" fill="#9CA3AF" font-size="10.5">   and unverified claims of "local branch offices"</text>
    </g>

    <g transform="translate(24, 214)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">SCHEMA &amp; GBP ALIGNMENT</text>
      <text x="16" y="42" fill="#E5E7EB" font-size="12">✗ Fake LocalBusiness addresses in cities where</text>
      <text x="16" y="56" fill="#9CA3AF" font-size="10.5">   the business has no physical staff or signage</text>
    </g>

    <g transform="translate(24, 288)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#2B2B2B"/>
      <text x="16" y="22" fill="#9CA3AF" font-size="10" font-weight="700">GSC &amp; USER BEHAVIOR OUTCOME</text>
      <text x="16" y="42" fill="#F87171" font-size="12">✗ Flagged as "Crawled - currently not indexed"</text>
      <text x="16" y="56" fill="#9CA3AF" font-size="10.5">   or demoted during Google Core &amp; Spam updates</text>
    </g>

    <rect x="24" y="366" width="462" height="44" rx="8" fill="#261919"/>
    <text x="255" y="393" fill="#FCA5A5" font-size="11.5" font-weight="700" text-anchor="middle">RESULT: Zero sustainable traffic &amp; domain-wide trust decay</text>
  </g>

  <!-- Right Panel: Authentic Hyperlocal Page (SMB Standard) -->
  <g transform="translate(630, 150)">
    <rect width="510" height="430" rx="12" fill="#1A1A1A" stroke="#8B5E3C" stroke-width="1.8"/>
    <rect width="510" height="46" rx="12" fill="#231D16"/>
    <circle cx="26" cy="23" r="6" fill="#10B981"/>
    <text x="44" y="28" fill="#E7D3B0" font-size="12" font-weight="700" letter-spacing="0.5">AUTHENTIC HYPERLOCAL PAGE (SMB VERIFIED STANDARD)</text>

    <g transform="translate(24, 66)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#8B5E3C" stroke-width="1.2"/>
      <text x="16" y="22" fill="#D4A373" font-size="10" font-weight="700">VERIFIED CLIENT URL ARCHITECTURE</text>
      <text x="16" y="42" fill="#34D399" font-size="11.5" font-weight="600">✓ nayakcaterer.com/kolkata/caterers-in-behala</text>
      <text x="16" y="56" fill="#34D399" font-size="11.5" font-weight="600">✓ republicpackers.com/kolkata-packers-movers-west-bengal</text>
    </g>

    <g transform="translate(24, 140)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="22" fill="#D4A373" font-size="10" font-weight="700">GENUINE NEIGHBORHOOD &amp; ROUTE PROOF</text>
      <text x="16" y="42" fill="#F8F8F8" font-size="12">✓ Specific catering menus, transit corridors, society</text>
      <text x="16" y="56" fill="#9CA3AF" font-size="10.5">   loading logistics, and transparent service scope</text>
    </g>

    <g transform="translate(24, 214)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#2D2D2D"/>
      <text x="16" y="22" fill="#D4A373" font-size="10" font-weight="700">HONEST SCHEMA &amp; REMOTE DISCLOSURE</text>
      <text x="16" y="42" fill="#F8F8F8" font-size="12">✓ Service schema with areaServed (City/State) tied</text>
      <text x="16" y="56" fill="#9CA3AF" font-size="10.5">   to verified headquarters — zero fake branch pins</text>
    </g>

    <g transform="translate(24, 288)">
      <rect width="462" height="62" rx="8" fill="#141414" stroke="#10B981" stroke-width="1.2"/>
      <text x="16" y="22" fill="#34D399" font-size="10" font-weight="700">RECORDED CLIENT SNAPSHOT OUTCOMES</text>
      <text x="16" y="42" fill="#F8F8F8" font-size="12" font-weight="600">✓ Nayak Decorators (4.8★, 50+) • #1 Near Me Searches</text>
      <text x="16" y="56" fill="#F8F8F8" font-size="12" font-weight="600">✓ Republic Packers (4.7★, 600+) • Top 10 Movers Kolkata</text>
    </g>

    <rect x="24" y="366" width="462" height="44" rx="8" fill="#0F291E" stroke="#10B981" stroke-width="1"/>
    <text x="255" y="393" fill="#34D399" font-size="11.5" font-weight="700" text-anchor="middle">RESULT: High-intent neighborhood calls &amp; AI Overview citations</text>
  </g>

  <!-- Bottom Caption -->
  <text x="600" y="618" fill="#9CA3AF" font-size="11" text-anchor="middle">Recorded client project snapshots from Spot My Business portfolio (/case-studies) • Anti-Doorway Local SEO Standard</text>
</svg>
`;

async function generate() {
  const file1 = path.join(outputDir, 'gbp-website-alignment-kolkata.webp');
  const file2 = path.join(outputDir, 'google-maps-call-growth-kolkata.webp');
  const file3 = path.join(outputDir, 'gbp-optimization-9-step-checklist.webp');
  const file4 = path.join(outputDir, 'science-squad-gbp-comparison.webp');
  const file5 = path.join(outputDir, 'google-maps-seo-storefront-vs-sab.webp');
  const file6 = path.join(outputDir, 'storefront-vs-sab-conversion-flow.webp');
  const file7 = path.join(outputDir, 'local-seo-5-step-strategy-india.webp');
  const file8 = path.join(outputDir, 'authentic-location-page-vs-doorway.webp');

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

  console.log('Rendering gbp-optimization-9-step-checklist.webp...');
  await sharp(Buffer.from(checklistHeroSvg))
    .webp({ quality: 55, effort: 6 })
    .toFile(file3);
  console.log('Saved:', file3);

  console.log('Rendering science-squad-gbp-comparison.webp...');
  await sharp(Buffer.from(scienceSquadComparisonSvg))
    .webp({ quality: 72, effort: 6 })
    .toFile(file4);
  console.log('Saved:', file4);

  console.log('Rendering google-maps-seo-storefront-vs-sab.webp...');
  await sharp(Buffer.from(mapsStorefrontVsSabSvg))
    .webp({ quality: 62, effort: 6 })
    .toFile(file5);
  console.log('Saved:', file5);

  console.log('Rendering storefront-vs-sab-conversion-flow.webp...');
  await sharp(Buffer.from(storefrontVsSabFlowSvg))
    .webp({ quality: 62, effort: 6 })
    .toFile(file6);
  console.log('Saved:', file6);

  console.log('Rendering local-seo-5-step-strategy-india.webp...');
  await sharp(Buffer.from(localSeoFiveStepSvg))
    .webp({ quality: 62, effort: 6 })
    .toFile(file7);
  console.log('Saved:', file7);

  console.log('Rendering authentic-location-page-vs-doorway.webp...');
  await sharp(Buffer.from(authenticVsDoorwaySvg))
    .webp({ quality: 62, effort: 6 })
    .toFile(file8);
  console.log('Saved:', file8);
}

generate().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
