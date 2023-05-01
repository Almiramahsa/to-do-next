'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const path = usePathname();
  const active = href === path;

  return (
    <Link className={active ? 'font-bold font-serif, text-white' : 'font-light, text-slate-200 opacity-40'} href={href}>
      {children}
    </Link>
  );
}
