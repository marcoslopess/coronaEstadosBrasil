import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ApiBrasil from '../../services/ApiBrasil';
import ApiWorld from '../../services/ApiWorld';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Dashboard() {
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const [incidentsBrasil, setIncidentsBrasil] = useState([]);

    useEffect(() => {

        ApiWorld.get(``).then(response => {
            setIncidentsBrasil([response.data]);
        })

        localStorage.getItem('estado') ?

            ApiBrasil.get(`v1/brazil/uf/${localStorage.getItem('estado')}`).then(response => {
                setIncidents([response.data]);
            })

            :

            ApiBrasil.get('v1').then(response => {
                setIncidents(response.data.data);
            })

    }, []);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    let dateFormated;

    return (
        <div className="dashboard-container">
            <header>
                <img src={logoImg} alt="Painel Corona Vírus" />
                <span>Bem Vindo (a)</span>
                <Link to="/" className="button-logoff" onClick={handleLogout} >Sair</Link>
            </header>

            <h1>Casos totais do Brasil</h1>

            <ul>
                {incidentsBrasil.map(incidentBrasil => (
                    <li key={incidentBrasil.sourceUrl}>
                        <h2>Brasil</h2>
                        <p> <strong>{(incidentBrasil.infected).toLocaleString('pt-BR')} Casos confirmados</strong> </p>
                        <p> <strong>{(incidentBrasil.recovered).toLocaleString('pt-BR')} Casos recuperados</strong> </p>
                        <p> <strong>{(incidentBrasil.deceased).toLocaleString('pt-BR')} Óbitos confirmados</strong> </p>
                        <h6>Atualizado {" "}
                            {console.log(dateFormated = new Date(incidentBrasil.lastUpdatedAtSource))}
                    dia {dateFormated.toLocaleDateString()} {" "} ás {dateFormated.toLocaleTimeString()}
                        </h6>
                        <h5>Fonte: {"  "}
                            <a href="https://apify.com" target="blank" aria-label="Apify">
                                <img
                                    src={require(`../../assets/apify.svg`)}
                                    width="40px"
                                    alt="APIFY"
                                />
                            </a>
                        </h5>
                        <button type="button" className="coutry-button">
                            <img
                                src={require(`../../assets/estados/BR.png`)}

                                alt={incidentBrasil.country}
                            />
                        </button>
                    </li>
                ))}
            </ul>

            {localStorage.getItem('estado') ? (
                <div>
                    <h1>Casos no Brasil de um estado</h1>
                    <ul>
                        {incidents.map(incident => (
                            <li className="one-state-li" key={incident.uid}>
                                <h2>{incident.state}</h2>
                                <p> <strong>{(incident.cases).toLocaleString('pt-BR')} Casos</strong> </p>
                                <p> <strong>{(incident.suspects).toLocaleString('pt-BR')} Casos suspeitos</strong> </p>
                                <p> <strong>{(incident.deaths).toLocaleString('pt-BR')} Óbitos</strong> </p>
                                <h6>Atualizado {" "}
                                    {console.log(dateFormated = new Date(incident.datetime))}
								dia {dateFormated.toLocaleDateString()} {" "} ás {dateFormated.toLocaleTimeString()}
                                </h6>
                                <h5>Fonte: {"  "}
                                    <a href="https://covid19-brazil-api.now.sh/status" target="blank" aria-label="Covid 19 Brasil API">
                                        {" "}
                           Covid 19 Brasil API {" "}
                                        <img
                                            src={require(`../../assets/covid19BrasilApi.svg`)}
                                            width="15px"
                                            alt="Covid 19 Brasil API"
                                        />
                                    </a>
                                </h5>
                                <button type="button" className="one-button" >
                                    <img
                                        src={require(`../../assets/estados/${incident.uf}.png`)}

                                        alt={incident.state}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                    <div>
                        <h1>Casos no Brasil por estados</h1>
                        <div>
                            <ul >
                                {incidents.map(incident => (
                                    <li key={incident.uid}>
                                        <h2>{incident.state}</h2>
                                        <p> <strong>{(incident.cases).toLocaleString('pt-BR')} Casos</strong> </p>
                                        <p> <strong>{(incident.suspects).toLocaleString('pt-BR')} Casos suspeitos</strong> </p>
                                        <p> <strong>{(incident.deaths).toLocaleString('pt-BR')} Óbitos</strong> </p>
                                        <h6>Atualizado {" "}
                                            {console.log(dateFormated = new Date(incident.datetime))}
								dia {dateFormated.toLocaleDateString()} {" "} ás {dateFormated.toLocaleTimeString()}
                                        </h6>
                                        <h5>Fonte: {"  "}
                                            <a href="https://covid19-brazil-api.now.sh/status" target="blank" aria-label="Covid 19 Brasil API">
                                                {" "}
                           Covid 19 Brasil API {" "}
                                                <img
                                                    src={require(`../../assets/covid19BrasilApi.svg`)}
                                                    width="15px"
                                                    alt="Covid 19 Brasil API"
                                                />
                                            </a>
                                        </h5>
                                        <button type="button" >
                                            <img
                                                src={require(`../../assets/estados/${incident.uf}.png`)}

                                                alt={incident.state}
                                            />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
        </div>
    )
}