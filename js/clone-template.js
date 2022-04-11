function addLine() {
	let template = document.getElementById('productRow');
	let row = template.content.cloneNode(true); // получаем глубокое клонирование внутри темплейта с помощью true

	let tbody = document.querySelector('table tbody');
	let dataLine = document.querySelector('table tfoot tr');

	let tds = row.querySelectorAll('td');
	let inputs = dataLine.querySelectorAll('input');
	tds[0].textContent = inputs[0].value;
	tds[1].textContent = inputs[1].value;
	tds[2].textContent = inputs[2].value;

	tbody.appendChild(row);
}