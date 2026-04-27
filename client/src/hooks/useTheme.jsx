// Theme is now always dark neon — no toggle needed
// Keeping hook for compatibility if referenced elsewhere
import { useState } from 'react';

export default function useTheme() {
  const [theme] = useState('dark');
  return { theme, isDark: true };
}