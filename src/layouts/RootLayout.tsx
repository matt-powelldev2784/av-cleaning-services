import { Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-700">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
