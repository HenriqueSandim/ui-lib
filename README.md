## Como testar localmente

Primeiro é necessário baixar o yalc, basicamente ele é uma forma de simular o comando "npm publish" localmente.
```
npm i yalc -g
```

Com isso você pode usar os scripts locais que os mesmos já vão fazer o resto automáticamente, mas para informação temos o:
```
yalc publish
```
Que serve para colocar a lib no global do yalc e você então pode usar em qualquer outro projeto.

Após esses itens você pode apenas ir no projeto que deseja usar a lib e rodar:
```
yalc add {nome-da-lib}
```
Que no nosso caso é **`ui-jsmx`**

## Para atualizar a lib

A primeira vez que for gerar a pasta "**dist**" é preciso rodar o comando:
```
yarn build
```

Ele vai gerar o **dist** e fazer o publish.

Caso já tenha um **dist** na pasta então é recomendado usar o 
```
yarn delbuild
```
Que faz a mesma coisa que o acima, porém antes de tudo ele vai pedir para deletar a pasta **dist** antes de gerar uma nova, assim garantindo que tudo está atualizado.