export default function AuthPanel() {
  return (
    <section className="flex flex-1 items-center justify-center mt-12 mb-12">
      <div className="w-full max-w-md">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
          PatchMind
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-500">
          Sign in to continue your debugging journey.
        </p>
      </div>
    </section>
  );
}
