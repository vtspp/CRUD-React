import React from 'react';
import axios from 'axios'
import Main from '../../components/template/Main'
//import TableFilter from 'react-table-filter'

const headerProps = {
    icon: "users",
    title: " Usuários",
    subtitle: "Cadastro de usuário"

}
    
const baseUrl = 'http://localhost:3001/user'
const initState= {
    user: { name:'', gender:'', language:'', age:'', birthdate:''},
    list: []
}

export default class UserCrud extends React.Component{

    state = {...initState}

    componentWillMount(){
        axios.get(baseUrl, {
            crossdomain: true
        })
        .then(resp => {
            this.setState({ list: resp.data})
        })
        console.log(this.state.list)
    }

    clear(){
        this.setState({user: initState.user})
    }
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({user : initState.user, list})
        })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlfor="name">Nome</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..."
                            />
                    </div>
                    <div className="form-group">
                        <label htmlfor="name">Gênero</label>
                        <input type="text" className="form-control"
                        name="gender"
                        value={this.state.user.gender}
                        onChange={g => this.updateField(g)}
                        placeholder="Digite seu gênero..."
                           />
                </div>
                <div className="form-group">
                        <label htmlfor="name">Idioma</label>
                        <input type="text" className="form-control"
                        name="language"
                        value={this.state.user.language}
                        onChange={l => this.updateField(l)}
                        placeholder="Digite seu idioma..."
                           />
                </div>
                <div className="form-group">
                        <label htmlfor="name">Idade</label>
                        <input type="text" className="form-control"
                        name="age"
                        value={this.state.user.age}
                        onChange={a => this.updateField(a)}
                        placeholder="Digite idade..."
                           />
                </div>
                <div className="form-group">
                        <label htmlfor="name">Nascimento</label>
                        <input type="text" className="form-control"
                        name="birthdate"
                        value={this.state.user.birthdate}
                        onChange={b => this.updateField(b)}
                        placeholder="Digite a data de seu nascimento no formato dd/mm/aaaa..."
                           />
                </div>
                
             </div>
         </div>
         <hr />

         <div className="row">
            <div className="col-12 d-flex justify-content end">
                 <button className="btn btn-primary"
                 onClick={e => this.save(e)}>Salvar</button>
                 <button className="btn btn-secondary ml-2"
                 onClick={e => this.clear(e)}>Cancelar</button>
            </div>
         </div>
    </div>
        );
    }

    load(user){
        this.setState({user})
    }

    remove(user){
        axios.delete(` ${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({list})
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                 <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Idioma</th>
                        <th>Idade</th>
                        <th>Nascimento</th>
                        <th>Editar</th>
                    </tr>
                 </thead>
                         <tbody>
                                {this.renderRows()}
                         </tbody>   
            </table>
        );
    }

    renderRows(){
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                       <td>{user.name}</td>
                       <td>{user.gender}</td>
                       <td>{user.language}</td>
                       <td>{user.age}</td>
                       <td>{user.birthdate}</td>
                       <td>
                           <button className="btn btn-warning mr-2"
                           onClick={() => this.load(user)}>
                               <i className="fa fa-pencil"></i>
                           </button>
                           <button className="btn btn-danger"
                           onClick={() => this.remove(user)}>
                               <i className="fa fa-trash"></i>
                           </button>
                       </td>
                </tr>
            );
        })
    }

    render(){
        console.log(this.state.list)
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }
}

