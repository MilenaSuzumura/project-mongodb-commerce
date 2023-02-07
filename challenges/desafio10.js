db.produtos.find(
  { valoresNutricionais: { $elemMatch: {
    tipo: "proteínas", percentual: { $lte: 41, $gte: 29 },
  } } },
   { nome: 1, _id: 0 },
 );