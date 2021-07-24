const itens = [
    {
        id:0,
        nome:'Calça',
        img:'./img/image.jpeg',
        quantidade: 0
    },
    {   id:1,
        nome:'Camiseta',
        img:'/img/image.jpeg',
        quantidade: 0
    },
    {
        id:2,
        nome:'Sapato',
        img:'/img/image.jpeg',
        quantidade: 0
    },  
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    itens.map((val) => {
        containerProdutos.innerHTML += `
        <div class="produto=single">
            <img src="`+val.img+`"/>
            <p> `+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho!<a/>
        <div/>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = ""
    itens.map((val) => {
        if (val.quantidade > 0) {
        containerCarrinho.innerHTML += `
            <p> `+val.nome+` | Quantidade: `+val.quantidade+` </p>
            <hr>
        `;
        localStorage.setItem(val.nome, val.quantidade)
        }
    })
}

var links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i ++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })

}
