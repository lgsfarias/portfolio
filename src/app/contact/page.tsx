import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full p-10 w-full">
      <h1 className="text-4xl font-bold text-white"> Let&apos;s Talk </h1>
      <div className="inline-block justify-center">
        <a
          href="mailto:lgsfarias.dev@gmail.com"
          className="flex flex-row gap-5 items-center justify-start mb-3"
        >
          <Mail size={24} color="white" />

          <p className="text-white text-lg">lgsfarias.dev@gmail.com</p>
        </a>
        <a
          href="
              https://www.linkedin.com/in/lgsfarias/"
          target="_blank"
          className="flex flex-row gap-5 items-center justify-start mb-3"
        >
          <Linkedin size={24} color="white" />
          <p className="text-white text-lg">linkedin.com/in/lgsfarias</p>
        </a>
        <a
          href="
              https://github.com/lgsfarias"
          target="_blank"
          className="flex flex-row gap-5 items-center justify-start mb-3"
        >
          <Github size={24} color="white" />
          <p className="text-white text-lg">github.com/lgsfarias</p>
        </a>
        <a
          href="
              https://instagram.com/lgsfarias_"
          target="_blank"
          className="flex flex-row gap-5 items-center justify-start mb-3"
        >
          <Instagram size={24} color="white" />
          <p className="text-white text-lg">instagram.com/lgsfarias_</p>
        </a>
      </div>
    </div>
  );
}
