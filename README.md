# WhatsApp Clone 💬

Um web app em tempo real inspirado na interface e funcionalidades do WhatsApp Web. Este projeto foi desenvolvido para aprofundar conceitos de JavaScript assíncrono, manipulação de DOM e integração com arquitetura Serverless (Backend as a Service).

## 🚀 Tecnologias Utilizadas

* **Frontend:** JavaScript puro (Vanilla JS), HTML5, CSS3
* **Bundler:** Webpack
* **Backend & Banco de Dados:** Firebase (Firestore Database)
* **Armazenamento em Nuvem:** Firebase Storage (Imagens, Áudios e Documentos)
* **Serverless:** Firebase Cloud Functions (Node.js)

## ✨ Funcionalidades

* **Autenticação:** Login de usuários.
* **Chat em Tempo Real:** Envio e recebimento de mensagens instantâneas via Firestore.
* **Envio de Mídia:** Suporte para upload de Imagens e Documentos em PDF.
* **Mensagens de Áudio:** Gravação e envio de áudio diretamente pelo microfone do navegador.
* **Cloud Functions:** Gatilhos no backend para atualizar a última mensagem e o horário no painel de contatos automaticamente.
* **Gestão de Perfil:** Atualização de foto de perfil e nome de usuário.

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar o projeto na sua máquina:

### 1. Clone o repositório
```bash
git clone [https://github.com/SEU-USUARIO/whatsapp-clone.git](https://github.com/SEU-USUARIO/whatsapp-clone.git)
```

### 2. Instale as dependências
Navegue até a pasta do projeto e instale os pacotes do NPM:
```bash
cd whatsapp-clone
npm install
```

### 3. Configuração do Firebase (.env)
Crie um arquivo chamado `.env` na raiz do projeto e adicione as suas chaves do Firebase (você pode encontrá-las nas configurações do seu projeto no console do Firebase):

```env
FIREBASE_API_KEY=sua_api_key
FIREBASE_AUTH_DOMAIN=seu_auth_domain
FIREBASE_PROJECT_ID=seu_project_id
FIREBASE_STORAGE_BUCKET=seu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
FIREBASE_APP_ID=seu_app_id
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run start
```
O projeto estará rodando no seu `localhost`.