export default function HomePage() {
  const target = process.env.PROXY_TARGET

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 24, lineHeight: 1.6 }}>
      <h1>Proxy target not configured</h1>
      <p>
        Set <code>PROXY_TARGET</code> in Vercel to your current public origin.
      </p>
      <p>Example: <code>https://appreciate-dated-styles-watts.trycloudflare.com</code></p>
      {target ? (
        <p>
          Current value: <code>{target}</code>
        </p>
      ) : null}
    </main>
  )
}
