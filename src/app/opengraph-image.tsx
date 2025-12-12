import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Arsalan Javed - Business Analyst & Project Manager'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          fontFamily: 'system-ui',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            AJ
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          ARSALAN JAVED
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: '#94a3b8',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Business Analyst & Project Manager
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
            fontSize: 24,
            color: '#cbd5e1',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '48px', color: '#0ea5e9', fontWeight: 'bold' }}>3+</span>
            <span>Years Experience</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '48px', color: '#0ea5e9', fontWeight: 'bold' }}>20+</span>
            <span>Projects Delivered</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '48px', color: '#0ea5e9', fontWeight: 'bold' }}>99%</span>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
