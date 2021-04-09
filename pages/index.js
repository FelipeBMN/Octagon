import React from 'react';
import 'bootstrap/dist/css/main.css';
import Image from 'next/image';

/** Inicio da lista de imagens */
import logo from '../images/Logo1.png';
import slider from '../images/slider-img.svg';
import sobre from '../images/engrenagem.svg';
/** Fim da lista de imagens */

const font = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";
function Home() {
    return ( 
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={font} rel="stylesheet"/>
            {/** Inicio do Header */}
            <div id="header">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="logo" nameClass="logo" width={180} height={50}/>
                            </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav bd-highlight">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Página Inicial</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sobre</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Serviços</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Portifólio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>            
            </div>
            {/** Fim do Header */}  

            {/** Inicio do slider */}
            <div id="slider">
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-4 align-self-center mb-md-0 mb-4">
                            <h1>Texto importante escrever aqui</h1>
                            <h4 class="mb-4">Descrição do texto acima com mais detalhes</h4>
                            <a class="btn btn-primary button-slider button-orange d-md-inline-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2">saiba mais</a>
                            <a class="btn btn-outline-primary button-slider button-orange-white d-md-inline-block d-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2">contato</a>
                        </div>
                        <div class="col-md-8 align-self-center text-center">
                            <img src={slider} class="img-fluid" alt="slider"/>
                        </div>
                    </div>
                </div>
            </div>
            {/** Fim do Slider */}

            {/** Incio do sobre */}
            <div id="sobre">
                <div class="container mt-4">
                    <div class="row">
                        <div class="col-md-6 align-self-center text-center mb-md-0 mb-4">
                            <img src={sobre} class="img-fluid" alt="slider"/>
                        </div>
                        <div class="col-md-6 align-self-center mb-md-0 mb-4">
                            <h2 class="title">Texto importante escrever aqui</h2>
                            <h4 class="subtitle">It is a long established fact that a reader 
                                will be distracted.</h4>
                            <p>It is a long established fact that a reader 
                                will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that
                                it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, 
                                content here', making it look like readable 
                                English.</p>
                            <button class="btn btn-primary">entre em contato</button>
                        </div>
                    </div>
                </div>
            </div>
            {/** Fim do sobre */}

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
        </div>   
    )
}

export default  Home

