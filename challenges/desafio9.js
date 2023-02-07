db.produtos.find(
  { valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lte: 500 } } } },
  { nome: 1, _id: 0 },
);