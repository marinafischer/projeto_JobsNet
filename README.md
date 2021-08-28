# Projeto JobsNet

## Projeto de site - formulário de cadastro - (front e back) JobsNet. 
### Realizado para conclusão do curso full-stack da Startech - Gama Academy. 


Para o front-end foi usado React 
  - para iniciar, abrir a pasta front, no terminal usar: npm start
  - a aplicação será aberta em alguns segundos.
  - também foi feito landing page da página, disponível no link: https://xenodochial-banach-5f7e45.netlify.app/
  
No back-end foi usado o node com banco de dados mongoDB(atlas) 
  - para iniciar, abrir a pasta back, no terminal usar: npm run dev irá rodar no loval host porta 3300 (http://127.0.0.1:3300/)
  - também foi feito landing page da página, disponível no link: https://back-jobsnet.herokuapp.com/
  - para testar usando o Swagger, o mesmo está disponível em /docs, ou no link: http://back-jobsnet.herokuapp.com/docs/


Abaixo descrição dos requisitos 

A empresa JobsNET especialista em recrutamento e seleção de profissionais nas mais diversas áreas solicitou para a nossa fábrica de software desenvolver uma página para atração de profissionais para conectar as oportunidades de emprego.

Frontend
Apresentar a estrutura do projeto no github;
Landing page com formulário para preenchimento de candidatura. 


Backend
Domínio
Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/

Regra de Negócio
Não pode haver 2 cadastros de candidatos com o mesmo cpf
Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular

Integração entre a Página de Formulário e o Back-end
Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.



  Autor: Marina Miranda Fischer
