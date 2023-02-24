import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full p-10 w-full">
      <h1 className="text-4xl font-bold text-white"> Contato </h1>
      <div className="flex flex-col gap-5 items-center justify-start w-full">
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <h2 className="text-white">Email</h2>
          <p className="text-white">
            <a href="mailto:lgsfarias.dev@gmail.com">
              lgsfarias.dev@gmail.com <br />
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <h2 className="text-white">Telefone</h2>
          <p className="text-white">
            <a href="tel:+5511988888888">+55 11 98888-8888</a>
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <h2 className="text-white">Redes Sociais</h2>
          <div className="flex flex-row gap-5 items-center justify-start">
            <a
              href="
              https://www.linkedin.com/in/lgsfarias/"
              target="_blank"
            >
              <Image
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
                width={48}
                height={48}
              />
            </a>
            <a
              href="
              https://github.com/lgsfarias"
              target="_blank"
            >
              <Image
                src="https://img.icons8.com/fluent/48/000000/github.png"
                alt="github"
                width={48}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
