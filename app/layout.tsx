export const metadata = {
  title: 'OpenGallery Proxy',
  description: 'Temporary Vercel proxy front for a local site.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
