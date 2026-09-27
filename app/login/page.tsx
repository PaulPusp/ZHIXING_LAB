'use client';
import {useEffect} from 'react';import {assetPath} from '@/components/assetPath';
export default function Login(){const admin=assetPath('admin/index.html');useEffect(()=>{window.location.replace(admin)},[admin]);return <section className="container-lab py-24 min-h-[50vh]"><h1 className="section-title">Content editor</h1><p className="mt-5 text-slate-600">Opening the lab editor…</p><a href={admin} className="text-[#00828d] underline mt-5 inline-block">Open the editor if you are not redirected</a></section>}
