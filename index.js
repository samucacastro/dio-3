class hero {
  constructor(nome, idade, tipo) {
    this.name = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar(){
    let ataque;
    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'shuriken';
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
  
}

new hero('samuca', 2, 'mago').atacar();
