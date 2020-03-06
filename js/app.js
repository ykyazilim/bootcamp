 

function index(id){
		menu = document.getElementsByClassName('active')[0];
		menu.classList.remove("active");
		document.getElementById(id).classList.add("active");
	document.getElementById('urunler').innerHTML= ``;
	document.getElementById('iletisim').innerHTML= ``;
	document.getElementById('hakkimizda').innerHTML= ``;
	var item = document.getElementById('index');
	item.innerHTML = `
	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

	<ol class="carousel-indicators">

	<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>

	<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

	<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

	</ol>

	<div class="carousel-inner">

	<div class="carousel-item active">

	<img src="img/slider.jpg"   class="d-block img-fluid" alt="https://picsum.photos/1200/400">

	</div>

	<div class="carousel-item">

	<img src="img/slider.jpg" class="d-block w-100" alt="https://picsum.photos/1200/400">

	</div>

	<div class="carousel-item">

	<img src="img/slider.jpg" class="d-block w-100" alt="https://picsum.photos/1200/400">

	</div>

	</div>

	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

	<span class="carousel-control-prev-icon" aria-hidden="true"></span>

	<span class="sr-only">Geri</span>

	</a>

	<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">

	<span class="carousel-control-next-icon" aria-hidden="true"></span>

	<span class="sr-only">İleri</span>

	</a>

	</div>

	<div class="container">

	<div class="row">



	<div class="col-12 mt-4 text-center text-warning">

	<h1><strong>Ürünler</strong></h1>

	</div>

	<div class="col-md-4 col-sm-6">

	<div class="card" style="border-radius: 5px">

	<img src="img/urun.jpg" class="card-img-top" alt="...">

	<div class="card-body">

	<h5 class="card-title">Lorem İpsum</h5>

	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

	<center><a style="width: 100%" href="#" class="btn btn-warning">İncele</a></center>

	</div>

	</div>





	</div>

	<div class="col-md-4 col-sm-6">

	<div class="card" >

	<img src="img/urun.jpg" class="card-img-top" alt="...">

	<div class="card-body">

	<h5 class="card-title">Lorem İpsum</h5>

	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

	<center><a style="width: 100%" href="#" class="btn btn-warning">İncele</a></center>

	</div>

	</div>





	</div>

	<div class="col-md-4 col-sm-6">

	<div class="card" >

	<img src="img/urun.jpg" class="card-img-top" alt="...">

	<div class="card-body">

	<h5 class="card-title">Lorem İpsum</h5>

	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

	<center><a style="width: 100%" href="#" class="btn btn-warning">İncele</a></center>

	</div>

	</div>





	</div>





	</div>



	<div class="row mt-4">

	<div class="col-sm-8 offset-sm-2">

	<div class="card text-center">

	<div class="card-header bg-warning">

	Hakkımızda

	</div>

	<div class="card-body">



	<p class="card-text">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>

	<p class="card-text">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>

	<p class="card-text">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>



	</div>

	<div class="card-footer text-muted bg-warning">

	YK Yazılım

	</div>

	</div>

	</div>

	</div>

	</div>  
	`; }




	function hakkimizda(id){
			menu = document.getElementsByClassName('active')[0];
		menu.classList.remove("active");
		document.getElementById(id).classList.add("active");
		document.getElementById('iletisim').innerHTML= ``;
		document.getElementById('index').innerHTML= ``;
		document.getElementById('urunler').innerHTML= ``;
		document.getElementById('hakkimizda').innerHTML= `<div class="container">
		<div class="row mt-4">

		<div class="col-sm-8 offset-sm-2">

		<div class="card text-center">

		<div class="card-header bg-warning">

		Hakkımızda

		</div>

		<div class="card-body">



		<p class="card-text">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>

		<p class="card-text">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>

		<p class="card-text">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>



		</div>

		<div class="card-footer text-muted bg-warning">

		YK Yazılım

		</div>

		</div>

		</div>

		</div>
		</div>`;



	}
	function iletisim(id){
			menu = document.getElementsByClassName('active')[0];
		menu.classList.remove("active");
		document.getElementById(id).classList.add("active");
		document.getElementById('hakkimizda').innerHTML= ``;
		document.getElementById('index').innerHTML= ``;

		document.getElementById('iletisim').innerHTML= `<div class="container">
		<div class="row">

		<div class="col-sm-8 offset-sm-2 mt-5 p-4 bg-light">
		<h1>Lorem.</h1>

		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias doloremque fugiat minima! Aperiam ad vero, hic ex odio consectetur earum tenetur, voluptas nulla aliquam eveniet pariatur! Tempore, veritatis ipsam?
		</div>
		</div>
		</div>`;



	}	
	function urunler(id){
		menu = document.getElementsByClassName('active')[0];
		menu.classList.remove("active");
		document.getElementById(id).classList.add("active");
	 
 
		document.getElementById('hakkimizda').innerHTML= ``;
		document.getElementById('index').innerHTML= ``;
		document.getElementById('iletisim').innerHTML= ``;

		document.getElementById('urunler').innerHTML= `<div class="container"><div class="row">



		<div class="col-12 mt-4 text-center text-warning">

		<h1><strong>Ürünler</strong></h1>

		</div>

		<div class="col-md-4 col-sm-6">

		<div class="card" style="border-radius: 5px">

		<img src="img/urun.jpg" class="card-img-top" alt="...">

		<div class="card-body">

		<h5 class="card-title">Lorem İpsum</h5>

		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

		<center><a style="width: 100%" href="#" class="btn btn-warning">İncele</a></center>

		</div>

		</div>





		</div>

		<div class="col-md-4 col-sm-6">

		<div class="card" >

		<img src="img/urun.jpg" class="card-img-top" alt="...">

		<div class="card-body">

		<h5 class="card-title">Lorem İpsum</h5>

		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

		<center><a style="width: 100%" href="#" class="btn btn-warning">İncele</a></center>

		</div>

		</div>





		</div>

		<div class="col-md-4 col-sm-6">

		<div class="card" >

		<img src="img/urun.jpg" class="card-img-top" alt="...">

		<div class="card-body">

		<h5 class="card-title">Lorem İpsum</h5>

		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

		<center><a style="width: 100%" href="#" class="btn btn-warning">İncele</a></center>

		</div>

		</div>





		</div>





		</div>
		</div>`;



	}