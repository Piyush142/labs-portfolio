import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      style={{
        padding: '120px 32px',
        maxWidth: 640,
        margin: '0 auto',
        textAlign: 'center',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <p
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 13,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--ink-faint)',
          fontWeight: 500,
        }}
      >
        404 — Lost on the workbench
      </p>
      <h1
        style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
        }}
      >
        We can't find that page. We checked twice.
      </h1>
      <p style={{ color: 'var(--ink-soft)', fontSize: 17 }}>
        Maybe it was a writing we never published, or a project we forgot to
        ship. Either way —
      </p>
      <p>
        <Link
          to="/"
          style={{
            color: 'var(--accent)',
            borderBottom: '1px solid var(--accent)',
            fontFamily: 'var(--display)',
            fontSize: 17,
            paddingBottom: 1,
          }}
        >
          back to the front page →
        </Link>
      </p>
    </div>
  )
}
