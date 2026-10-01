import { CheckCircle2, LayoutDashboard, Sparkles } from "lucide-react";

function AuthShell({
  children,
  title,
  subtitle,
  quote = "A calmer way to get things done.",
}) {
  return (
    <main className="min-h-dvh bg-slate-50 sm:p-6 lg:p-8">
      <div className="mx-auto grid min-h-dvh max-w-6xl overflow-hidden bg-white sm:min-h-[calc(100dvh-3rem)] sm:rounded-[2rem] sm:shadow-2xl sm:shadow-indigo-950/10 lg:grid-cols-[1.05fr_.95fr] lg:min-h-[calc(100dvh-4rem)]">
        <section className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/40 blur-3xl" />
          <div className="relative flex items-center gap-3 text-lg font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-indigo-600">
              <LayoutDashboard size={21} />
            </span>
            TaskFlow
          </div>
          <div className="relative my-auto">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-indigo-100">
              <Sparkles size={15} /> Focused work, better days
            </span>
            <h1 className="max-w-md text-5xl font-semibold leading-[1.05] tracking-tight">
              Plan less. <span className="text-indigo-300">Finish more.</span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
              Organize your priorities, turn intentions into progress, and keep
              every project moving forward.
            </p>
            <div className="mt-10 space-y-3 text-sm text-slate-200">
              {[
                "Simple task organization",
                "Progress at a glance",
                "Your work, always in sync",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-indigo-300" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <p className="relative text-sm italic text-slate-400">“{quote}”</p>
        </section>
        <section className="flex min-w-0 items-center justify-center px-5 py-8 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center gap-3 text-lg font-bold text-slate-900 sm:mb-10 lg:hidden">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white">
                <LayoutDashboard size={21} />
              </span>
              TaskFlow
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:mb-3 sm:text-sm">
              Welcome to TaskFlow
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">{subtitle}</p>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthShell;
