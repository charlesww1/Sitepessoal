import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
     <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Site Portfolio Parallax</title>
    </head>
    <body>
      <section className="header-site">
        <div className="container">
            <div className="row">
              <div className="col-12">
                    <h1 className="text-center">BEM VINDO</h1>
                    <p className="lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-center">
                      <a href="#" className="btn btn-danger">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="content-site">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                  <h1 className="text-center"> Sed tincidunt lobortis ex, non accumsan arcu tincidunt sed. Mauris non ultricies tellus</h1>

                  <p className="text-center">Etiam ac massa magna. Vivamus vehicula risus sed ante feugiat,
                  sed venenatis diam fermentum. Aliquam tincidunt enim nisl, id laoreet dui accumsan at.
                  Praesent a imperdiet massa. Integer et turpis sit amet libero tempor interdum. 
                  Integer sagittis molestie turpis vitae lacinia. Pellentesque elementum neque at placerat 
                  dapibus. Quisque hendrerit sollicitudin eros eu ultrices. Nam pretium nisl vitae justo 
                  consectetur, a rhoncus erat aliquam. Mauris efficitur eu elit eu lobortis.</p>
                
                <br></br>
                </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img src="img01.jpg" width="320" height="205"/>
                    <div className="caption text-center">
                      <h3>Titulo da Imagem</h3>
                      <p>Curabitur vitae dignissim lacus. Maecenas scelerisque lacus sed neque vulputate 
                        molestie. Etiam suscipit at orci sed condimentum. Donec sit amet cursus lectus. </p>
                    </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="thumbnail">
                  <img src="img02.jpg" width="320" height="205"/>
                    <div className="caption text-center">
                      <h3>Titulo da Imagem</h3>
                      <p>Duis dapibus lacus vitae neque laoreet, nec auctor felis suscipit.
                        Donec dapibus maximus velit nec bibendum. Morbi laoreet nec nisi faucibus tincidunt.
                        Curabitur dignissim molestie tellus, ac laoreet enim commodo placerat.
                        Pellentesque elementum lacus ac libero cursus varius.</p>
                    </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="thumbnail">
                  <img src="img03.jpg" width="320" height="205"/>
                    <div className="caption text-center">
                      <h3>Titulo da Imagem</h3>
                      <p>Fusce vel malesuada ante. Vestibulum consectetur ex sapien, 
                        sit amet pretium elit ullamcorper nec. Curabitur dapibus ultricies sem in mollis. 
                        Pellentesque accumsan non ante id elementum. Sed maximus magna lectus, 
                        ac venenatis sem tempus ac. Vestibulum erat sapien, lacinia viverra erat eu, 
                        pulvinar faucibus magna.</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="img-site">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Orci varius natoque penatibus</h1>
              <p className="lead text-center">Cras aliquet, arcu ut imperdiet porttitor, orci enim maximus lectus, 
              vitae ullamcorper felis tortor ut mauris. Maecenas nec nunc in urna tincidunt commodo in vel nunc. 
              Cras in augue vitae est placerat interdum. Vestibulum sit amet dolor et ligula fermentum congue. 
              Proin porttitor tincidunt leo nec pretium. In nisi enim, euismod nec ante nec, dignissim ultrices neque. 
              Nulla ultricies tellus vel congue vulputate. Morbi efficitur auctor dui, vitae pellentesque elit lacinia a</p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-site">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p className="text-center">malesuada ante. Vestibulum consectetur ex sapien, 
              sit amet pretium elit ullamcorper nec. Curabitur dapibus ultricies sem in mollis.
              Pellentesque accumsan non ante id elementum. Sed maximus magna lectus, ac venenatis 
              sem tempus ac. Vestibulum erat sapien, lacinia viverra erat eu, pulvinar faucibus magna. 
              Fusce congue leo sed leo aliquet, et iaculis felis fringilla. Mauris nisl ex, efficitur vel 
              venenatis eget, ornare</p>
              
              
              <span className="footer-texto">Desenvolvido com muito <i className="fa fa-heart text-danger"></i> e <i className="fa fa-coffee"></i></span>

            </div>
          </div>
        </div>
      </section>
    
    </body>
    </div>
  );
}

export default App;
