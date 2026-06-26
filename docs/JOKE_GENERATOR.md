# 🤣 Gerador de Piadas

Um gerador de piadas integrado usando a API externa **[Official Joke API](https://official-joke-api.appspot.com/)**.

## 🎯 Funcionalidades

- ✅ Gerar piada aleatória
- ✅ Gerar múltiplas piadas
- ✅ Filtrar piadas por tipo (General, Programming, Knock-knock, Spooky)
- ✅ Listar todos os tipos disponíveis
- ✅ Histórico de piadas
- ✅ Interface responsiva e moderna

## 📡 Endpoints da API

### GET `/api/jokes/random`
Retorna uma piada aleatória.

**Resposta:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "type": "general",
    "setup": "Why did the chicken cross the road?",
    "punchline": "To get to the other side"
  }
}
```

### GET `/api/jokes/random/:count`
Retorna `count` piadas aleatórias (máximo 10).

**Resposta:**
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

### GET `/api/jokes/type/:jokeType`
Retorna uma piada do tipo especificado.

**Tipos disponíveis:**
- `general` - Piadas gerais
- `programming` - Piadas de programação
- `knock-knock` - Piadas de toc-toc
- `spooky` - Piadas assustadoras

### GET `/api/jokes/types/list`
Retorna lista de todos os tipos disponíveis.

**Resposta:**
```json
{
  "success": true,
  "count": 4,
  "data": ["general", "programming", "knock-knock", "spooky"]
}
```

## 🛠️ Estrutura de Arquivos

```
apps/
├── api/
│   └── src/
│       └── routes/
│           ├── jokes.ts           # Endpoints da API
│           └── __tests__/
│               └── jokes.test.ts   # Testes
└── web/
    └── src/
        └── pages/
            └── JokeGenerator.tsx   # Componente React

packages/
├── shared/
│   └── src/
│       ├── types/
│       │   └── jokes.ts           # Tipos TypeScript
│       └── services/
│           └── jokeService.ts     # Serviço de integração
```

## 🚀 Como Usar

### Backend (Express)

1. Importe o router de piadas:
```typescript
import jokeRoutes from './routes/jokes';

app.use('/api/jokes', jokeRoutes);
```

2. Acesse os endpoints:
```bash
curl http://localhost:3000/api/jokes/random
curl http://localhost:3000/api/jokes/random/5
curl http://localhost:3000/api/jokes/type/programming
curl http://localhost:3000/api/jokes/types/list
```

### Frontend (React)

1. Importe o componente:
```tsx
import JokeGenerator from '@/pages/JokeGenerator';

export default function App() {
  return <JokeGenerator />;
}
```

2. Configure a variável de ambiente:
```env
VITE_API_URL=http://localhost:3000/api
```

## 🧪 Testes

Execute os testes da API:
```bash
npm test -- apps/api/src/routes/__tests__/jokes.test.ts
```

## 📊 Tratamento de Erros

- **Erro de conexão**: Se a API externa cair, o usuário recebe mensagem clara
- **Tipo inválido**: Retorna erro 404 se tipo não existir
- **Rate limiting**: A API externa tem limites - implemente cache se necessário

## 🔄 Melhorias Futuras

- [ ] Cache de piadas com Redis
- [ ] Favoritação de piadas
- [ ] Compartilhamento em redes sociais
- [ ] Piadas customizadas do usuário
- [ ] Rating de piadas
- [ ] Integração com outras APIs de piadas

## 📚 Referências

- [Official Joke API Docs](https://official-joke-api.appspot.com/)
- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)

---

**Divirta-se gerando piadas! 😂**
