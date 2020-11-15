# Gama_accenture

Projeto para o fim do treinamento da Gama que será apresentado para accenture.

## Escopo do Projeto

A equipe desenvolveu um sistema de compra e reserva de passagens aéreas.

## Funcionalidades

- Cadastro do usuário, login e logout;
- Criação de uma página de perfil para o usuário onde apareçam suas principais informações, reservas realizadas e passagens compradas;
- Página de busca de passagens aéreas, integrada com o máximo de companhias/sites de busca possível, com filtros de data, origem e destino, e classificação por relevância e preço;
- Checkout integrado com meio de pagamento;
- Função de compartilhar uma passagem integrada com alguma rede social;
- Função de favoritar uma passagem e página de exibição de favoritos.

## Requesitos não Funcionalidades

- Performance
- Alta Disponibilidade
- Testes Automatizados
- Segurança (proteger chamadas diretas a API sem ser via front-end)
- Logs/Rastreabilidade
- Tratamento de Exceção
- Responsividade (renderizar bem no desktop/note, tablet e celular)
- Controle de concorrência na persistência dos objetos

## Tópicos que devemos responder sobre o Projeto

- Quais cerimônias, papeis, artefatos do Scrum foram utilizados.

  - Realizamos apenas as daily durante todos os dias para acompanhar.
  - Fizemos a planning no começo do projeto para dividir as tarefas a serem feitas.
  - pelo tempo apertado não conseguimos utilizar a sprint de uma semana e fizemos somente a divisdão de tarefas e acompanhemento diário com as dailys

- Quais foram as maiores dificuldades no trabalho em equipe, aprendizados e desenvolvimentos que vocês experimentaram durante a execução desse projeto?

  - Tivemos algumas dificuldades principalmente pelo conflito de horários. Achavamos que iamos ter mais tempo disponível diariamente para realizar as tarefas.
  - Fizemos algumas escolhas que acabaram impactando nossa performance, que foi o caso da biblioteca do Material Ui, que teve uma curva de aprendizado maior que a prevista.
  - Não conseguimos fazer a integração de todos com API o com tempo que tivemos. Por isso focamos mais nos requesitos principais de front.

- Vocês também devem explicar qual lógica utilizaram na escolha da equipe, por que seus perfis se complementam, fortalezas e pontos de melhoria de cada um.
  - Para a escolhas de todas as equipes reunimos todos os participantes da Academia de Front-end e dividimos apartir dos con hecimentos que tinhamos em programação, criação de design e conhecimento de serviços.
  - Nossa equipe ficou bem equilibrada em questão de conhecimentos gerais. E conseguimos suprir dúvidas um dos outros durante o desenvolvimento.
- Como planejaram a infraestrutura do projeto, seus testes e configurações gerais de TI.
  - Nos baseamos na estrutura Atomic para criação de componentes. Utilizamos o Material Ui para definir o padrão de estilos e quando precisavamos utilizamos o Styled-Components para fazer alguns ajustes.
  - No útimo dia do curso faremos uma apresentação para Banca da Accenture.

## Ferramentas Utilizadas
  Trello - Organização das Tarefas
  Figma - Criação do Design
  Discord - comunicação Geral
  Notion - para atas da reunião
  
## Design
  Luiz fez o design no Figma com auxílio dos outros membros do grupo.

## Commits feitos

### Diego

    Estrutura das pastas e criacao da base dos componentes
    Card component
    CustomButton e CustomInput
    Card não finalizado
    Card atualizado
    Styles of card
    Resolve app
    Card quase finalizado, falta arrumar CSS
    Card finalizado, falta corrigir CSS
    Receber data no card
    Correcao do padrao dos codigos com prettier
    Rotas no header
    Header comp
    filtrar por preço

### Felipe

    React Project Creation
    Initial Commit 
    Theme Creation
    Folder Organization
    Searchbar component in progress
    Styled search component and folder organization
    Header logged off
    Responsive header and folder correction
    Profilebios component ok Profile wip
    Logo update to login
    Profile e bioprofile fixes
    Changes on images
    Login adaptation, logo e deafaultpage
    Header fix a search, componentization login
    Profilebio and searchlist update
    Search mounting pages
    Search mock list
    Style fixes search list
    Dynamic search list and minor fixes
    Minor main impor fixes
    Modal for tickets aplied
    Search modal aplied
    Modal 2 ways demonstration
    
### Luiz

    Adding the Register components and folder organization
    Adding more an tag 'link' in Register
    Adding the layout ForgotPassword
    Adding new inputs in register
    Expected style components
    Done in the Modal.js layout / necessary to create components
    Adding new titles for theme.js
    Creating the layout checkout, putting new styles
    Add more item for the checkout
    Adding favorite functionality
    Fix - added new ui material components to render
    Fix - changing the LoginService to login
    Fix' - removng the input login
    Adding styles.css in components for label search

### Mateus

    Login page added, with custom buttons and inputs. Criado arquivo 'Login.css
    Login service added.
    Grid in login page. Custom input fix. Dependency fix.
    Search service implemented. Fix on SearchService nomenclature.
    Location search implemented. Fixed import in Search component.
    Register service implemented. Error handling added in login service.
    Service to list tickets implemented.
    Fixed search button, in header.
