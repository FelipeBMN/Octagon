import React,{useState} from 'react';
import $  from 'jquery';
import Head from 'next/head'
import img from 'next/image';



/** Inicio da lista de imagens */
import logo from '../images/logo1.png';
import slider from '../images/slider-img.svg';
import sobre from '../images/engrenagem.svg';
import destaque1 from '../images/destaque1.svg';
import destaque2 from '../images/destaque2.svg';
import destaque3 from '../images/destaque3.svg';
import destaque4 from '../images/destaque4.svg';


/** Fim da lista de imagens */

const font = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";

/** Executa no cliente */
export default function Home({name}) {    

    return ( 
        <div>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={font} rel="stylesheet"/>
            <title>Octagon</title>
            <link rel="icon" href="./favicon1.png"></link>
            </Head>

            {/** Inicio do Header */}
            <div id="header" class="menu">
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
            <div id="slider" class="block">
                <div class="container">
                    <div class="row mt-5">
                        <div class="mt-5 col-md-4 align-self-center mb-md-0 mb-4">
                            <h1>Texto importante escrever aqui</h1>
                            <h4 class="mb-4">Descrição do texto acima com mais detalhes</h4>
                            <a class="btn btn-primary button-slider button-orange d-md-inline-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2">saiba mais</a>
                            <a class="btn btn-outline-primary button-slider button-orange-white d-md-inline-block d-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2">contato</a>
                        </div>
                        <div class="col-md-8 mt-5 align-self-center text-center">
                            <img src={slider} class="img-fluid" alt="slider"/>
                        </div>
                    </div>                
                </div>
            </div>
            {/** Fim do Slider */}

            {/** Incio do sobre */}
            <div id="sobre" class="block">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-6 align-self-center text-center mb-md-0 mb-4 order-md-1 order-2">
                            <img src={sobre} class="img-fluid" alt="slider"/>
                        </div>
                        <div class="col-md-6 align-self-center mb-md-0 mb-5 order-md-2 order-1">
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
                            <button class="btn btn-primary button-orange">entre em contato</button>
                        </div>
                    </div>
                </div>
            </div>
            {/** Fim do sobre */}

            {/** Incio do serviços */}
            <div id="servicos" class="block">
                <div class="container">
                    <h2 class="title text-center">Serviços</h2>
                    <h4 class="subtitle text-center mb-4">
                        Resumo do foco dos serviços realizados pela empresa.
                    </h4>
                    <div class="row">
                        <div class="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" class="destaque">
                                <div class="img-container mb-3">
                                    <img src={destaque1} class="img-fluid" alt="slider"/>
                                </div>
                                <h5 class="text-uppercase  ">Titulo Serviço</h5>
                                <p class="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                        <div class="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" class="destaque">
                                <div class="img-container mb-3">
                                    <img src={destaque2} class="img-fluid" alt="slider"/>
                                </div>
                                <h5 class="text-uppercase">Titulo Serviço</h5>
                                <p class="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                        <div class="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" class="destaque">
                                <div class="img-container mb-3">
                                    <img src={destaque3} class="img-fluid" alt="slider"/>
                                </div>
                                <h5 class="text-uppercase">Titulo Serviço</h5>
                                <p class="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                        <div class="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" class="destaque">
                                <div class="img-container mb-3">
                                    <img src={destaque4} class="img-fluid" alt="slider"/>
                                </div>
                                <h5 class="text-uppercase">Titulo Serviço</h5>
                                <p class="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/** Fim do serviços*/}

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
        </div>   
    )
}

/** O que eu exportar aqui so sera carregado no servidor */