/**
 * Password Strength Meter
 */
function PasswordStrengthMeter({ password }) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const levels = ["Weak", "Fair", "Good", "Strong"];

  return (
    <div className="space-y-2">
      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300"
          style={{ width: `${strength * 25}%` }}
        />
      </div>

      <p className="text-sm text-slate-500">
        Strength: {levels[Math.max(0, strength - 1)] || "Weak"}
      </p>
    </div>
  );
}

export default PasswordStrengthMeter;