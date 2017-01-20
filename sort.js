const sort = document.getElementById('sort');
const reverse = document.getElementById('reverse');
const filmList = document.querySelector('.film-list');
const films = filmList.querySelectorAll('.film-list__item');

let filmTitles = [];
films.forEach(film => filmTitles.push(film.innerHTML));

function sorting(e) {
	if (e.target.id === 'sort') {
		filmTitles.sort((a, b) => a.localeCompare(b));
	} else {
		filmTitles.sort((a, b) => b.localeCompare(a));
	}
	if (films.length !== filmTitles.length) {
		return;
	}
	
	for (let i = 0; i < films.length; i++) {
		films[i].innerHTML = filmTitles[i];
	}
}

sort.addEventListener('click', sorting);
reverse.addEventListener('click', sorting);



//const reverseSortedFilms = filmTitles.sort((a, b) => a.localeCompare(b));
