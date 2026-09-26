'use client';

import { useEffect, useState } from 'react';

const modules = [
  ['Vendas & PDV','Pedidos, frente de caixa, comissões, metas, consignação e precificação em um fluxo conectado.'],
  ['Financeiro','Contas a pagar e receber, bancos, caixa, cobrança e visão real do fluxo financeiro.'],
  ['Estoque & Compras','Inventário, custos, depósitos, entradas por XML e compras do pedido ao recebimento.'],
  ['Fiscal','Documentos fiscais, DF-e recebidos, operações, NCM e configurações integradas.'],
  ['Gestão de Entregas','Cargas, motoristas, ocorrências, canhotos e comprovantes em uma única central.'],
  ['Intelligence','Rentabilidade, metas, capital de giro e simulações para decisões mais seguras.']
];

const whatsapp = 'https://wa.me/5584994412689?text=Olá!%20Quero%20conhecer%20as%20soluções%20da%20Avantti.';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light'|'dark'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('avantti-theme') as 'light'|'dark'|null;
    const initial = saved ?? 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem('avantti-theme', next);
  };

  return (
    <main>
      <header>
        <a className="brand" href="#inicio"><img src="/logo-avantti-sistemas.png" alt="Avantti Sistemas" /></a>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'open' : ''}>
          <a href="#inicio">Visão geral</a>
          <a href="#ecossistema">Ecossistema</a>
          <a href="#solucoes">Soluções</a>
          <a href="#publico">Para quem</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme==='dark'?'Ativar modo claro':'Ativar modo escuro'}>{theme==='dark'?'☀':'☾'}</button>
        <a className="btn top-cta" href="https://www.avanttisistemas.com.br/#/demonstracao" target="_blank" rel="noreferrer">Solicitar demonstração ↗</a>
      </header>

      <section className="hero" id="inicio">
        <div className="copy">
          <div className="eyebrow">— ERP COMPLETO PARA EMPRESAS QUE QUEREM AVANÇAR</div>
          <h1>Seu negócio<br/>em movimento.<br/><em>Sob controle.</em></h1>
          <p>Gestão, operação e inteligência conectadas em uma plataforma 100% web, criada para transformar dados do dia a dia em decisões melhores.</p>
          <div className="product-line"><span>ERP</span><i>•</i><span>COMPROVA</span><i>•</i><span>INTELLIGENCE</span></div>
          <div className="actions">
            <a className="btn" href="#ecossistema">Conheça o ecossistema →</a>
            <a href="#solucoes"><b>Explorar soluções ↓</b></a>
          </div>
          <div className="numbers">
            <span><b>360°</b><small>visão da operação</small></span>
            <span><b>1 só</b><small>ecossistema de gestão</small></span>
            <span><b>100%</b><small>web e multiempresa</small></span>
          </div>
        </div>
        <div className="visual">
          <div className="rings" />
          <div className="dashboard">
            <div className="dash-title"><span><small>AVANTTI</small><b>Visão executiva</b></span><i>SETEMBRO 2026</i></div>
            <div className="metrics">
              <span><small>Faturamento</small><b>R$ 847,2 mil</b><em>↗ 12,8%</em></span>
              <span><small>Margem bruta</small><b>32,4%</b><em>↗ 3,1%</em></span>
              <span><small>Pedidos</small><b>1.284</b><em>↗ 8,6%</em></span>
            </div>
            <div className="chart"><div><small>DESEMPENHO COMERCIAL</small><b>Vendas por período</b></div><div className="bars">{[38,52,45,64,58,79,72,94,82,106,98,125].map((h,i)=><i key={i} style={{height:h}} />)}</div></div>
            <div className="status">● Operação sincronizada <span>Atualizado agora</span></div>
          </div>
          <div className="float f1">✓ <span><small>Entregas no prazo</small><b>94,8%</b></span></div>
          <div className="float f2">◎ <span><small>Capital de giro</small><b>Saudável</b></span></div>
        </div>
      </section>

      <section className="differentials">
        <div><b>100% Web</b><span>Acesse de onde estiver</span></div>
        <div><b>Multiempresa</b><span>Uma gestão, várias operações</span></div>
        <div><b>Fiscal integrado</b><span>Documentos e processos conectados</span></div>
        <div><b>Inteligência gerencial</b><span>Dados transformados em ação</span></div>
      </section>

      <section className="manifest"><small>AVANTTI ERP</small><p>Menos sistemas desconectados.<br/><b>Mais clareza para crescer.</b></p></section>

      <section className="ecosystem" id="ecossistema">
        <div className="section-head center"><small>ECOSSISTEMA AVANTTI</small><h2>Um conjunto de soluções para<br/>gestão, execução e decisão.</h2><p>Produtos complementares, desenvolvidos para trabalhar juntos e acompanhar a evolução da sua empresa.</p></div>
        <div className="eco-grid">
          <article className="eco-card featured">
            <div className="eco-logo"><img src="/logo-avantti-sistemas.png" alt="Avantti ERP" /></div>
            <small>GESTÃO EMPRESARIAL</small><h3>Avantti ERP</h3><p>Vendas, estoque, compras, financeiro, fiscal e gestão operacional em uma plataforma integrada e 100% web.</p>
            <a className="text-link" href="#solucoes">Conhecer o ERP →</a>
          </article>
          <article className="eco-card comprova-card">
            <div className="eco-logo"><img src="/logo-avantti-comprova.png" alt="Avantti Comprova" /></div>
            <small>COMPROVAÇÃO E RASTREABILIDADE</small><h3>Avantti Comprova</h3><p>Centralize canhotos, imagens, comprovantes e evidências de entrega com mais organização, rastreabilidade e agilidade.</p>
            <a className="btn" href="https://comprova.avanttisistemas.com.br" target="_blank" rel="noreferrer">Acessar site do Comprova ↗</a>
          </article>
          <article className="eco-card intelligence-card">
            <div className="intel-mark">A<span>+</span></div>
            <small>ANÁLISE E DECISÃO</small><h3>Avantti Intelligence</h3><p>Indicadores, rentabilidade, metas e análises que transformam os dados do ERP em informação útil para decisões mais seguras.</p>
            <a className="text-link" href="#intelligence">Conhecer o Intelligence →</a>
          </article>
        </div>
      </section>

      <section className="solutions" id="solucoes">
        <div className="heading"><div><small>SOLUÇÕES INTEGRADAS</small><h2>Tudo o que sua empresa precisa.<br/>No mesmo ritmo.</h2></div><p>Do primeiro pedido à análise do resultado, cada módulo conversa com o próximo — reduzindo retrabalho e ampliando sua visão.</p></div>
        <div className="grid">{modules.map((m,i)=><article key={m[0]}><small>0{i+1}</small><h3>{m[0]}</h3><p>{m[1]}</p><a href="#contato">Saiba mais →</a></article>)}</div>
      </section>

      <section className="comprova-section">
        <div className="comprova-visual"><img src="/logo-avantti-comprova.png" alt="Avantti Comprova"/><div className="proof-card"><b>Entrega comprovada</b><span>Imagem • Canhoto • Ocorrência • Data</span></div></div>
        <div className="comprova-copy"><small>AVANTTI COMPROVA</small><h2>Comprove entregas.<br/>Organize evidências.<br/>Ganhe rastreabilidade.</h2><p>Uma solução para centralizar comprovantes de entrega e documentos, reduzindo a busca manual por informações e facilitando a conferência de cada operação.</p><ul><li>Canhotos e comprovantes em um só lugar</li><li>Imagens vinculadas à entrega</li><li>Histórico e rastreabilidade por documento</li><li>Consulta simples para sua equipe</li></ul><a className="btn" href="https://comprova.avanttisistemas.com.br" target="_blank" rel="noreferrer">Conhecer o Avantti Comprova ↗</a></div>
      </section>

      <section className="intel" id="intelligence">
        <div className="intel-art"><div className="core"><small>AVANTTI</small><b>INTELLIGENCE</b><i>●</i></div></div>
        <div className="intel-copy"><small>DECISÃO BASEADA EM DADOS</small><h2>Seu ERP também<br/>pode pensar à frente.</h2><p>Indicadores financeiros, comerciais, compras e estoque conectados para revelar o que merece sua atenção — antes que vire um problema.</p><ul><li><i>01</i> Cockpit financeiro e gerencial</li><li><i>02</i> Rentabilidade por produto e cliente</li><li><i>03</i> Metas, comparativos e simuladores</li><li><i>04</i> Capital de giro e visão de tendências</li></ul><a className="btn light" href="#contato">Quero conhecer →</a></div>
      </section>
