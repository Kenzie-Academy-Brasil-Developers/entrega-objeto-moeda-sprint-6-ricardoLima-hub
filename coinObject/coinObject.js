const coin = {
    state: 0,
  
    flip: function () { //gira a moeda de forma aleatória
      return this.state = Math.floor(Math.random()*(1 - 0 + 1) + 0);
    },
  
    toString: function () { //prepara os resultados em forma de texto
        if (this.state === 0) {
            return "Heads";
        } else {
            return "Tails"
        }
    },
  
    toHTML: function () {//prepara os resultados em forma de imagem
      const image = document.createElement("img");
        if (this.state === 0){
            image.src = "../coinObject/assets/heads.png";
            image.alt = "Heads";
        } else {
            image.src = "../coinObject/assets/tails.png";
            image.alt = "Tails";
        }
      return image;
    },
  };

  function display20Flips() {//display dos resultados em forma de texto
    const results = [];
    const spanResults = document.createElement("span");
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coin.toString();
        results.push(coin.toString());
    }
    spanResults.innerHTML = results.join(", ");
    document.body.appendChild(spanResults);
    return results
  }
  
  function display20Images() {//display dos resultados em forma de imagem
    const results = [];
    const divResults = document.createElement("div");
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coin.toHTML();
        results.push(coin.toString());
        divResults.appendChild(coin.toHTML());
    }
    document.body.appendChild(divResults);
    return results
  }