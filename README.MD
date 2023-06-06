### News

Projeto front-end com finalidade de exibir autores, titulo e descrição das notícias coletadas da API.

### Como executar?
```bash
 git clone https://github.com/victorhdchagas/tnm-mobile.git news
 npm install
 cd ./news
 npm run dev
```



------------


### News-Api

Projeto back-end responsável por encapsular a API-key, e exibir as informações recebidas da API newsapi.
Informações da API:
 - Porta: 3001
 - Endpoints:
   - /news?q=ParametroDeBusca

> É necessário configurar um arquivo .env com a chave NEWS_API_KEY.
```
	NEWS_API_KEY=codigo_criptografado_86d75ad
```

Passos para executar :
```
	cd ./news-api
	pnpm install 
	pnpm dev
```

