let data = {
	"fish": {
		"salmon": {},
		"tuna": {},
	},
	"trees": {
		"huge": {
			"oak": {},
			"maple": {},
		},
	},
	"animals": {
		"dog": {},
		"cat": {},
	},
	"fruit": {}
}

function createTreeMenu(objectNode, nodeKey) {

	if (nodeKey === undefined) {
		const listContainerElement = document.createElement('div');
		listContainerElement.id = 'list-container';

		for (let key in objectNode) {

			listContainerElement.appendChild(createTreeMenu(objectNode[key], key));
		}
		return listContainerElement;
	}

	if (Object.keys(objectNode).length === 0) {
		const liElement = document.createElement('li');
		liElement.innerHTML = nodeKey;

		return liElement;
	} else {
		const liElement = document.createElement('li');
		const lisSpanElement = document.createElement('span');
		lisSpanElement.innerHTML = nodeKey;
		liElement.appendChild(lisSpanElement);

		const ulElement = document.createElement('ul');

		for (let key in objectNode) {
			ulElement.appendChild(createTreeMenu(objectNode[key], key));
		}
		liElement.appendChild(ulElement);

		return liElement;
	}
}

document.body.appendChild(createTreeMenu(data));