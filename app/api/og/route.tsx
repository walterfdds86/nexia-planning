import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#001F35',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold glow — top center */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: 0,
            right: 0,
            height: 480,
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.22) 0%, transparent 65%)',
          }}
        />

        {/* Gold accent line — top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #7A5C20, #C9A84C, #E0C870, #C9A84C, #7A5C20)',
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 40px 60px 80px',
            flex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.35)',
              borderRadius: 100,
              padding: '7px 18px',
              marginBottom: 32,
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#C9A84C',
              }}
            />
            <span
              style={{
                color: '#D4B85C',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              NEXIA PLANNING
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: 22,
            }}
          >
            Dossiê estratégico{' '}
            <span style={{ color: '#C9A84C' }}>com IA</span>
            <br />
            em 5 minutos.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.55,
              marginBottom: 40,
            }}
          >
            Sua metodologia. Sua marca.
            <br />
            White-label 100%. Sem código.
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 28, marginBottom: 40 }}>
            {[
              { value: '5 min', label: 'por aluno' },
              { value: '11', label: 'seções' },
              { value: '100%', label: 'white-label' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ color: 'white', fontSize: 28, fontWeight: 800 }}>
                  {s.value}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Gold line + URL */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 3,
                background: 'linear-gradient(90deg, #C9A84C, #E0C870)',
                borderRadius: 2,
              }}
            />
            <span style={{ color: 'rgba(201,168,76,0.65)', fontSize: 16, letterSpacing: 1 }}>
              nexia-planning.vercel.app
            </span>
          </div>
        </div>

        {/* Right: PDF card mockup */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 80px 50px 20px',
            width: 320,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'white',
              borderRadius: 18,
              overflow: 'hidden',
              width: 210,
              boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.3)',
            }}
          >
            {/* Green top bar */}
            <div style={{ height: 6, background: '#10b981', flexShrink: 0 }} />

            {/* Card body */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '26px 18px',
                gap: 10,
              }}
            >
              {/* Lock circle */}
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: '50%',
                  background: '#111827',
                  border: '3px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                }}
              >
                🔐
              </div>

              {/* Title */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                  marginTop: 4,
                }}
              >
                <span
                  style={{
                    color: '#374151',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 5,
                  }}
                >
                  D O S S I Ê
                </span>
                <span
                  style={{
                    color: '#10b981',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                  }}
                >
                  ESTRATÉGICO
                </span>
              </div>

              {/* Divider */}
              <div style={{ width: 36, height: 1, background: '#e5e7eb' }} />

              {/* Expert name */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                }}
              >
                <span
                  style={{
                    color: '#111827',
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 1,
                    textAlign: 'center',
                  }}
                >
                  WALTER
                  {'\n'}FERREIRA
                </span>
                <span style={{ color: '#10b981', fontSize: 10, fontWeight: 600 }}>
                  Estratégias Digitais
                </span>
              </div>

              {/* Divider */}
              <div style={{ width: 36, height: 1, background: '#e5e7eb' }} />

              {/* Student */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <span style={{ color: '#9ca3af', fontSize: 9 }}>Elaborado para</span>
                <span style={{ color: '#111827', fontSize: 13, fontWeight: 700 }}>
                  Ana Paula
                </span>
                <span style={{ color: '#10b981', fontSize: 9, fontWeight: 600 }}>
                  Coaching de Carreira
                </span>
                <span style={{ color: '#d1d5db', fontSize: 9, marginTop: 2 }}>
                  Versão 1 — 24/04/2026
                </span>
              </div>
            </div>

            {/* Card footer */}
            <div
              style={{
                padding: '7px 12px',
                borderTop: '1px solid #f3f4f6',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#d1d5db', fontSize: 7.5 }}>
                Estratégias Digitais — Direitos Reservados — 2026
              </span>
            </div>

            {/* Green bottom bar */}
            <div style={{ height: 6, background: '#10b981', flexShrink: 0 }} />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
