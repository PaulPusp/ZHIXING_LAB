'use client';
import {useI18n} from '@/lib/i18n';
export default function Page(){const {t}=useI18n();return <section className="hero bg-navy text-white min-h-[55vh] py-24"><div className="container-lab"><p className="eyebrow">ZHIXING Space Lab</p><h1 className="section-title mt-5">{t("Contact")}</h1><p className="text-slate-300 mt-6">{t("Coming soon.")}</p></div></section>}
