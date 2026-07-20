export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 ">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            P
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            PatchMind
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <button className="font-medium text-slate-600 transition-colors hover:text-slate-900">
            Login
          </button>

          <button className="rounded-2xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-blue-700">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}