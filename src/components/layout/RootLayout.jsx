import { NavLink, Outlet } from 'react-router-dom'

const linkBase =
  'text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-brand-900">Hello React</span>
          <nav className="flex gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? 'bg-brand-500 text-white' : 'text-slate-600 hover:text-brand-500'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? 'bg-brand-500 text-white' : 'text-slate-600 hover:text-brand-500'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <footer className="border-t border-white/60 bg-white/80 py-4 text-center text-xs text-slate-500 backdrop-blur">
        © {new Date().getFullYear()} Hello React Starter
      </footer>
    </div>
  )
}

export default RootLayout
