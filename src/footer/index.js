var yo = require('yo-yo');

var el = yo`<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l3 s12">
                <div class="col l12 s12">
                  <img src="LOGOENFONDOVINO.svg" alt="logo morena">
                </div>
                <div class="row contacto">
                  <div class="col l6 s12">
                    <h5 class="white-text">Contacto</h5>
                    <a href="mailto:"><strong>Correo:</strong> info@info.com</a>
                    <a href="tel:"><strong>Telefono: </strong> 23423423423</a>
                  </div>
                 <div class="col l6 s12">
                    <h5 class="white-text">Mapa del Sitio</h5>
                    <ul>
                      <li><a class="grey-text text-lighten-3" href="#!">Inicio</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Foro Regional</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Agenda</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                 </div>
                  
                  
                </div>
              </div>
              <div class="col l8 s12">
                <div class="row">
                  <div class="col l5 s12 twitter">
                    <a class="twitter-timeline" href="https://twitter.com/search?q=%40delfinagomeza" data-widget-id="755868849023557633">Tweets sobre @delfinagomeza</a>
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                  </div>
                  <div class="col l4 s12 facebook">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDelfinaGomezAlvarez&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=172641376135885" width="340" height="214" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCEEMorenaEdoMex&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1084090304946715" width="340" height="214" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                  </div>
                </div>
               
              </div>
          </div>
          </div>
            
          <div class="footer-copyright">
            <div class="container">
            © 2016 Derechos Reservados
            </div>
          </div>
        </footer>`;

document.getElementById('footer-container').appendChild(el);
