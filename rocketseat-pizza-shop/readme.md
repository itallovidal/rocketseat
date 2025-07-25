# Pizza Shop
O objetivo deste projeto é através de uma plataforma de gerenciamento de pedidos de restaurante aprender conceitos importantes não apenas de React, mas também com a comunicação com APIs via requisições HTTP. Não apenas isso, estudar sobre testes de aplicação, unitários e e2e.

Foram utilizadas uma série de tecnologias no desenvolvimento deste projeto como React Router DOM, React Query, Vite, React Hook Form, Shadcn/ui, tailwind, playwright, vitest e mais algumas outras.

Certificado do módulo:
https://app.rocketseat.com.br/certificates/59883e05-2a83-482a-a86c-4ac8308ffded

# Setup e Inicialização
Primeiramente devemos instalar as dependências:
```bash
npm i
```
Depois das dependências instaladas, temos duas opções:

### Modo de Testes
- Será mostrado dados mockados utilizando a biblioteca MSW (Mock Service Worker)
- Mais simples, mais rápido, dados menos verossímeis. 
```bash
npm run dev:test
```

### Desenvolvimento
- Será mostrado dados gerados mais verossímeis
- A API deverá ser baixada e colocada no ar:
```git
git clone https://github.com/rocketseat-education/pizzashop-api
```

No terminal da API:
```
bun i
docker compose up -d
bun migrate
bun seed
bun dev
```
No terminal deste projeto:
```bash
npm run dev
```

