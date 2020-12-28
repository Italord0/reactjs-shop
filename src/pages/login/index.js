import { useState } from 'react'
import React from 'react'
import './index.css';

import api from '../../services/api'
import alert from '../../util/alert'

export default function Login({ history }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(event) {
        event.preventDefault()

        const response = await api.post('/user/login', {
            email, password
        }).catch(err => {

            switch (err.response.status) {
                case 401:
                    alert('error', 'Usuário ou senha incorretos. Informe os dados corretamente e tente novamente.',{
                        position : "top-center"
                    })
                    break;
                default:
                    alert('error', 'Ocorreu um erro desconhecido. :(',{
                        position : "top-center"
                    })
                    break;
            }
        }
        )

        if (response) {
            if (response.status === 200) {

                const usuario = response.data
                delete usuario.password

                alert('sucess', 'Olá '+ usuario.name +'!')

                localStorage.setItem("user", JSON.stringify(usuario))
                history.push('/shop')
            }
        }

    }

    return (
        <>
            <label>
                Faça o <strong>login</strong> para acessar a loja
        </label>

            <form onSubmit={handleLogin}>
                <label htmlFor="email"> E-Mail </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Seu e-mail"
                    onChange={event => setEmail(event.target.value)} />

                <label htmlFor="password"> Senha </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={event => setPassword(event.target.value)} />

                <button type="submit"> Entrar </button>

            </form>
        </>
    )
}