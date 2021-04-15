import React,{ useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Head from 'next/head'
import img from 'next/image';





/** Inicio da lista de imagens */
/*
import logo from '../images/logo1.png';
import slider from '../images/slider-img.svg';
import sobre from '../images/engrenagem.svg';
import destaque1 from '../images/destaque1.svg';
import destaque2 from '../images/destaque2.svg';
import destaque3 from '../images/destaque3.svg';
import destaque4 from '../images/destaque4.svg';
import logo1 from '../images/clientes/logo1.svg';
import logo2 from '../images/clientes/logo2.svg';
import logo3 from '../images/clientes/logo3.svg';
import logo4 from '../images/clientes/logo4.svg';
import logo5 from '../images/clientes/logo5.svg';
import logo6 from '../images/clientes/logo6.svg';
import logo7 from '../images/clientes/logo7.svg';
import logo8 from '../images/clientes/logo8.svg';
import logo9 from '../images/clientes/logo9.svg';
import img_parcerias from '../images/clientes-img.svg';
import telefone from "../images/phone.svg";
import S1 from '../public/servicos/1.jpg';
import S2 from '../public/servicos/2.jpg';
import S3 from '../public/servicos/3.jpg';
import S4 from '../public/servicos/4.jpg';
import S5 from '../public/servicos/5.jpg';
import S6 from '../public/servicos/6.jpg';
import S7 from '../public/servicos/7.jpg';
import S8 from '../public/servicos/8.jpg';
import S9 from '../public/servicos/9.jpg';
import img_depoimento from '../images/user.svg';
import aspas from '../images/quote.svg';
import email from '../images/paperplane.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import linkedin from '../images/linkedin.svg';
import youtube from '../images/youtube.svg';
*/
const logo = './images/logo1.png';
const slider = './images/slider-img.svg';
const sobre = './images/engrenagem.svg';
const destaque1 = './images/destaque1.svg';
const destaque2 = './images/destaque2.svg';
const destaque3 = './images/destaque3.svg';
const destaque4 = './images/destaque4.svg';
const logo1 = './images/clientes/logo1.svg';
const logo2 = './images/clientes/logo2.svg';
const logo3 = './images/clientes/logo3.svg';
const logo4 = './images/clientes/logo4.svg';
const logo5 = './images/clientes/logo5.svg';
const logo6 = './images/clientes/logo6.svg';
const logo7 = './images/clientes/logo7.svg';
const logo8 = './images/clientes/logo8.svg';
const logo9 = './images/clientes/logo9.svg';
const img_parcerias = './images/clientes-img.svg';
const telefone = "./images/phone.svg";
const S1 = './servicos/1.jpg';
const S2 = './servicos/2.jpg';
const S3 = './servicos/3.jpg';
const S4 = './servicos/4.jpg';
const S5 = './servicos/5.jpg';
const S6 = './servicos/6.jpg';
const S7 = './servicos/7.jpg';
const S8 = './servicos/8.jpg';
const S9 = './servicos/9.jpg';
const img_depoimento = './images/user.svg';
const aspas = './images/quote.svg';
const email = './images/paperplane.svg';
const twitter = './images/twitter.svg';
const instagram = './images/instagram.svg';
const facebook = './images/facebook.svg';
const linkedin = './images/linkedin.svg';
const youtube = './images/youtube.svg';
/** Fim da lista de imagens */

const font = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";
  
/** Executa no cliente */
export default function Home() {    

    return ( 
        <div>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={font} rel="stylesheet"/>
            <title>Octagon</title>
            <link rel="icon" href="./favicon1.png"></link>
            </Head> 

            {/** Inicio do Header */}
            <div id="header" className="menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo" nameClass="logo" width={180} height={50}/>
                            </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav bd-highlight">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Página Inicial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sobre-link">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#servicos-link">Serviços</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portifolio-link">Portifólio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contato-link">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>            
            </div>
            {/** Fim do Header */}  

            {/** Inicio do slider */}
            <div id="slider" className="block">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4 mt-5 align-self-center mb-md-0 mb-4">
                            <h1>Texto importante escrever aqui</h1>
                            <h4 className="mb-4">Descrição do texto acima com mais detalhes</h4>
                            <a className="btn btn-primary button-slider button-orange d-md-inline-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2" >saiba mais</a>
                            <a className="btn btn-outline-primary button-slider button-orange-white d-md-inline-block d-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2">contato</a>
                        </div>
                        <div  className="col-md-8 mt-5 align-self-center text-center">
                            <img src={slider} className="img-fluid" alt="slider"/>
                        </div>
                    </div>                
                </div>
                <div id="sobre-link"></div>
            </div>
            {/** Fim do Slider */}

            {/** Incio do sobre */}
            <div id="sobre" className="block">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 align-self-center text-center mb-md-0 mb-4 order-md-1 order-2">
                            <img src={sobre} className="img-fluid" alt="slider"/>
                        </div>
                        <div className="col-md-6 align-self-center mb-md-0 mb-5 order-md-2 order-1">
                            <h2 className="title">Texto importante escrever aqui</h2>
                            <h4 className="subtitle">It is a long established fact that a reader 
                                will be distracted.</h4>
                            <p>It is a long established fact that a reader 
                                will be distracted by the readable content 
                                of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that
                                it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, 
                                content here', making it look like readable 
                                English.</p>
                            <button className="btn btn-primary button-orange">entre em contato</button>
                        </div>
                    </div>
                </div>
                <div id="servicos-link"></div>
            </div>
            {/** Fim do sobre */}
            
            {/** Incio do serviços */}
            <div id="servicos" className="block">
                <div className="container">
                    <h2 className="title text-center">Serviços</h2>
                    <h4 className="subtitle text-center mb-4">
                        Resumo do foco dos serviços realizados pela empresa.
                    </h4>
                    <div className="row">
                        <div className="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" className="destaque">
                                <div className="img-container mb-3">
                                    <img src={destaque1} className="img-fluid" />
                                </div>
                                <h5 className="text-uppercase  ">Titulo Serviço</h5>
                                <p className="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                        <div className="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" className="destaque">
                                <div className="img-container mb-3">
                                    <img src={destaque2} className="img-fluid" />
                                </div>
                                <h5 className="text-uppercase">Titulo Serviço</h5>
                                <p className="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                        <div className="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" className="destaque">
                                <div className="img-container mb-3">
                                    <img src={destaque3} className="img-fluid" />
                                </div>
                                <h5 className="text-uppercase">Titulo Serviço</h5>
                                <p className="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                        <div className="destaque col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <a href="#" className="destaque">
                                <div className="img-container mb-3">
                                    <img src={destaque4} className="img-fluid" />
                                </div>
                                <h5 className="text-uppercase">Titulo Serviço</h5>
                                <p className="mb-0">Descrição do serviço, contendo mais informações e caracteristicas.</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="parcerias-link"></div>
            </div>
            {/** Fim do serviços*/}

            {/** Parcerias */}
            <div id="parcerias" className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="row">
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo1} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo2} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo3} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo4} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo5} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo6} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo7} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo8} className="img-fluid"/>
                                    </a>
                                </div>
                                <div className="col-md-4 col-6 mb-4">
                                    <a src="#" className="link-parceria">
                                        <img src={logo9} className="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="parcerias-texto mt-5">
                                <div className="imagem">
                                    <img src={img_parcerias} className="img-fluid" />
                                    <div className="d-inline-block pl-md-0 pl-3">
                                        <span>10</span>
                                        <p>Anos de Experiências</p>
                                    </div>
                                </div>
                                <div className="telefone">
                                    <img src={telefone} className="img-fluid"/>
                                    <div className="texto d-inline-block pl-md-0 pl-3">
                                        <span>(88) 99854 8475 </span>
                                        Atendimentos de Segunda a Sexta, das 8h as 17h
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="portifolio-link"></div>
            </div>
            {/** Parcerias */}

            {/** Serviços */}
            <div id="portifolio">
                <div className="container">

                    <h2 className="title text-center">Serviços Recentes</h2>
                    <h4 className="subtitle text-center mb-4"> Subtitulo para serviços recentes</h4>
                    <div className="button-group">
                        <button type="button" class="active">Todos</button>
                        <button type="button" data-filter=".SPDA" class="">SPDA</button>
                        <button type="button" data-filter=".Fotovoltaico" class="">Fotovoutaico</button>
                        <button type="button" data-filter=".Residencial" class="">Residencial</button>
                    </div>
                    <div className="row grid">
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 SPDA Fotovoltaico">
                            <a href="/servicos/1.jpg" class="popup-link">
                                <img src={S1} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Fotovoltaico Residencial">
                            <a href="/servicos/2.jpg" class="popup-link">
                                <img src={S2} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Residencial SPDA">
                            <a href="/servicos/3.jpg" class="popup-link">
                                <img src={S3} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Residencial Residencial">
                            <a href="/servicos/4.jpg" class="popup-link">
                                <img src={S4} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Fotovoltaico Residencial">
                            <a href="/servicos/5.jpg" class="popup-link">
                                <img src={S5} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Residencial">
                            <a href="/servicos/6.jpg" class="popup-link">
                                <img src={S6} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Residencial SPDA">
                            <a href="/servicos/7.jpg" class="popup-link">
                                <img src={S7} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 Fotovoltaico SPDA">
                            <a href="/servicos/8.jpg" class="popup-link">
                                <img src={S8} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                        {/*item*/}
                        <div className="element-item col-lg-4 col-6 mb-4 SPDA Fotovoltaico">
                            <a href="/servicos/9.jpg" class="popup-link">
                                <img src={S9} className="img-fluid mb-2"/>
                            </a>
                            <h5 className="text-uppercase mb-1">Lorem Ipsun</h5>
                            <p className="mb-0">
                                <span className="badge bg-light text-dark"> Website</span>
                                <span className="badge bg-light text-dark"> Email</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="depoimentos-link"></div>
            </div>
            {/** Serviços */}
            
            {/** Depoimentos */}
            <div id="depoimentos" className="block">
                <div className="container">
                    <h2 className="title text-center"> Depoimentos </h2>
                    <h4 className="subtitle text-center mb-4"> Subtitulo para depoimentos recentes</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="depoimento">
                                <img src={img_depoimento} className="img-fluid"/>
                                <div className="depoimento-texto pl-3">
                                    <p> Aqui ira estar escrito o depoimento do cliente entre outras coisas
                                    Aqui ira estar escrito o depoimento do cliente entre outras coisas
                                    Aqui ira estar escrito o depoimento do cliente entre outras coisas
                                    </p>
                                    <p className="name"> <span>Felipe Bruno </span>/ Vice - Diretor da Octagon Engenharia</p>
                                    <p className="mb-0 float-left"><img src={aspas}/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="depoimento">
                                <img src={img_depoimento} className="img-fluid"/>
                                <div className="depoimento-texto pl-3">
                                    <p> Aqui ira estar escrito o depoimento do cliente entre outras coisas 
                                        Aqui ira estar escrito o depoimento do cliente entre outras coisas 
                                        Aqui ira estar escrito o depoimento do cliente entre outras coisas
                                    </p>
                                    <p className="name"><span>Felipe Bruno </span>/ Vice - Diretor da Octagon Engenharia</p>
                                    <p className="mb-0 float-left"><img src={aspas}/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contato-link"></div>
            </div>
            {/** Depoimentos */}

            {/** Footer */}
            <div id="contato">
                <div class="container">
                    <div class="email">
                        <img src={email}/>
                        <h2 class="title text-center">
                             Fique por dentro das promoções.
                        </h2>
                        <h4 class="subtitle text-center">
                            Texto á ser auterado posteriormente apos revisão tecnicas e feedbacks.
                        </h4>
                        <form>
                            <div class="flex-md-grow-1 pr-md-3 pb-md-0 pb-3">
                                <label for='email' class="sr-only">E-mail</label>
                                <input type="email" class="form-control w-100" id="email_input" placeholder="Seu Email"></input>
                            </div>
                            <div class="flex0=-grow-1 flex-md-grow-0">
                                <button type="submit" class="btn btn-light button mb-3 d-md-inline d-block w-100" >
                                    Cadastre-se
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="logo py-4">
                        <div class="row">
                            <div class="col-md-6">
                                <img src={logo} class="logo_foot img-fluid"/>
                            </div>
                            <div class="col-md-6  text-center align-self-center">
                                <ul>
                                    <li>
                                        <a href="#"><img src={facebook}/></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={instagram}/></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={twitter}/></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={linkedin}/></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={youtube}/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/** Footer */}


            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
            <script src="./js/bootstrap.min.js"></script>
            <script src="./js/isotope.js"></script>
            <script src="./js/plugins.js"> fixImages();</script>
        </div>   
    )
}

/** O que eu exportar aqui so sera carregado no servidor
 * 
 */

