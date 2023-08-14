const container = document.querySelector('.container__boxes');

const ElSalvador = (() => {
	'use strict';

	const APIKey = 'fa9245836bb20ea2ba0598a2b37872af';
	const idioma = 'es';
	const unidades = 'imperial';

	const tiempo = () => {
		let img = document.querySelector('.container__title img');
		const horaActual = new Date();
		const horaEspecifica = new Date();
		horaEspecifica.setHours(6); // Establece la hora a las 6:00 AM
		horaEspecifica.setMinutes(0); // Establece los minutos a 0
		horaEspecifica.setSeconds(0); // Establece los segundos a 0

		// Compara si la hora actual está dentro del intervalo de 6:00 AM a 5:59 PM
		if (horaActual.getTime() >= horaEspecifica.getTime() && horaActual.getHours() < 18) {
			img.src = 'Img/icons8-sol-80.png';
		} else {
			img.src = 'Img/icons8-luna-80.png';
		}
	};

	const ObtenerClima = (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${idioma}&appid=${APIKey}&units=${unidades}`;

		fetch(endpoint)
			.then((resultado) => {
				const promesa = resultado.json();

				promesa.then((datos) => {
					const plantilla = `
							<div class="box">
								<div class="box__data">
									<div class="box__content">
										<img title="${datos.weather[0].description}" src="https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png" alt="" class="box__content--img">
									</div>

									<div class="box__content">
										<h2 class="box__h2">${datos.name}</h2>
										<span class="box__span">${datos.sys.country}</span>
									</div>

									<div class="box__content">
										<a href="https://www.ventusky.com/?p=13.85;-88.25;7&l=temperature-2m&t=20230813/21"
											target="_blank">
											<h2 class="box__h2">${datos.main.temp} °C</h2>
											<span class="box__span">Temperatura</span>
										</a>
									</div>

									<div class="box__content">
										<a href="https://www.ventusky.com/?p=13.78;-88.04;7&l=humidity&t=20230813/21" target="_blank">
											<h2 class="box__h2">${datos.main.humidity} %</h2>
											<span class="box__span">Humedad</span>
										</a>
									</div>

									<div class="box__content">
										<a href="https://www.ventusky.com/?p=13.78;-88.04;7&l=clouds-total&t=20230813/19"
											target="_blank">
											<h2 class="box__h2">${datos.clouds.all} %</h2>
											<span class="box__span">Nubosidad</span>
										</a>
									</div>
								</div>

								<div class="box__data">
									<div class="box__info" title="Temperatura Maxima">
										<span class="box__time">${datos.main.temp_max}°</span>
										<img src="Img/icons8-temperature-high-32.png" alt="" class="box__img">
									</div>

									<div class="box__info" title="Temperatura Minima">
										<span class="box__time">${datos.main.temp_min}°</span>
										<img src="Img/icons8-temperature-low-32.png" alt="" class="box__img">
									</div>

									<div class="box__info" title="Presión sobre el nivel del mar">
										<span class="box__time">${datos.main.pressure} hPa</span>
										<img src="Img/icons8-olas-de-mar-32.png" alt="" class="box__img">
									</div>

									<div class="box__info" title="Dirección del vientos">
										<span class="box__time">${datos.wind.deg}°</span>
										<img src="Img/icons8-rosa-de-los-vientos-32.png" alt="" class="box__img">
									</div>

									<div class="box__info" title="Velocidad del viento">
										<span class="box__time">${datos.wind.speed} m/h</span>
										<img src="Img/icons8-viento-32.png" alt="" class="box__img">
									</div>

									<div class="box__info" title="Visibilidad, metros">
										<span class="box__time">${datos.visibility} m</span>
										<img src="Img/icons8-look-32.png" alt="" class="box__img">
									</div>
								</div>
							</div>`;

					container.innerHTML += plantilla;
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return {
		ObtenerClimaSanMiguel: () => ObtenerClima(13.479847375459931, -88.1780161894961),
		ObtenerClimaUsulutan: () => ObtenerClima(13.35, -88.45),
		ObtenerClimaLaUnion: () => ObtenerClima(13.332769711948325, -87.84998461480195),
		ObtenerClimaSanAna: () => ObtenerClima(13.9942, -89.5597),
		ObtenerClimaSanSalvador: () => ObtenerClima(13.6894, -89.1872),
		obtenerImagen: () => tiempo(),
	};
})();

ElSalvador.ObtenerClimaSanMiguel();
ElSalvador.ObtenerClimaUsulutan();
ElSalvador.ObtenerClimaLaUnion();
ElSalvador.ObtenerClimaSanAna();
ElSalvador.ObtenerClimaSanSalvador();
ElSalvador.obtenerImagen();
