import React from "react";

const equipamentos = [
  {
    nome: "Split",
    descricao:
      "O ar-condicionado Split é composto por duas unidades (interna e externa), sendo ideal para ambientes residenciais e pequenos escritórios devido à sua instalação simples, baixo ruído e eficiência energética.",
  },
  {
    nome: "Piso Teto",
    descricao:
      "O modelo Piso Teto é versátil e indicado para ambientes amplos, como salões e lojas, pois pode ser instalado tanto no piso quanto no teto, proporcionando grande vazão de ar e climatização uniforme.",
  },
  {
    nome: "Cassete",
    descricao:
      "O Cassete é instalado no teto, embutido no forro, e distribui o ar de forma uniforme em todas as direções. É muito utilizado em ambientes comerciais e escritórios de médio a grande porte.",
  },
  {
    nome: "VRF",
    descricao:
      "O sistema VRF (Fluxo de Refrigerante Variável) é indicado para grandes edifícios e projetos corporativos, permitindo o controle individual de temperatura em múltiplos ambientes com alta eficiência e flexibilidade.",
  },
  {
    nome: "Chiller",
    descricao:
      "O Chiller é utilizado em sistemas de climatização de grande porte, como hospitais, shoppings e indústrias, resfriando a água que circula em fancoils ou unidades de tratamento de ar, garantindo climatização eficiente em larga escala.",
  },
];

export default function Servicos() {
  return (
    <div className="container mx-auto py-12 px-4">
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-8 text-center">Tipos de Equipamentos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {equipamentos.map((equip, idx) => (
          <div
            key={equip.nome}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold text-blue-700">{equip.nome}</h2>
            <p className="text-gray-700">{equip.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
