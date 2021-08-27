import {useState, useEffect} from 'react';
import axios from "axios"
//import './App.css'


function App() {

  const fetchAddress = async() => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.CEP}/json/`);
    setForm({...form, endereco: address.data.logradouro, cidade: address.data.localidade, bairro: address.data.bairro,  estado: address.data.uf });
  };


  const criaCandidato = async(candidate) => {
      console.log('aqui')
    const user = await axios.post( 'http://localhost:3300/register',form); 
    if (user.status === 200) {
      alert('deu certo')
    } else {
    alert('deu errado')
    }
  };

  const [form, setForm] = useState({
    nome:'',
    cargo:'',
    dataNascimento:'',
    sexo: '',
    estadoCivil: '',
    CEP: '',
    endereco: '',
    numero: '',
    cidade: '',
    bairro: '',
    estado: '',
    fone1: '',
    fone2: '',
    celular: '',
    contato: '',
    email: '',
    identidade: '',
    cpf: '',
    veiculo: '',
    habilitacao: ''
  });

  useEffect(()=>{
    console.log(form);
  }, [form]);

  return (
    <div class='container-sm'>
        <div class="col-md-12 order-md-1">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="horizontal_on_white_by_logaster.png" class="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">JobsNet</h3>
                            <p class="card-text">
                                <strong>Somos especialistas em recrutamento e seleção de profissionais nas mais diversas áreas</strong>
                            </p>
                            <p class="card-text"><small class="text-muted">Para se cadastrar é rápido e fácil!<br></br>Preencha o formulário abaixo com suas informações e clique em Enviar!</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 order-md-1">
            <h4 class="mb-3 text-center">
                Dados Pessoais
            </h4>
          
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="nome">Nome Completo*</label>
                    <input type="text" class="form-control" id="nome" placeholder='Nome e sobrenome' onChange={(e)=>{setForm({...form, nome: e.target.value});}} value={form.nome}></input>
                    <div class="invalid-feedback">
                    É obrigatório inserir um nome válido.
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="sexo">Sexo</label>
                        <select class="form-control" value={form.sexo} onChange={(e)=>{setForm({...form, sexo: e.target.value})}}>
                            <option value='' disabled>Selecione uma opção</option>
                            <option value='M'>Masculino</option>
                            <option value='F'>Feminino</option>
                            <option value='NI'>Prefiro não informar</option>
                        </select>
                </div>

                <div class="col-md-3 mb-3">
                    <label for="estadoCivil">Estado Civil</label>
                        <select class="form-control" required value={form.estadoCivil} onChange={(e)=>{setForm({...form, estadoCivil: e.target.value})}}>
                            <option value='' disabled>Selecione uma opção</option>
                            <option value='casadx'>Casadx/União Estável</option>
                            <option value='solteirx'>Solteirx</option>
                            <option value='viuvx'>Viuvx</option>
                        </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <label for="dataNascimento">Data de Nascimento*</label>
                    <input type="date" class="form-control" id="dataNascimento" onChange={(e)=>{setForm({...form, dataNascimento: e.target.value});}} required value={form.dataNascimento}></input>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="celular">Celular*</label>
                    <input type="number" class="form-control" id="celular" placeholder='DD99999999' onChange={(e)=>{setForm({...form, celular: e.target.value});}} required value={form.celular} ></input>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="fone1">Telefone para Contato 1</label>
                    <input type="number" class="form-control" id="fone1" onChange={(e)=>{setForm({...form, fone1: e.target.value});}} value={form.fone1} ></input>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="fone2">Telefone para Contato 2</label>
                    <input type="number" class="form-control" id="fone2" onChange={(e)=>{setForm({...form, fone2: e.target.value});}} value={form.fone2} ></input>
                </div>
            </div>

            <div class="row"> 
                <div class="col-md-4 mb-3">
                    <label>Contato</label>
                    <input placeholder='Nome de um contato profissional' type ="text" class="form-control" onChange={(e)=>{setForm({...form, contato: e.target.value});}} value={form.contato} ></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label>e-mail*</label>
                    <input type ="text" class="form-control" onChange={(e)=>{setForm({...form, email: e.target.value});}} required value={form.email} ></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Cargo*</label>
                    <input  placeholder='Cargo Pretendido' type ="text" class="form-control" onChange={(e)=>{setForm({...form, cargo: e.target.value});}} required value={form.cargo} ></input>
                </div>
            </div>

            <div class="row"> 
                <div class="col-md-4 mb-3">
                    <label>CEP*</label>
                    <input class="form-control" onBlur={()=>{fetchAddress();}} onChange={(e)=>{setForm({...form, CEP: e.target.value});}} required value={form.CEP} ></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Estado*</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, estado: e.target.value});}} required value={form.estado} ></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Cidade*</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, cidade: e.target.value});}} required value={form.cidade} ></input>
                </div>
            </div>

            <div class="row"> 
                <div class="col-md-4 mb-3">
                    <label>Endereço*</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, endereco: e.target.value});}} required value={form.endereco} ></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Numero*</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, numero: e.target.value});}} required value={form.numero} ></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Bairro*</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, bairro: e.target.value});}} required value={form.bairro} ></input>
                </div>
            </div>

            <h5 class="mb-3">Documentos</h5>

            <div class="row"> 
            
                <div class="col-md-3 mb-3">
                    <label>CPF*</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, cpf: e.target.value});}} required value={form.cpf} ></input>
                </div>
                <div class="col-md-3 mb-3" >
                    <label>Identidade</label>
                    <input class="form-control" onChange={(e)=>{setForm({...form, identidade: e.target.value});}} value={form.identidade} ></input>
                </div>
                <div class="col-md-3 mb-3">
                    <label>Possui Veículo</label>
                    <select class="form-control" value={form.veiculo} onChange={(e)=>{setForm({...form, veiculo: e.target.value})}}>
                        <option value='' disabled>Selecione uma opção</option>
                        <option value='S'>Sim</option>
                        <option value='N'>Não</option>
                    </select>
                </div>
                <div class="col-md-3 mb-3">
                    <label>Possui Carteira de Habilitação</label>
                    <select class="form-control" value={form.habilitacao} onChange={(e)=>{setForm({...form, habilitacao: e.target.value})}}>
                        <option value='' disabled>Selecione uma opção</option>
                        <option value='S'>Sim</option>
                        <option value='N'>Não</option>
                    </select>
                </div>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-outline-success btn-lg btn-block" onClick={() => criaCandidato()}>Enviar</button>
            </div> 
        </div>
    </div>   
  ); 
};

export default App;
