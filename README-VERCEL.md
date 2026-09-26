# Avantti ERP - versão preparada para Vercel

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse normalmente:

- http://localhost:3000

## Validar build

```bash
npm run build
```

## Publicar na Vercel via CLI

```bash
npm install -g vercel
vercel login
vercel
```

Para produção:

```bash
vercel --prod
```

## Publicar pelo painel da Vercel

1. Envie este projeto para um repositório Git.
2. No painel da Vercel, clique em **Add New > Project**.
3. Importe o repositório.
4. A Vercel deve detectar **Next.js** automaticamente.
5. Clique em **Deploy**.

## Domínio personalizado

Depois do deploy, adicione:

`site.avanttisistemas.com.br`

em **Settings > Domains** do projeto na Vercel e siga os registros DNS exibidos pela própria Vercel.
