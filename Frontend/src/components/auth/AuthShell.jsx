// import {
//   CheckCircle2,
//   Circle,
//   Clock3,
//   ListTodo,
//   Sparkles,
//   Menu,
// } from "lucide-react";

// function AuthShell({ title, subtitle, children }) {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-[#f5f2e9]">
//       {/* Top-right decorative shape */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-80px]
//           top-[-80px]
//           h-64
//           w-64
//           rotate-12
//           rounded-[70px]
//           bg-gradient-to-br
//           from-amber-300
//           to-orange-400
//           opacity-90
//           sm:h-80
//           sm:w-80
//         "
//       />

//       {/* 
//           MAIN CONTENT
//    */}

//       <div
//         className="
//           relative
//           z-10
//           flex
//           min-h-screen
//           w-full
//           items-center
//           justify-center
//           px-4
//           py-8
//           sm:px-6
//           sm:py-10
//           lg:px-8
//         "
//       >
//         <div
//           className="
//             w-full
//             max-w-md
//             sm:max-w-lg
//           "
//         >
//           {/* 
//               TASKFLOW BRAND
//     */}

//           <div className="mb-5 text-center sm:mb-6">
//             <div className="mb-2 flex items-center justify-center gap-2">
//               <div
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-xl
//                   bg-gradient-to-br
//                   from-indigo-600
//                   to-violet-600
//                   shadow-lg
//                   shadow-indigo-500/20
//                 "
//               >
//                 {/* <CheckCircle2 size={22} className="text-white" /> */}
//               </div>

//               <h1
//                 className="
//                   text-2xl
//                   font-extrabold
//                   tracking-tight
//                   text-slate-900
//                   sm:text-3xl
//                 "
//               >
//                 Task<span className="text-indigo-600">Flow</span>
//               </h1>
//             </div>

//             <p className="text-xs text-slate-500 sm:text-sm">
//               Organize. Track. Accomplish.
//             </p>
//           </div>

//           {/* 
//               AUTH CARD
//         */}

//           <div
//             className="
//               relative
//               w-full
//               overflow-hidden
//               rounded-[28px]
//               border
//               border-white/80
//               bg-white
//               px-5
//               py-7
//               shadow-[0_25px_70px_rgba(15,23,42,0.14)]
//               sm:px-8
//               sm:py-9
//             "
//           >
//             {/* Card decorative corner */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[-35px]
//                 top-[-35px]
//                 h-28
//                 w-28
//                 rotate-[-15deg]
//                 rounded-[35px]
//                 bg-gradient-to-br
//                 from-amber-300
//                 to-orange-400
//                 opacity-90
//               "
//             />

//             {/* Header */}
//             <div className="relative z-10">
//               <h2
//                 className="
//                   text-2xl
//                   font-bold
//                   tracking-tight
//                   text-slate-900
//                   sm:text-3xl
//                 "
//               >
//                 {title}
//               </h2>

//               <p
//                 className="
//                   mt-2
//                   max-w-sm
//                   text-sm
//                   leading-5
//                   text-slate-500
//                   sm:text-base
//                 "
//               >
//                 {subtitle}
//               </p>
//             </div>

//             {/* Form content */}
//             <div className="relative z-10">{children}</div>
//           </div>

//           {/* Bottom branding */}
//           <p className="mt-5 text-center text-[11px] text-slate-500 sm:text-xs">
//             © {new Date().getFullYear()} TaskFlow · Manage your work
//             beautifully.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthShell;



function AuthShell({ title, subtitle, children }) {
  return (
    <main
      className="
        relative isolate flex min-h-screen w-full
        items-center justify-center overflow-x-clip
        bg-[#f5f2e9] px-3 py-6
        [padding-top:env(safe-area-inset-top)]
        [padding-bottom:env(safe-area-inset-bottom)]
        sm:px-6 sm:py-10
        lg:px-8
      "
    >
      {/* Decorative background shapes */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-20 -top-20
          h-44 w-44 rotate-12 rounded-[42px]
          bg-gradient-to-br from-amber-300 to-orange-400
          opacity-70 sm:-right-24 sm:-top-24
          sm:h-72 sm:w-72 sm:rounded-[60px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-20 -left-20
          h-40 w-40 rounded-full bg-indigo-200/50
          blur-2xl sm:-bottom-28 sm:-left-28
          sm:h-64 sm:w-64
        "
      />

      {/* Main content */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-md
          min-w-0 flex-col
          sm:max-w-lg
        "
      >
        {/* TaskFlow brand */}
        <header className="mb-5 text-center sm:mb-7">
          <div className="mb-2 flex items-center justify-center gap-2">
           

            <h1
              className="
                text-2xl font-extrabold tracking-tight
                text-slate-900 sm:text-3xl 
              "
            >
              Task<span className="text-indigo-600">Flow</span>
            </h1>
          </div>

          <p className="text-xs text-slate-500 sm:text-sm">
            Organize. Track. Accomplish.
          </p>
        </header>

        {/* Authentication card */}
        <section
          className="
            relative w-full min-w-0 overflow-hidden
            rounded-2xl border border-white/80
            bg-white/95 px-4 py-6
            shadow-[0_20px_60px_rgba(15,23,42,0.12)]
            backdrop-blur-sm
            sm:rounded-[28px] sm:px-8 sm:py-9
          "
        >
          {/* Decorative corner */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-10 -top-10
              h-24 w-24 rotate-[-15deg]
              rounded-[28px]
              bg-gradient-to-br from-amber-300 to-orange-400
              opacity-60 sm:h-28 sm:w-28
            "
          />

          {/* Page heading */}
          <div className="relative z-10 min-w-0">
            <h2
              className="
                break-words text-xl font-bold
                tracking-tight text-slate-900
                sm:text-2xl md:text-3xl
              "
            >
              {title}
            </h2>

            {subtitle && (
              <p
                className="
                  mt-2 max-w-sm break-words
                  text-sm leading-6 text-slate-500
                  sm:text-base
                "
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Login / registration form */}
          <div className="relative z-10 mt-1 min-w-0">
            {children}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-5 px-2 text-center sm:mt-6">
          <p className="text-[11px] leading-5 text-slate-500 sm:text-xs">
            © {new Date().getFullYear()} TaskFlow · Manage your work
            beautifully.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default AuthShell;
