# Estrutura de pastas do NODE.js

### Raíz do projeto
Arquivos de configuração como:
- .gitignore: Permite ocultar arquivos do git
- package.json: Todos os pacotes instalados no projeto estão listados aqui
- README.md: Anotações em texto formatado

### node_modules
Todas as dependências do projeto são instaladas aqui.

### src
Contém todo o código-fonte do app Node.js. Pode conter as subpastas:
- api/: Contém os endpoints da sua API, se você estiver desenvolvendo um servidor web.
- models/: Contém definições de modelos de dados, se você estiver utilizando um banco de dados.
- controllers/: Contém lógica de negócios ou controladores que lidam com solicitações HTTP.
- services/: Contém serviços reutilizáveis ou camadas de abstração para acesso a dados, autenticação, etc.
- utils/: Contém funções utilitárias ou helpers.
- config/: Contém arquivos de configuração, como variáveis de ambiente ou configurações específicas do ambiente (dev, prod etc).

### test
Contém testes automatizados no código. É comum utilizar estruturas similares a src, algo como test/api para src/api, test/services para src/services etc.

### public
Contém configurações adicionais para o projeto, como arquivos de configuração para ambiente de dev e prod, arquivos de inicialização etc.

Em public/index.html é onde ficam links de CDN de frameworks remotos como o Bootrstrap, incluído em <Head>

### logs
Armazena arquivos de log.

# Componentes
Devem ser criados dentro da pasta components dentro de src. Toda a UI com REACT é construída através da composição de componentes reutilizáveis, que são funções que retornam objetos JSX

## css
Para manter uma boa organização na pasta src, cada componente deve possuir além do .js, caso necessário, o seu .css nessa mesma pasta.

## assets
Pode ser utilizada para guardar imagens para cada componente ao utilizar a importação.