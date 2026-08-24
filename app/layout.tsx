import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans=Geist({variable:'--font-geist-sans',subsets:['latin']});const geistMono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
const title='Avantti ERP | Gestão inteligente para empresas em movimento';
const description='Vendas, financeiro, estoque, fiscal, entregas e inteligência gerencial conectados em uma única plataforma de gestão.';
export const metadata:Metadata={title,description,openGraph:{title,description,type:'website',locale:'pt_BR',images:[{url:'/og.png',width:1200,height:630,alt:'Avantti ERP — Seu negócio em movimento. Sob controle.'}]},twitter:{card:'summary_large_image',title,description,images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}