'use client';
import {createContext,useCallback,useContext,useEffect,useState} from 'react';
import translations from '@/content/translations.json';
export type Language='en'|'zh'|'fr';
const languages:Language[]=['en','zh','fr'];
const dictionary=Object.fromEntries(translations.entries.map(entry=>[entry.source,{zh:entry.zh,fr:entry.fr}]));
const LanguageContext=createContext<{lang:Language;setLang:(v:Language)=>void;t:(v:string)=>string}>({lang:'en',setLang:()=>{},t:v=>v});
export function LanguageProvider({children}:{children:React.ReactNode}){
 const [lang,setLanguage]=useState<Language>('en');
 useEffect(()=>{const q=new URLSearchParams(window.location.search).get('lang');const saved=localStorage.getItem('zhixing-language');const initial=languages.find(x=>x===q)||languages.find(x=>x===saved)||'en';setLanguage(initial);document.documentElement.lang=initial==='zh'?'zh-CN':initial},[]);
 const setLang=useCallback((next:Language)=>{setLanguage(next);localStorage.setItem('zhixing-language',next);document.documentElement.lang=next==='zh'?'zh-CN':next;const url=new URL(window.location.href);url.searchParams.set('lang',next);window.history.replaceState(window.history.state,'',url)},[]);
 const t=useCallback((value:string)=>lang==='en'?value:((dictionary as Record<string,Partial<Record<Language,string>>>)[value]?.[lang]||value),[lang]);
 return <LanguageContext.Provider value={{lang,setLang,t}}>{children}</LanguageContext.Provider>
}
export const useI18n=()=>useContext(LanguageContext);
