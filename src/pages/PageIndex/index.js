import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.png'
import loginImg from '../../assets/loginImg.svg'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            localStorage.setItem('estado', id);
            history.push('/dashboard');

        } catch (err) {
            alert('Falha no login, tente novamente!')
        }
    }

    return (
        <div id="page-landing">
            <div className="logon-container" id="container-logon-content">
                <section className="form">
                    <form onSubmit={handleLogin} className="mobile-content">
                        <img src={logoImg} className="logo-top-img" alt="Painel Corona Vírus" />
                        <h2>Acesse o painel nacional</h2>
                        <button className="button" type="submit" >Acessar</button>
                        <h2>ou</h2>
                        <h2>Acesse o painel por estado</h2>
                        <select name="estados-brasil"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <button className="button-selection" type="submit" >
                            Acessar
                        </button>
                    </form>
                </section>
                <img src={loginImg} className="img-logon" alt="Heroes" />
            </div>
        </div>
    )
}