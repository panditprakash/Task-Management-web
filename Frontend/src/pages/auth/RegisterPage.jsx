import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import AuthShell from "../../components/auth/AuthShell";

function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault(); if (isSubmitting) return; setIsSubmitting(true);
    try { const response = await registerUser(formData); login(response.data.user, response.data.token); toast.success("Your workspace is ready!"); navigate("/dashboard"); }
    catch (error) { toast.error(error.response?.data?.message || "We couldn't create your account. Try again."); }
    finally { setIsSubmitting(false); }
  };
  const fields = [{ label: "Full name", name: "name", type: "text", placeholder: "Your name", icon: UserRound, autoComplete: "name" }, { label: "Email address", name: "email", type: "email", placeholder: "you@example.com", icon: Mail, autoComplete: "email" }];
  return <AuthShell title="Create your account" subtitle="Start organizing the work that matters.">
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      {fields.map(({ label, name, type, placeholder, icon: Icon, autoComplete }) => <label key={name} className="block text-sm font-semibold text-slate-700">{label}<span className="relative mt-1.5 block"><Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} /><input required name={name} type={type} autoComplete={autoComplete} value={formData[name]} onChange={update} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /></span></label>)}
      <label className="block text-sm font-semibold text-slate-700">Password<span className="relative mt-1.5 block"><LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} /><input required minLength="6" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" value={formData.password} onChange={update} placeholder="At least 6 characters" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600">{showPassword ? <EyeOff size={19} /> : <Eye size={19} />}</button></span></label>
      <p className="text-xs leading-5 text-slate-500">By continuing, you agree to use TaskFlow responsibly.</p><button disabled={isSubmitting} className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Creating account…" : "Create account"}</button>
    </form><p className="mt-7 text-center text-sm text-slate-500">Already have an account? <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-700">Sign in</Link></p>
  </AuthShell>;
}

export default RegisterPage;
