var yo = require('yo-yo');
var empty = require('empty-element');

var el = yo`<header>
	<div class="sub-header">
		<a href="https://facebook.com/DelfinaGomezAlvarez">
			<img src="facebook.svg", alt="facebook" alt="">
		</a>
		<a href="https://twitter.com/delfinagomeza">
			<img src="twitter.svg", alt="facebook" alt="">
		</a>
		<a href="https://facebook.com/CEEMorenaEdoMex">
			<img src="facebook.svg", alt="facebook" alt="">
		</a>
		<a href="https://twitter.com/MorenaEdoMex">
			<img src="twitter.svg", alt="facebook" alt="">
		</a>
	</div>
	<div class="row">
		<div class="header-logo">
			<img src="LOGOENFONDOBLANCO.svg" alt="" class="brand-logo">
			<img src="SOBERANIANACIONAL.svg" alt="" class="brand-logo">
		</div>
	</div>
	<div class="container">
	<nav class="row">
		<div class="nav-wrapper">
			<a href="#" class="button-collapse activates='mobile-demo">
				<i class="material-icons">menu</i>
			</a>
			<ul class="hide-on-med-and-down">
				<li><a href="index.html">Inicio</a></li>
				<li><a href="foro-regional.html">Foro Regional</a></li>
				<li><a href="agenda.html">Agenda</a></li>
			</ul>
			<ul id="mobile-demo" class="side-nav">
				<li><a href="index.html">Inicio</a></li>
				<li><a href="foro-regional.html">Foro Regional</a></li>
				<li><a href="agenda.html">Agenda</a></li>
			</ul>
		</div>
	</nav>
</div>
</header>`;

function lang(locale) {
  localStorage.locale = locale;
  location.reload();
  return false;
}

document.getElementById('header-container').appendChild(el);