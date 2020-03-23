import React, {Component} from 'react';
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: "users",
    title: "Estatística",
    subtitle: "Estatística de usuário"

}       

const baseUrl = 'http://localhost:3001/user'
const initState= {
    user: { name:'', email:''},
    list: []
}

export default class UserEstatistic extends Component{
    render(){
        return(
            <Main {...headerProps}>
                Cadastro user
            </Main>
        );
    }
}