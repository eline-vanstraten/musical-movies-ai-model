# 🎬 Musical Movies Quiz - AI model

Een interactief musical movies quiz taalmodel gebouwd met JavaScript en moderne AI-tools zoals LangChain en OpenAI. De applicatie stelt gebruikers 10 multiple choice vragen over bekende musicalfilms.

# Technologieën

- JavaScript 
- Express
- LangChain & LangChain Core
- Azure Chat OpenAI API
- Custom CSS
- Git en Github

# Functies

- 10 vragen per quiz
- Multiple choice antwoorden
- Vraag nummer, score en aantal tokens verbruikt worden bijgehouden

# Installatie en gebruik

1. Clone de repository:

```sh
git clone https://github.com/eline-vanstraten/musical-movies-ai-model.git
```

2. Ga naar de map:

```sh
cd musical-movies-ai-model
```

3. Installeer dependencies:

```sh
npm install langchain @langchain/openai @langchain/core
npm install express

```

4. Maak een .env bestand:

```sh
cp .env.example .env
```

5. Voeg key toe aan .env:

```sh
AZURE_OPENAI_API_VERSION=your_api_version
AZURE_OPENAI_API_INSTANCE_NAME=your_instance_name
AZURE_OPENAI_API_KEY=your_api_key
AZURE_OPENAI_API_DEPLOYMENT_NAME=your_deployment_name
AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME=your_embeddings_deployment
```

6. Start de server:

```sh
npm start
```


## ✦ Auteur

Eline van Straten
