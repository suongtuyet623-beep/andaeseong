"use client";

import { useI18n } from "@/components/language-provider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
      © {new Date().getFullYear()} andaeseong. {t.madeWith}
    </footer>
  );
}
