<h1>Desafio Alfred</h1>

Iniciei uma aplicação nativa e pensei nas melhores estratégias para realizar o desafio, mantendo um código que julguei limpo e agradável.

Foi proposto os seguintes tópicos: 

- [x] Permitir a busca por filmes
- [x] Listar os filmes encontrados
- [x] Permitir escolher filmes favoritos
- [x] Permitir remover um filme dos favoritos
- [x] Listar os filmes favoritos
- [x] Caso o aplicativo seja fechado, os favoritos não devem ser perdidos

<h3>Busca dos filmes</h3>
Para realizar a busca, utilizei o método tradicional com axios fazendo uma consulta simples, porém como havia uma API_KEY eu separei esse dado em uma constante da aplicação para não poluir a consulta. Utilizei a biblioteca Unform para fazer o formulário de pesquisa.

<p align="center">
  <img src="https://i.imgur.com/ryro1ir.png" alt="Tela inicial vazia" width="200px">
</p>

<h3>Listar os filmes encontrados</h3>
Utilizei o FlatList por ser uma feature simples e funcional, juntamente com ela desenvolvi um componente de Card para mostrar os filmes encontrados.

<p align="center">
  <img src="https://i.imgur.com/rPqcBHH.png" alt="Listagem dos filmes" width="200px">
</p>

<h3>Permitir escolher filmes favoritos e removelos</h3>
Essa parte eu achei muito interessante, criei um hook personalizado onde ele controla todos os Filmes estrelados pelo usuário, o meu componente de Card toma forma com fundo amarelo para simbolizar o filme preferido, todo clique em cima deste Card ele atribui o filme como estrelado, e se o filme ja estiver estrelado ao clicar você irá remove-lo.
O meu hook contem um acesso simples ao AsyncStorage com todos os filmes estrelados, assim posso usa-lo como provider para aplicação e todos os próximos componentes  desfrutarem destes dados. Também no meu hook se encontra a função starMovie, que é utilizada para estrelar os filmes.

<p align="center">
  <img src="https://i.imgur.com/1m39AY2.png" alt="Filme estrelado" width="200px">
  <img src="https://i.imgur.com/gG8YGLW.png" alt="Listagem dos filmes estrelados" width="200px">
</p>

<h3>Guardar informção no dispositivo</h3>
Como disse no tópico passado eu utilizei o AsyncStorage do RN para fazer esse storage de dados.
