import {el, setChildren} from "redom";

const createCard = () => {
	const inputHolder = el("input", {className: "input input__holder", type: "text"});
	const inputNumber = el("input", {className: "input input__number", id: "cardNumber"});
	const inputDate = el("input", {className: "input input__date", type: "text"});
	const inputCvv = el("input", {className: "input input__cvv", type: "text"});

	const cardNumber = el("span", {className: "card__number"}, "xxxx xxxx xxxx xxxx");
	const cardName = el("span", {className: "card__name"}, "John Doe");
	const cardDate = el("span", {className: "card__date"}, "04/24");

	const creditCard = el("div", {className: "credit-card"}, [cardNumber, el("div", {className: "card__personal"}, [cardName, cardDate])]);

	const inputWrapHolder = el("div", {className: "form__input-wrap form__input-wrap_holder"}, [el("label", {className: "form__label form__holder-label", htmlFor: ""}, "Card Holder"), inputHolder]);

	const inputWrapNumber = el("div", {className: "form__input-wrap form__input-wrap_number"}, [el("label", {className: "form__label form__number-label", htmlFor: ""}, "Card Number"), inputNumber]);

	const inputWrapDate = el("div", {className: "form__input-wrap form__input-wrap_date"}, [el("label", {className: "form__label form__date-label", htmlFor: ""}, "Card Expiry"), inputDate]);

	const inputWrapCvv = el("div", {className: "form__input-wrap form__input-wrap_cvv"}, [el("label", {className: "form__label form__cvv-label", htmlFor: ""}, "CVV"), inputCvv]);

	const form = el("form", {className: "form", action: "#", id: "form"}, [inputWrapHolder, inputWrapNumber, inputWrapDate, inputWrapCvv, el("button", {className: "form__button"}, "CHECK OUT")]);

	const card = el("div", {className: "card"}, [el("p", {className: "secure"}, "Secure Checkout"), creditCard, form]);

	//events
	inputHolder.addEventListener("input", () => {
		cardName.textContent = inputHolder.value;
	});

	inputDate.addEventListener("input", () => {
		cardDate.textContent = inputDate.value;
	});

	inputNumber.addEventListener("input", () => {
		cardNumber.textContent = maskify(inputNumber.value);
	});

	return el("div", {className: "wrapper"}, [card]);
};

setChildren(document.body, createCard());

//function mask for number card
function maskify(input) {
	return input.replace(/.(?=.{0})/g, "X");
}
