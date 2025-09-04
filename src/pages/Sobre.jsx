import { Users } from 'lucide-react';
import ImageBanner from '../components/ImageBanner';

const images = [
  {
    src: "/2a47d988-f61d-4300-9905-c2cfed9cb331 (1).jpg",
    alt: "Equipe Percusor 1"
  },
  {
    src: "/7086e369-14ee-485a-b11e-412098e9a892.jpg",
    alt: "Equipe Percusor 2"
  },
  {
    src: "/20240523_152327.jpeg",
    alt: "Equipe Percusor 3"
  },
  {
    src: "/Imagem do WhatsApp de 2024-10-03 à(s) 15.39.10_5e7e1fd9.jpeg",
    alt: "Equipe Percusor 4"
  }
];

const Sobre = () => (
  <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-white">
    <br />
    <br />
    <br />
    <Users className="w-16 h-16 mb-6 text-indigo-600" />
    <p className="text-lg text-gray-700 max-w-2xl text-center">
      A Percusor é especialista em climatização, atuando com soluções técnicas para residências, comércios e indústrias. Nosso foco é proporcionar conforto térmico e qualidade de vida, sempre com atendimento profissional e personalizado.
    </p>
    <br />
    <br />
    <br />
    <div className="w-full flex justify-center">
      <div
        className="rounded-xl overflow-hidden shadow-lg"
        style={{
          width: "360px",
          height: "360px",
          maxWidth: "90vw",
          maxHeight: "90vw",
          aspectRatio: "1/1",
          background: "#f3f4f6"
        }}
      >
        <ImageBanner
          images={images}
          autoPlay={true}
          interval={4000}
          imgClassName="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export default Sobre;
