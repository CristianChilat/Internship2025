const element = document.querySelector("div");

class Elem {
	constructor(element) {
		this.element = element;
	}

	html(text) {
		this.element.innerHTML = text;
		return this;
	}

	append(text) {
		this.element.insertAdjacentText("beforeend", text);
		return this;
	}

	prepend(text) {
		this.element.insertAdjacentText("afterbegin", text);
		return this;
	}

	attr(name, value) {
		this.element.setAttribute(name, value);
		return this;
	}
}

const elem = new Elem(element);

elem.html("Hello").append("!").prepend("!");

elem.attr("class", "www").attr("title", "Hello");