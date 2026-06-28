# 🎬 LeoCinema - Frontend

Aplicação web para compra de ingressos de cinema, parte do projeto [LeoCinema Kubernetes](https://github.com/leonardobgsilva/app-leocinema-kubernetes).

## 🛠️ Stack

- HTML, CSS, JavaScript
- [lite-server](https://github.com/johnpapa/lite-server) — servidor de desenvolvimento
- [dotenv](https://github.com/motdotla/dotenv) — variáveis de ambiente

## 📁 Estrutura

```
app-leocinema-frontend/
├── .github/
│   └── workflows/
│       └── pipeline.yaml   # CI/CD — build e push para o Docker Hub
├── index.html              # Página principal
├── script.js               # Lógica de compra (BACKEND_URL injetado em runtime)
├── style.css               # Estilos (tema injetado em runtime)
├── build.js                # Substitui variáveis de ambiente em runtime
├── Dockerfile
└── package.json
```

## ⚙️ Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `BACKEND_URL` | URL completa da rota de compra do backend | `127.0.0.1/api/comprar-ingresso` |
| `APP_THEME` | Tema de cor da interface | `red`, `green` ou `blue` |

> O `build.js` injeta essas variáveis no `script.js` e no `style.css` na inicialização do container.

## 🎨 Temas

| `APP_THEME` | Cor |
|---|---|
| `red` | Vermelho (padrão) |
| `green` | Verde |
| `blue` | Azul |

## 🐳 Docker

```bash
# Build (tema vermelho — padrão)
docker build -t leobgs/leocinema-frontend:red .

# Build com tema verde
docker build --build-arg APP_THEME=green -t leobgs/leocinema-frontend:green .

# Build com tema azul
docker build --build-arg APP_THEME=blue -t leobgs/leocinema-frontend:blue .
```

## 🚀 CI/CD

O pipeline do GitHub Actions (`pipeline.yaml`) é acionado a cada push na branch `main` e:

1. Builda as 3 imagens em paralelo (`:red`, `:green`, `:blue`) com o tema correto em cada uma
2. Faz push de todas para o Docker Hub
3. Atualiza o `values.yaml` do repositório Kubernetes com a nova tag
4. O ArgoCD detecta a mudança e sincroniza automaticamente o cluster

## 🔗 Repositório Kubernetes

[app-leocinema-kubernetes](https://github.com/leonardobgsilva/app-leocinema-kubernetes)

**Leonardo Borges** — [leonardobgsilva.github.io](https://leonardobgsilva.github.io)
