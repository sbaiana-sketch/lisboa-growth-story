# Lisboa Growth Story

PROJECTO: WEBSITE DE PORTEFÓLIO PROFISSIONAL — MARKETING DIGITAL

1. OBJECTIVO

Criar um website de portefólio profissional, moderno, visualmente marcante e totalmente responsivo, utilizando a imagem de referência fornecida como guia visual principal.

Reproduzir a linguagem visual, a estrutura, a hierarquia tipográfica, as cores, os cartões, as formas geométricas e a organização das secções da referência, adaptando o conteúdo a uma profissional portuguesa de Marketing Digital, Formação e Consultoria.

O website deve transmitir competência, criatividade, experiência, proximidade e capacidade estratégica.

Não criar um template genérico de portefólio. Preservar a identidade visual distintiva da referência.

Requisito fundamental: todas as imagens, informações de contacto, ligações para redes sociais, ligações externas e restantes conteúdos personalizáveis devem poder ser alterados num único ficheiro de configuração, sem necessidade de procurar e editar componentes individuais.

Não inventar dados pessoais, contactos, clientes, resultados, testemunhos ou ligações.

2. TECNOLOGIA

Utilizar:

•	React.

•	TypeScript.

•	Tailwind CSS.

•	Vite.

•	Lucide React para ícones.

•	Componentes reutilizáveis.

•	Animações CSS subtis.

•	Layout responsivo.

Criar uma página única (one-page portfolio), com navegação por âncoras e secções claramente separadas.

O código deve ser organizado, acessível, reutilizável e fácil de manter.

3. CONFIGURAÇÃO CENTRALIZADA E PERSONALIZAÇÃO

Antes de desenvolver o website, criar um ficheiro denominado:

src/config/siteConfig.ts

Este ficheiro será o ponto central de personalização do website.

Deve conter todas as configurações editáveis, organizadas por categorias.

3.1. Identidade e apresentação

Criar os seguintes campos:

•	name: nome profissional.

•	professionalTitle: designação profissional.

•	heroTitle: título principal.

•	heroSubtitle: texto introdutório.

•	aboutText: texto da secção Sobre.

•	logoUrl: URL do logótipo.

•	heroImageUrl: URL da fotografia principal.

•	signatureImageUrl: URL da assinatura gráfica, se existir.

•	yearsExperience: anos de experiência.

•	location: localização profissional, opcional.

Utilizar valores vazios nos campos pessoais que ainda não estejam preenchidos.

Não apresentar URLs fictícios, nomes de exemplo ou dados inventados no website publicado.

3.2. Contactos

Criar uma secção contact com estes campos editáveis:

•	email: endereço de correio electrónico.

•	phone: número de telefone.

•	whatsapp: número para WhatsApp, com indicativo internacional.

•	linkedin: URL do perfil de LinkedIn.

•	instagram: URL do perfil de Instagram.

•	facebook: URL do perfil de Facebook.

•	tiktok: URL do perfil de TikTok.

•	youtube: URL do canal de YouTube.

•	website: URL do website profissional.

•	location: localização profissional, opcional.

•	contactFormEnabled: opção para mostrar ou ocultar o formulário.

Todos os campos devem poder ficar vazios.

Quando um campo estiver vazio, não apresentar o respectivo ícone, botão ou ligação.

Não apresentar ligações fictícias nem links sem destino.

3.3. URLs das imagens

Criar um objecto images com um campo independente para cada imagem do website.

Utilizar os seguintes nomes:

•	logo

•	hero

•	signature

•	project01

•	project02

•	project03

•	project04

•	testimonial01

•	blog01

•	blog02

•	blog03

Todos os campos devem aceitar URLs completos de imagens alojadas numa cloud externa.

Exemplo de preenchimento:

hero: "https://dominio-da-minha-cloud.pt/pasta/fotografia-profissional.png"

O endereço acima é meramente ilustrativo e não deve ser utilizado como imagem real.

Não descarregar, substituir, converter ou copiar as imagens para outro serviço. Utilizar directamente os URLs fornecidos.

Aceitar, sempre que o serviço de alojamento o permita, os formatos JPG, JPEG, PNG, WebP e SVG.

A fotografia principal deve aceitar imagens PNG com fundo transparente.

As imagens de projectos, artigos e testemunhos devem manter as proporções previstas no layout.

3.4. Ligações dos projectos

Criar um objecto projects com quatro entradas.

Cada entrada deve permitir configurar:

•	title: título do projecto.

•	category: categoria.

•	description: descrição.

•	imageUrl: URL da imagem.

•	tags: lista de competências.

•	projectUrl: ligação para o projecto.

•	visible: opção para mostrar ou ocultar o projecto.

Se projectUrl estiver vazio, não apresentar um botão que não funcione.

Se imageUrl estiver vazio, manter o espaço visual da imagem reservado, sem utilizar fotografias de stock.

3.5. Ligações dos artigos

Criar um objecto blog com três entradas.

Cada entrada deve permitir configurar:

•	title

•	category

•	date

•	readingTime

•	imageUrl

•	articleUrl

•	visible

Se não existir uma ligação para o artigo, ocultar o botão "Ler artigo".

3.6. Testemunhos

Criar um objecto testimonials com suporte para vários testemunhos.

Cada entrada deve conter:

•	name

•	role

•	organization

•	text

•	imageUrl

•	visible

Não criar testemunhos fictícios. Se não existirem testemunhos configurados, ocultar esta secção no website publicado, mantendo o componente disponível no código.

3.7. Outras ligações

Criar um objecto links com os seguintes campos editáveis:

•	privacyPolicyUrl

•	cookiesPolicyUrl

•	legalNoticeUrl

•	cvUrl

•	portfolioUrl

Quando uma ligação não estiver configurada, ocultar o elemento correspondente.

3.8. Regras técnicas da configuração

1.	Todos os componentes devem receber os conteúdos a partir de siteConfig.ts.

2.	Não repetir endereços de e-mail, números de telefone, URLs ou URLs de imagens directamente nos componentes.

3.	Não criar ficheiros de configuração paralelos com informações duplicadas.

4.	Utilizar valores vazios para os dados pessoais ainda não fornecidos.

5.	Criar tipos TypeScript para garantir a consistência dos dados.

6.	Permitir acrescentar ou remover projectos, artigos e testemunhos sem reconstruir o layout.

7.	Validar os URLs antes de apresentar ligações externas.

8.	Não utilizar href="#" como destino fictício.

9.	Quando um campo não estiver preenchido, ocultar o elemento ou apresentar um espaço reservado apenas no modo de edição.

10.	Manter a configuração independente do design e da estrutura dos componentes.

4. IDENTIDADE VISUAL

Paleta cromática

•	Roxo principal: #5639C6

•	Roxo escuro: #4630A8

•	Roxo claro: #7159D3

•	Verde-lima: #A6E56D

•	Branco: #FFFFFF

•	Fundo cinzento muito claro: #F7F7F9

•	Texto principal: #24232A

•	Texto secundário: #74717D

O roxo deve dominar as secções de maior impacto.

O verde-lima deve funcionar como cor de destaque para botões, etiquetas, faixas horizontais e pequenos indicadores.

Evitar gradientes excessivos, efeitos de vidro, sombras pesadas e decorações desnecessárias.

Tipografia

•	Títulos: Space Grotesk, pesos 600 e 700.

•	Texto corrido: DM Sans, pesos 400 e 500.

•	Alternativa: Poppins.

Utilizar títulos grandes, geométricos e compactos, com palavras destacadas a roxo ou verde-lima.

Não utilizar tipografia serifada.

Linguagem visual

•	Layout editorial contemporâneo.

•	Grandes áreas de espaço negativo.

•	Cartões com cantos arredondados.

•	Formas circulares e geométricas.

•	Ícones minimalistas.

•	Etiquetas em formato de cápsula.

•	Botões arredondados.

•	Alternância entre fundos brancos e roxos.

•	Faixas horizontais verde-lima.

•	Elementos decorativos de baixa opacidade.

•	Composição assimétrica e equilibrada.

Utilizar uma largura máxima de conteúdo entre 1180 e 1240 px em ecrãs grandes.

5. ESTRUTURA COMPLETA DO WEBSITE

SECÇÃO 01 — HEADER E NAVEGAÇÃO

Fundo branco, com navegação horizontal e discreta.

À esquerda:

•	Logótipo carregado a partir de siteConfig.images.logo.

•	Se o URL estiver vazio, utilizar um símbolo geométrico minimalista temporário, sem inventar um logótipo definitivo.

Ao centro:

•	Início.

•	Sobre.

•	Serviços.

•	Projectos.

•	Experiência.

•	Contacto.

À direita:

•	Botão verde-lima "Vamos conversar", com ligação à secção de contacto.

O cabeçalho deve ser compacto, com o item activo destacado a roxo e menu móvel funcional.

SECÇÃO 02 — HERO / APRESENTAÇÃO

Fundo branco.

Criar uma composição central inspirada directamente na referência.

Na parte superior, apresentar a etiqueta "MARKETING DIGITAL".

Título principal:

"Marketing Digital com estratégia e sem complicações."

O título deve ser editável na configuração central.

Subtítulo:

"Ajudo empresas a melhorar a sua presença digital e partilho conhecimento através de formação prática, estratégia e comunicação."

Destacar algumas palavras a roxo.

Fotografia principal

Utilizar a imagem definida em siteConfig.images.hero.

Criar uma área vertical central com:

•	Fotografia sobreposta a uma forma geométrica roxa.

•	Segunda forma cinzenta muito clara.

•	Possibilidade de a fotografia ultrapassar os limites das formas.

•	Fundo transparente quando a imagem fornecida o permitir.

Se heroImageUrl estiver vazio, manter um espaço reservado visualmente discreto no modo de edição. Não utilizar imagens geradas ou de stock.

Botões

•	"Ver portefólio": ligação à secção de projectos.

•	"Falar comigo": ligação à secção de contacto.

Adicionar pequenos elementos gráficos secundários, sem inventar indicadores quantitativos.

SECÇÃO 03 — FAIXA VERDE EM MOVIMENTO

Criar uma faixa verde-lima de largura total, com texto repetido:

"Marketing Digital ✦ Formação ✦ Estratégia ✦ Websites ✦ SEO ✦ Comunicação ✦"

Implementar movimento horizontal contínuo e suave.

Respeitar prefers-reduced-motion.

SECÇÃO 04 — SERVIÇOS

Fundo roxo principal.

Título: "O que faço".

Criar três cartões circulares ou ligeiramente ovais.

Cartão 1 — Marketing Digital

"Estratégia e comunicação digital ajustadas aos objectivos de cada negócio."

Cartão 2 — Formação

"Aprendizagem prática para desenvolver competências de Marketing Digital."

Cartão 3 — Websites & SEO

"Websites profissionais, optimizados para os motores de pesquisa e orientados para resultados."

O primeiro cartão deve ter fundo branco e texto escuro. Os restantes devem ter fundo roxo-claro e texto branco.

Utilizar ícones minimalistas e dimensões consistentes.

SECÇÃO 05 — SOBRE MIM

Fundo branco.

Na coluna esquerda, criar um bloco roxo de grande dimensão, com o número de anos de experiência configurado em siteConfig.yearsExperience.

Não apresentar o valor se não estiver preenchido.

Na coluna direita:

•	Etiqueta "UM POUCO SOBRE MIM".

•	Título "Quem está por detrás da estratégia?"

•	Texto obtido de siteConfig.aboutText.

•	Indicadores profissionais opcionais, configuráveis e ocultáveis.

•	Espaço para assinatura gráfica, se existir uma imagem em siteConfig.images.signature.

Não inventar estatísticas ou resultados.

SECÇÃO 06 — FORMAÇÃO E EXPERIÊNCIA PROFISSIONAL

Fundo branco ou cinzento muito claro.

Título: "A minha experiência e formação".

Criar dois cartões principais:

Formação

•	Instituição.

•	Curso ou qualificação.

•	Área de especialização.

•	Datas.

Experiência profissional

•	Organização ou cliente.

•	Função.

•	Responsabilidades.

•	Datas.

Criar componentes reutilizáveis e estruturas de dados que permitam acrescentar entradas posteriormente.

Não inventar instituições, clientes, qualificações ou datas.

SECÇÃO 07 — PROJECTOS / PORTEFÓLIO

Fundo roxo.

Título: "Projectos em destaque".

Subtítulo: "Trabalho desenvolvido, estratégias aplicadas e resultados."

Criar quatro cartões horizontais, organizados em duas linhas, seguindo a composição da referência.

Cada cartão deve apresentar:

•	Imagem à esquerda, ocupando aproximadamente 40% a 50% da largura.

•	Categoria.

•	Título.

•	Descrição.

•	Etiquetas de competências.

•	Botão "Ver projecto", quando existir uma ligação.

Utilizar as imagens configuradas em:

•	siteConfig.projects[0].imageUrl

•	siteConfig.projects[1].imageUrl

•	siteConfig.projects[2].imageUrl

•	siteConfig.projects[3].imageUrl

As imagens também podem ser configuradas através dos campos project01, project02, project03 e project04 do objecto images, desde que exista uma única fonte de verdade e não se dupliquem valores.

Utilizar cartões roxo-claro, cantos arredondados e etiquetas verde-lima.

Não utilizar imagens de stock nem logótipos fictícios.

SECÇÃO 08 — MODELO DE COLABORAÇÃO

Fundo branco.

Título: "Como podemos trabalhar juntos?"

Criar três cartões:

•	Consultoria.

•	Projectos digitais.

•	Formação.

O cartão central deve ter fundo roxo e texto branco.

Os restantes devem ter fundo branco e pequenos apontamentos verdes.

Não apresentar preços fictícios.

Os botões devem remeter para a secção de contacto ou para ligações reais configuradas.

SECÇÃO 09 — CONTACTO

Fundo roxo.

Organizar a secção em duas colunas.

Coluna esquerda

Título: "Vamos conversar e criar algo relevante."

Destacar a palavra "conversar" a verde-lima.

Texto introdutório:

"Partilha comigo o teu projecto, a tua necessidade de formação ou o desafio digital que pretendes resolver."

Apresentar apenas os contactos preenchidos na configuração central.

E-mail

•	Mostrar o endereço configurado em siteConfig.contact.email.

•	Tornar o endereço clicável através de mailto:.

•	Não apresentar o elemento se o campo estiver vazio.

Telefone

•	Mostrar o número configurado em siteConfig.contact.phone.

•	Criar uma ligação tel: funcional.

•	Não apresentar o elemento se o campo estiver vazio.

WhatsApp

•	Utilizar o número configurado em siteConfig.contact.whatsapp.

•	Criar uma ligação para a conversa no WhatsApp, utilizando o formato internacional adequado.

•	Não apresentar o botão se o campo estiver vazio.

Redes sociais

Apresentar ícones clicáveis para:

•	LinkedIn.

•	Instagram.

•	Facebook.

•	TikTok.

•	YouTube.

Obter todos os endereços de siteConfig.contact.

Mostrar apenas as redes sociais que tenham URLs preenchidos.

Abrir ligações externas num novo separador, com os atributos de segurança apropriados.

Coluna direita — Formulário

Criar um formulário com:

•	Nome.

•	E-mail.

•	Assunto.

•	Tipo de pedido.

•	Mensagem.

Opções para o tipo de pedido:

•	Marketing Digital.

•	Formação.

•	Website e SEO.

•	Consultoria.

•	Outro.

Adicionar botão verde-lima "Enviar mensagem".

Validar os campos e apresentar estados de carregamento, sucesso e erro.

Não simular um envio bem-sucedido sem integração funcional. Preparar a ligação a um serviço de envio de formulários.

SECÇÃO 10 — TESTEMUNHOS

Fundo branco.

Título: "O que dizem sobre o meu trabalho".

Criar um cartão horizontal com:

•	Fotografia circular.

•	Testemunho.

•	Nome.

•	Função ou organização.

Utilizar os dados de siteConfig.testimonials.

Se existirem vários testemunhos, permitir a navegação entre eles.

Se não existirem testemunhos reais configurados, ocultar a secção no website publicado.

Não inventar nomes, testemunhos ou avaliações.

SECÇÃO 11 — ARTIGOS E CONTEÚDOS

Fundo branco.

Título: "Do meu blog".

Subtítulo: "Ideias, conhecimento e estratégias de Marketing Digital."

Criar três cartões horizontais ou rectangulares, conforme a referência.

Cada cartão deve apresentar:

•	Imagem de capa.

•	Categoria.

•	Título.

•	Data.

•	Tempo de leitura.

•	Botão "Ler artigo".

Obter os dados de siteConfig.blog.

Utilizar os URLs de imagem configurados em cada artigo.

Se não existir uma ligação real para o artigo, ocultar o botão correspondente.

SECÇÃO 12 — PERGUNTAS FREQUENTES

Fundo roxo.

Título: "Ficou alguma dúvida?"

Criar um acordeão funcional com cinco perguntas editáveis:

•	Com que tipos de negócios trabalhas?

•	Que áreas de Marketing Digital abordas?

•	Disponibilizas formação presencial e online?

•	Como funciona o processo de contratação?

•	Como posso pedir uma proposta?

As respostas devem ser editáveis no código.

Não inventar condições comerciais específicas.

Utilizar texto branco, separadores subtis e ícones de expansão à direita.

SECÇÃO 13 — RODAPÉ

Fundo branco.

Criar três colunas.

Coluna 1

•	Logótipo.

•	Nome profissional.

•	Breve descrição.

•	Redes sociais configuradas.

Coluna 2

•	Ligações rápidas para as secções do website.

Coluna 3

•	Serviços.

•	E-mail.

•	Telefone.

•	Ligação para o formulário de contacto.

Na parte inferior, apresentar:

•	Direitos de autor.

•	Política de Privacidade.

•	Política de Cookies.

•	Informação legal, quando aplicável.

Obter os URLs das páginas legais a partir de siteConfig.links.

Ocultar as ligações legais que não estejam configuradas.

Não inventar contactos, moradas ou números de identificação.

6. COMPONENTE REUTILIZÁVEL PARA IMAGENS

Criar um componente denominado CloudImage.

Este componente deve receber:

•	src: URL da imagem.

•	alt: texto alternativo.

•	aspectRatio: proporção.

•	objectFit: contain ou cover.

•	className: classes adicionais opcionais.

Requisitos:

1.	Carregar directamente a imagem a partir do URL configurado.

2.	Não converter automaticamente a imagem para outro formato.

3.	Preservar a transparência das imagens PNG.

4.	Permitir ajustar a proporção sem distorcer a imagem.

5.	Mostrar um espaço reservado discreto quando não existir URL.

6.	Mostrar um espaço reservado quando o carregamento falhar, sem quebrar o layout.

7.	Permitir substituir a imagem alterando apenas o URL na configuração.

8.	Não utilizar URLs inventados nem imagens de stock.

Para a fotografia principal, utilizar object-fit: contain.

Para projectos e artigos, utilizar object-fit: cover.

Importante: os URLs da cloud devem permitir o acesso directo ao ficheiro da imagem, sem exigir autenticação, sessão iniciada ou uma página intermédia de visualização. Se a cloud utilizar links de partilha que não sejam URLs directos de imagem, identificar essa limitação e indicar que é necessário obter um link directo compatível.

7. RESPONSIVIDADE

Desktop

•	Conteúdo centralizado.

•	Grelhas de duas e três colunas.

•	Hero com composição central.

•	Serviços circulares.

•	Projectos em cartões horizontais.

Tablet

•	Reduzir espaçamentos.

•	Adaptar grelhas.

•	Preservar a hierarquia tipográfica.

Telemóvel

•	Menu compacto.

•	Hero reorganizado verticalmente.

•	Imagem sem sobreposições que prejudiquem a leitura.

•	Serviços em coluna ou grelha adaptada.

•	Projectos e artigos empilhados.

•	Formulário a ocupar a largura disponível.

•	Botões com áreas de toque adequadas.

•	Sem deslocamento horizontal.

Testar as larguras de 375 px, 768 px, 1024 px e 1440 px.

8. ACESSIBILIDADE E DESEMPENHO

Garantir:

•	HTML semântico.

•	Hierarquia correcta de títulos H1, H2 e H3.

•	Contraste adequado.

•	Navegação por teclado.

•	Estados de foco visíveis.

•	Etiquetas nos campos do formulário.

•	Textos alternativos nas imagens.

•	Carregamento diferido das imagens abaixo da primeira área visível.

•	Metadados SEO básicos.

•	Respeito por prefers-reduced-motion.

9. REGRAS DE IMPLEMENTAÇÃO

1.	Implementar todas as secções pela ordem definida.

2.	Utilizar a imagem de referência como guia visual principal.

3.	Preservar as cores roxo, verde-lima e branco.

4.	Criar src/config/siteConfig.ts antes de implementar os componentes.

5.	Centralizar nesse ficheiro todos os contactos, URLs de imagens, redes sociais, projectos, artigos e ligações externas.

6.	Não duplicar dados em vários componentes.

7.	Não inventar dados pessoais, contactos ou conteúdos.

8.	Não utilizar imagens de stock para preencher os espaços reservados.

9.	Não omitir secções obrigatórias por falta de imagens.

10.	Não criar ligações sem destino.

11.	Não utilizar href="#" como ligação fictícia.

12.	Ocultar elementos opcionais quando os respectivos dados estiverem vazios.

13.	Manter a estrutura visual mesmo quando uma imagem não estiver disponível.

14.	Garantir que todos os botões e controlos têm uma função real.

15.	Não simular funcionalidades que ainda não estejam integradas.

10. RESULTADO ESPERADO

Entregar um website de portefólio completo, visualmente próximo da referência, com identidade gráfica roxa e verde-lima, tipografia geométrica, secções alternadas, cartões arredondados, faixa animada e estrutura responsiva.

O website deve ficar preparado para que eu possa:

•	Inserir os URLs das minhas fotografias e imagens alojadas na minha cloud.

•	Alterar o meu endereço de e-mail.

•	Alterar o meu número de telefone.

•	Inserir a ligação para o WhatsApp.

•	Inserir os URLs das minhas redes sociais.

•	Inserir os links dos meus projectos e artigos.

•	Adicionar ou ocultar testemunhos.

•	Alterar os meus textos e dados profissionais.

O principal requisito é que estas alterações sejam feitas num único ficheiro de configuração, sem necessidade de alterar o código de cada secção.

Antes de terminar, verificar todas as secções em desktop e telemóvel, corrigir desalinhamentos e confirmar que os URLs configurados são utilizados correctamente.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fd566306-accf-4b58-99a1-e9efa415e65e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
