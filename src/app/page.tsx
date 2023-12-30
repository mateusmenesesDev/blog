import LastPostCard from "~/components/LastPostCard";
import googleAnalyticImage from "public/dumb/googleAnalytics.webp";

export default function HomePage() {
  return (
    <main className="mx-auto px-8 lg:max-w-[90rem]">
      <LastPostCard
        category="Fullstack"
        date="05/06/2023"
        title="Pare de utilizar Google Analytics!"
        description="Este artigo explora os problemas do Google Analytics em relação à privacidade e à perda de dados causada por bloqueadores de anúncios. Apresentamos duas alternativas promissoras, o Umami e o Plausible Analytics, que oferecem soluções inovadoras."
        imageAlt="Google Analytics Post"
        image={googleAnalyticImage}
      />
    </main>
  );
}
