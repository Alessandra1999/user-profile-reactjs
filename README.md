<h1>Reforçando - UseContext e ContextAPI</h1>

### Exercício opcional proposto pelo professor Jaques durante o Módulo de ReactJS do curso de dev full stack da +PraTi

<hr/>

### Exercício 8: Contexto de Dados do Perfil do Usuário

Objetivo: Criar um contexto para gerenciar os dados do perfil do usuário.

Instruções:

- Crie o Contexto: Crie um novo arquivo UserProfileContext.jsx e defina um contexto chamado UserProfileContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor UserProfileContext.Provider e forneça um estado para os dados do perfil do usuário (nome, e-mail, etc.).
- Consuma o Contexto: Crie um componente Profile.jsx que consuma o contexto UserProfileContext e exiba os dados do perfil do usuário.

- Atualize o Perfil: Crie um componente EditProfile.jsx que consuma o contexto UserProfileContext e permita ao usuário atualizar seus dados de perfil.