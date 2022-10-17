function fillTemplate() {
  const data = {
    name: "Test",
    surname: "TestTest",
  };
}

const template = Handlebars.compile(document.querySelector("#root").innerHTML);
const filled = template(data);
document.querySelector("#output").innerHTML = filled;
