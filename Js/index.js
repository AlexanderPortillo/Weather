const container = document.querySelector('.container__boxes');

const ElSalvador = (() => {
	'use strict';

	const APIKey = 'fa9245836bb20ea2ba0598a2b37872af';
	const idioma = 'es';
	const unidades = 'imperial';

	const ObtenerClima = (lat, lon) => {
		const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${idioma}&appid=${APIKey}&units=${unidades}`;

		fetch(endpoint)
			.then((resultado) => {
				const promesa = resultado.json();

				promesa.then((datos) => {
					let img = '';
					const horaActual = new Date();
					const horaEspecifica = new Date();
					horaEspecifica.setHours(6); // Establece la hora a las 6:00 AM
					horaEspecifica.setMinutes(0); // Establece los minutos a 0
					horaEspecifica.setSeconds(0); // Establece los segundos a 0

					// Compara si la hora actual está dentro del intervalo de 6:00 AM a 5:59 PM
					if (horaActual >= horaEspecifica && horaActual.getHours() < 18) {
						img =
							'https://www.xtrafondos.com/wallpapers/silueta-de-hombre-en-las-nubes-10731.jpg';
					} else {
						img = 'https://www.xtrafondos.com/wallpapers/atardecer-estilo-retrowave-7819.jpg';
					}

					const plantilla = `
				<div class="box">
					<div class="box__time--img">
							<img src="${img}" alt="" class="box__img" />
					</div>

					<div class="box__content">
						<span class="box__temp">${datos.main.temp} °C</span>
						<div class="box__wheather">
							<span class="box__name">${datos.sys.country}, ${datos.name}, ${datos.weather[0].description}</span>
							<img src="https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png" alt="">
						</div>
					</div>

					<div class="box__data">
						<div class="box__data--wind">
							<span class="box__info">${datos.wind.speed} m/h</span>
							<img src="Img/icons8-viento-32.png" alt="">
							<span class="box__title">Velocidad del viento</span>
						</div>

						<div class="box__data--wind">
							<span class="box__info">${datos.main.humidity} %</span>
							<img src="Img/icons8-humedad-32.png" alt="">
							<span class="box__title">Humedad</span>
						</div>

						<div class="box__data--wind">
							<span class="box__info">${datos.clouds.all} %</span>
							<img src="Img/icons8-nubes-32.png" alt="">
							<span class="box__title">Nubosidad</span>
						</div>
					</div>

					<div class="box__data">
						<div class="box__data--main">
							<span class="box__info--main">${datos.main.temp_max} °C</span>
							<img src="Img/icons8-temperature-high-32.png" alt="">
							<span class="box__title--main">Temperatura maxima</span>
						</div>

						<div class="box__data--main">
							<span class="box__info--main">${datos.main.temp_min} °C</span>
							<img src="Img/icons8-temperature-low-32.png" alt="">
							<span class="box__title--main">Temperatura minima</span>
						</div>

						<div class="box__data--main">
							<span class="box__info--main">${datos.main.pressure} hPa</span>
							<img src="Img/icons8-olas-de-mar-32.png" alt="">
							<span class="box__title--main">Presión sobre el nivel del mar</span>
						</div>

						<div class="box__data--main">
							<span class="box__info--main">${datos.wind.deg}°</span>
							<img src="Img/icons8-rosa-de-los-vientos-32.png" alt="">
							<span class="box__title--main">Dirección del viento</span>
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
	};
})();

ElSalvador.ObtenerClimaSanMiguel();
ElSalvador.ObtenerClimaUsulutan();
ElSalvador.ObtenerClimaLaUnion();
ElSalvador.ObtenerClimaSanAna();
ElSalvador.ObtenerClimaSanSalvador();
