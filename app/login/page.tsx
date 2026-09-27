'use client';
import {useI18n} from '@/lib/i18n';
import {useEffect} from 'react';import {assetPath} from '@/components/assetPath';
export default function Login(){const {t}=useI18n();const admin=assetPath('admin/index.html');useEffect(()=>{window.location.replace(admin)},[admin]);return <section className="container-lab py-24 min-h-[50vh]"><h1 className="section-title">{t("Content editor")}</h1><p className="mt-5 text-slate-600">{t("Opening the lab editor…")}</p><a href={admin} className="text-muted-teal underline mt-5 inline-block">{t("Open the editor if you are not redirected")}</a></section>}
