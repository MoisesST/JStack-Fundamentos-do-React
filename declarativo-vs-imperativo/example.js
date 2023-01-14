// Contexto -> garrafa de água

// Declarativo -> descreve o que quer.
// Ex: vá encher a guarrafa de água;

// Código JSX declarativo
function Title() {
  return (
    <h1 id="title">
      Hello world!
    </h1>
  );
}

// Imperativo -> descreve como deve ser feito.
// Ex: pegue a garrafa, ande até a pia, abra a tampa da garrafa, abra o regis...

// Código vanilla JS imperativo
const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Hello world!';
document.body.appendChild(h1);