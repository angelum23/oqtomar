import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      imagemCerveja: "",
      descricaoCerveja: "",
      objetoAlimentoCerveja: 
      [
        {
          'codigo': 'macarrao com frango',
          'nome': 'Appia',
          'descricao': "Por ser uma cerveja leve, a Colorado Appia vai combinar muito bem comidas mais leves como" +
          "pernil, saladas, frango, massas e queijo brie.",
          'imagem': 'https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-06/appia-600ml_0.png.webp?itok=4iy4NoHH'
        }, 
        {
          'codigo': 'frutos do mar',
          'nome': 'Polar',
          'descricao': 'Produzida a partir de maltes e lúpulos selecionados, Polar Export tem cor clara, processo de baixa fermentação, com aroma, sabor e amargor suaves.',
          'imagem': 'https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/Polar%20600ml.png.webp?itok=Vc3d6O2z'
        },
        {
          'codigo': 'salsichao',
          'nome': 'Franziskaner Hell',
          'descricao': 'A Franziskaner Hefe Weissbier Hell é uma cerveja de trigo clara, turva, com aroma frutado, lembrando banana e cravo. Espuma abundante, branca e cremosa.Tem um teor alcoólico de 5% e harmoniza com saladas, peixes e frutos do mar.',
          'imagem': 'https://www.ambev.com.br/sites/g/files/wnfebl5836/files/styles/webp/public/paragraphs/product_size/2022-09/Franziskaner%20Hell%20500ml.png.webp?itok=hVw5dDNp'
        }
      ]
    };

  
    this.arrayCervejas = ['appia', 'brahma', 'skol']
    this.arrayAlimentos = ['Macarrão com frango', 'Suruba', 'Morte']
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let texto = event.target.value;  
    let objetoSelecionado = this.state.objetoAlimentoCerveja.find(x => x.codigo == this.normalizarString(texto))

    if (objetoSelecionado) {
      this.state.imagemCerveja = objetoSelecionado.imagem;
      this.state.descricaoCerveja = objetoSelecionado.descricao;  
    } else {
      this.state.imagemCerveja =  "";
      this.state.descricaoCerveja = "";
    }    
  
    document.getElementById('imagem').setAttribute('src', this.state.imagemCerveja)
    document.getElementById('textoCerveja').innerHTML = this.state.descricaoCerveja;
  }
  normalizarString(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  render() {
    return(
      <html data-wf-domain="o-que-tomar.webflow.io" data-wf-page="634b09489902369e50804f92"
        data-wf-site="634b09489902363a74804f8f" data-wf-status="1">
          
      <head>
        <meta charset="utf-8" />
        <title>O QUE TOMAR</title>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <head>      
            <script src="jquery-3.6.0.min.js"></script>
        </head>
        <meta content="Webflow" name="generator" />
        <link href="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/css/o-que-tomar.webflow.e93167c35.css"
          rel="stylesheet" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <link href="https://uploads-ssl.webflow.com/img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="https://uploads-ssl.webflow.com/img/webclip.png" rel="apple-touch-icon" />
      </head>

      <body>
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" class="nav w-nav">
        <div class="nav-container w-container"><a href="#" class="logo w-nav-brand"><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco.png"
              width="119"
              srcset="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco-p-500.png 500w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco-p-800.png 800w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco.png 1497w"
              sizes="119px" alt="" /></a>
          <nav role="navigation" class="nav-menu w-nav-menu"><a href="#" class="nav-link w-nav-link">Home</a><a href="#"
              class="nav-link w-nav-link">Sobre</a><a href="#" class="nav-link w-nav-link">Contato</a></nav>
          <div class="w-nav-button">
            <div class="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
        <div class="hero-section">
          <div class="hero-wrap">
            <div class="hero-left">
              <h1 class="heading-1">O que tomar com...</h1>
                <input class="button w-button" type="text" value={this.state.inputCerveja} onChange={this.handleChange} />
            </div>
            <div class="hero-right">
              <img
                id="imagem"
                src={this.state.imagemCerveja}
                width="100"
                height="auto"/>
              <p id="textoCerveja" class="caption-1"></p>
            </div>
          </div>
        </div>
        <div class="logos-section">
          <div class="logos-wrap"><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0df5a42202d045d4772a_beer-3243375_1289a_hd.png"
              width="68" alt="" class="customers-logo" /><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev.png"
              width="106"
              srcset="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev-p-500.png 500w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev-p-800.png 800w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev-p-1080.png 1080w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev-p-1600.png 1600w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev-p-2000.png 2000w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0cdb4241cc7f7ee4a69a_Logo_Ambev.png 3001w"
              sizes="106px" alt="" class="customers-logo" /><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0e3da422028368d47a88_cerveja-polar-logo-B055A9060F-seeklogo.com.png"
              width="71" alt="" class="customers-logo" /><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0d6105fc1020f382d748_c384aba5b679a072ee99b53d50fa3c5c84415218.png"
              width="80" alt="" class="customers-logo" /><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0f5c6088708d572453aa_Hoegaarden-beer-Logo.png"
              width="132"
              srcset="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0f5c6088708d572453aa_Hoegaarden-beer-Logo-p-500.png 500w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0f5c6088708d572453aa_Hoegaarden-beer-Logo-p-800.png 800w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0f5c6088708d572453aa_Hoegaarden-beer-Logo-p-1080.png 1080w"
              sizes="132px" alt="" class="customers-logo" /><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0ede9902362353809fc0_kisspng-kona-brewing-company-beer-goose-island-brewery-fir-5b17470e16f957.8248200415282521740941.png"
              width="89"
              srcset="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0ede9902362353809fc0_kisspng-kona-brewing-company-beer-goose-island-brewery-fir-5b17470e16f957.8248200415282521740941-p-500.png 500w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0ede9902362353809fc0_kisspng-kona-brewing-company-beer-goose-island-brewery-fir-5b17470e16f957.8248200415282521740941.png 653w"
              sizes="89px" alt="" class="customers-logo" /><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0e85428502f625508461_Franziskaner_Weissbier-logo-2DA2F118E5-seeklogo.com.png"
              width="63" alt="" class="customers-logo" /></div>
        </div>
        <div class="class-section">
          <div class="wrap-2 a">
            <div class="left-1">
              <h2 class="heading-2">Por que harmonizar?</h2>
              <p class="paragraph-2 texto1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum est
                sapien, nec vehicula massa tempor vel. Etiam vitae venenatis libero, at rutrum ligula. Mauris scelerisque mi
                sit amet arcu molestie rutrum. Maecenas sollicitudin lorem eget pellentesque posuere. Nulla facilisi.</p>
            </div>
            <div class="right-1"><img
                src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b1380a42202589fd4bf1e_nossa-historia-2007.jpg"
                width="300" alt="" class="produto institucional" /></div>
          </div>
          <div class="wrap-2 b">
            <div class="left-2"><img
                src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b156a5cb8ac9b44f115f5_nossa-historia-2008.jpg"
                width="300" height="246" alt="" class="produto institucional" /></div>
            <div class="right-2">
              <h2 class="heading-2">Na hora certa, a cerveja certa.</h2>
              <p class="paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum est sapien,
                nec vehicula massa tempor vel. Etiam vitae venenatis libero, at rutrum ligula. </p>
            </div>
          </div>
        </div>
        <div class="footer-top">
          <div class="footer-top-wrap"><img
              src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco.png"
              width="107"
              srcset="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco-p-500.png 500w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco-p-800.png 800w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b21cbee4611bc06b8181a_logo%20oq%20tomar%20branco.png 1497w"
              sizes="107px" alt="" class="footer-logo" />
            <div class="footer-link-wrap"><a href="#" class="footer-link">Home</a><a href="#" class="footer-link">Sobre</a><a
                href="#" class="footer-link">Contato</a></div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-wrap">
            <div class="legal">© 2022, O Que Tomar, Inc. Todos os direitos reservados. Site demonstrativo.</div>
          </div>
        </div>
        <div class="w-embed">
        </div>
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=634b09489902363a74804f8f"
          type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"></script>
        <script src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/js/webflow.d78855d00.js"
          type="text/javascript"></script>
      </body>
      </html>
  )}
}

export default App;
