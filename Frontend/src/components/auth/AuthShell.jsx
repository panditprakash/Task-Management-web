// import { CheckCircle2, LayoutDashboard, Sparkles } from "lucide-react";

// function AuthShell({
//   children,
//   title,
//   subtitle,
//   quote = "A calmer way to get things done.",
// }) {
//   return (
//     <main className="min-h-dvh bg-slate-50 sm:p-6 lg:p-8">
//       <div className="mx-auto grid min-h-dvh max-w-6xl overflow-hidden bg-white sm:min-h-[calc(100dvh-3rem)] sm:rounded-[2rem] sm:shadow-2xl sm:shadow-indigo-950/10 lg:grid-cols-[1.05fr_.95fr] lg:min-h-[calc(100dvh-4rem)]">
//         <section className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col">
//           <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
//           <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/40 blur-3xl" />
//           <div className="relative flex items-center gap-3 text-lg font-bold">
//             <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-indigo-600">
//               <LayoutDashboard size={21} />
//             </span>
//             TaskFlow
//           </div>
//           <div className="relative my-auto">
//             <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-indigo-100">
//               <Sparkles size={15} /> Focused work, better days
//             </span>
//             <h1 className="max-w-md text-5xl font-semibold leading-[1.05] tracking-tight">
//               Plan less. <span className="text-indigo-300">Finish more.</span>
//             </h1>
//             <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
//               Organize your priorities, turn intentions into progress, and keep
//               every project moving forward.
//             </p>
//             <div className="mt-10 space-y-3 text-sm text-slate-200">
//               {[
//                 "Simple task organization",
//                 "Progress at a glance",
//                 "Your work, always in sync",
//               ].map((item) => (
//                 <p key={item} className="flex items-center gap-3">
//                   <CheckCircle2 size={18} className="text-indigo-300" />
//                   {item}
//                 </p>
//               ))}
//             </div>
//           </div>
//           <p className="relative text-sm italic text-slate-400">“{quote}”</p>
//         </section>
//         <section className="flex min-w-0 items-center justify-center px-5 py-8 sm:p-10 lg:p-14">
//           <div className="w-full max-w-md">
//             <div className="mb-8 flex items-center gap-3 text-lg font-bold text-slate-900 sm:mb-10 lg:hidden">
//               <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white">
//                 <LayoutDashboard size={21} />
//               </span>
//               TaskFlow
//             </div>
//             <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 sm:mb-3 sm:text-sm">
//               Welcome to TaskFlow
//             </p>
//             <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//               {title}
//             </h2>
//             <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">{subtitle}</p>
//             {children}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default AuthShell;

import { CheckCircle2, Circle, Clock3, ListTodo, Sparkles } from "lucide-react";

/**
 * AuthShell
 *
 * Common layout for Login and Register pages.
 *
 * Features:
 * - TaskFlow branding
 * - Responsive authentication card
 * - Decorative task-management background
 * - Mobile-first layout
 * - Background task cards on desktop
 * - Clean SaaS-style design
 */
function AuthShell({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f5f2e9]">
      {/* 
          BACKGROUND DECORATIVE SHAPES
     */}

      {/* Large orange bottom shape */}
      {/* <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-10%]
          h-[320px]
          w-[120%]
          rotate-[-8deg]
          bg-gradient-to-r
          from-amber-400
          via-orange-400
          to-amber-300
          sm:bottom-[-150px]
          sm:h-[350px]
        "
      /> */}

      {/* Top-right decorative shape */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-80px]
          top-[-80px]
          h-64
          w-64
          rotate-12
          rounded-[70px]
          bg-gradient-to-br
          from-amber-300
          to-orange-400
          opacity-90
          sm:h-80
          sm:w-80
        "
      />

      {/* Small decorative circle */}
      {/* <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[15%]
          h-4
          w-4
          rounded-full
          bg-orange-300
          opacity-70
        "
      /> */}

      {/* <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          bottom-[20%]
          h-5
          w-5
          rounded-full
          bg-amber-300
          opacity-60
        "
      /> */}

      {/* 
          BACKGROUND TASK CARDS
          Hidden on very small screens to keep mobile clean.
     */}

      {/* Left task card */}

      {/* <div
        className="
          pointer-events-none
          absolute
          left-[4%]
          top-[24%]
          hidden
          w-52
          rotate-[-7deg]
          rounded-2xl
          border
          border-white/70
          bg-white/80
          p-4
          shadow-xl
          backdrop-blur-md
          lg:block
          xl:w-60
        "
      > */}

      {/* <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
              <ListTodo size={16} className="text-indigo-600" />
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-800">Tasks</p>
              <p className="text-[10px] text-slate-400">Today</p>
            </div>
          </div>

          <Sparkles size={15} className="text-amber-500" />
        </div> */}
      {/* 
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
            <CheckCircle2 size={15} className="text-emerald-500" />
            <span className="text-[11px] text-slate-600">Design dashboard</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
            <Clock3 size={15} className="text-amber-500" />
            <span className="text-[11px] text-slate-600">API integration</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
            <Circle size={15} className="text-slate-300" />
            <span className="text-[11px] text-slate-600">Test application</span>
          </div>
        </div> */}
      {/* </div> */}

      {/* Right task card */}
      {/* <div
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[30%]
          hidden
          w-52
          rotate-[7deg]
          rounded-2xl
          border
          border-white/70
          bg-white/80
          p-4
          shadow-xl
          backdrop-blur-md
          lg:block
          xl:w-60
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-800">
              Weekly Progress
            </p>

            <p className="mt-1 text-[10px] text-slate-400">Keep going!</p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <CheckCircle2 size={18} className="text-indigo-600" />
          </div>
        </div>*/}

      {/* Progress bar */}
      {/* <div className="mb-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[10px] text-slate-400">Completed</span>

          <span className="text-xs font-semibold text-indigo-600">72%</span>
        </div> */}
      {/* </div>  */}

      {/* Small floating task card */}
      {/* <div
        className="
          pointer-events-none
          absolute
          bottom-[13%]
          left-[13%]
          hidden
          rotate-[5deg]
          rounded-xl
          bg-white/80
          px-4
          py-3
          shadow-lg
          backdrop-blur-md
          lg:block
        "
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500" />

          <span className="text-xs font-medium text-slate-600">
            12 tasks completed
          </span>
        </div>
      </div> */}

      {/* 
          MAIN CONTENT
   */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-10
          lg:px-8
        "
      >
        <div
          className="
            w-full
            max-w-md
            sm:max-w-lg
          "
        >
          {/* 
              TASKFLOW BRAND
    */}

          <div className="mb-5 text-center sm:mb-6">
            <div className="mb-2 flex items-center justify-center gap-2">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-600
                  to-violet-600
                  shadow-lg
                  shadow-indigo-500/20
                "
              >
                <CheckCircle2 size={22} className="text-white" />
              </div>

              <h1
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                "
              >
                Task<span className="text-indigo-600">Flow</span>
              </h1>
            </div>

            <p className="text-xs text-slate-500 sm:text-sm">
              Organize. Track. Accomplish.
            </p>
          </div>

          {/* 
              AUTH CARD
        */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[28px]
              border
              border-white/80
              bg-white
              px-5
              py-7
              shadow-[0_25px_70px_rgba(15,23,42,0.14)]
              sm:px-8
              sm:py-9
            "
          >
            {/* Card decorative corner */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-35px]
                top-[-35px]
                h-28
                w-28
                rotate-[-15deg]
                rounded-[35px]
                bg-gradient-to-br
                from-amber-300
                to-orange-400
                opacity-90
              "
            />

            {/* Header */}
            <div className="relative z-10">
              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-2
                  max-w-sm
                  text-sm
                  leading-5
                  text-slate-500
                  sm:text-base
                "
              >
                {subtitle}
              </p>
            </div>

            {/* Form content */}
            <div className="relative z-10">{children}</div>
          </div>

          {/* Bottom branding */}
          <p className="mt-5 text-center text-[11px] text-slate-500 sm:text-xs">
            © {new Date().getFullYear()} TaskFlow · Manage your work
            beautifully.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthShell;
