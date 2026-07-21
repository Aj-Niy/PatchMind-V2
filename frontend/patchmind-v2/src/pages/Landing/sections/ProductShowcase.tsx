export default function ProductShowcase() {
  return (
    <section className="flex flex-col justify-center w-full max-w-xl mt-12 mb-12">
      <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        ✨ AI Powered Developer Tool
      </span>

      <h1 className="text-6xl font-bold leading-tight tracking-tight text-slate-900">
        Your AI
        <br />
        Debugging Coach.
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">
        Understand bugs, receive intelligent fixes, and improve as a
        developer with AI-powered explanations built for modern engineers.
      </p>
      <div className="mt-12 h-[420px] rounded-3xl border border-slate-200 bg-white shadow-sm" />

      {/* Dashboard Preview */}
    </section>
  );
}