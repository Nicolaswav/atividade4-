const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000; // Você pode alterar a porta se preferir

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.somar(parseInt(a), parseInt(b));
  res.send(`A soma de ${a} e ${b} é ${resultado}`);
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(parseInt(a), parseInt(b));
  res.send(`A subtração de ${a} por ${b} é ${resultado}`);
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.multiplicar(parseInt(a), parseInt(b));
  res.send(`A multiplicação de ${a} por ${b} é ${resultado}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.dividir(parseInt(a), parseInt(b));
  res.send(`A divisão de ${a} por ${b} é ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
