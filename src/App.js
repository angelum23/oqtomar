import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputCerveja: " "
    };
  }
  handleChange(value) {
    debugger;
    console.log(this.state.inputCerveja);
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
        {/* <script
          type="text/javascript">WebFont.load({google: {families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic"]}});</script>
        <script
          type="text/javascript">!function (o, c) {var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")}(window, document);</script> */}
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
                <input type="text" value={this.state.inputCerveja} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </div>
            <div class="hero-right"><img
                src="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0b18a2d14094fbdc390e_appia_600ml.png"
                width="239"
                srcset="https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0b18a2d14094fbdc390e_appia_600ml-p-500.png 500w, https://uploads-ssl.webflow.com/634b09489902363a74804f8f/634b0b18a2d14094fbdc390e_appia_600ml.png 540w"
                sizes="(max-width: 479px) 100vw, 239px" alt="" class="produto" />
              <p class="caption-1">Por ser uma cerveja leve, a Colorado Appia vai combinar muito bem comidas mais leves como
                pernil, saladas, frango, massas e queijo brie.</p>
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
        <script>
          $.()
        </script>
      </html>
  )}
}

export default App;
