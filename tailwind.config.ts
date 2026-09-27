import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy:'#08131F', paper:'#F5F7FA', ink:'#14202B', cyan:'#00C9D8', 'data-red':'#E5484D' }, fontFamily: { display:['var(--font-space)'], sans:['var(--font-inter)'] } } }, plugins: [] } satisfies Config;
