import Meta from "../components/Meta";

const META = {
  title: "Louis Tsang - Software Engineer",
  desc: "A software engineer from Hong Kong",
  canonical: "https://www.louistsang.me/",
};

export default function Home() {
  return (
    <>
      <Meta title={META.title} desc={META.desc} canonical={META.canonical} />
      <main>
        <h1>Hey, this's Louis</h1>
        <p>Before I became a developer, I used to teach English full time in Hong Kong for 3 years.</p>
        <p>After working at Retykle for 2+ years, I decided to take a study break as I began to experience a lack of growth and feel complacent.</p>
        <p>Meanwhile, given the advance in AI and the rise of LLM, the whole world is undergoing a rapid change and yet no one knows where this trend will lead us.</p>
        <p>Because of that I'm now committed to dive deeper into CS and ML/AI so that I can move forward.</p>
        {/* link */}
        <p id="links">
          👋 Follow me on 𝕏: <a href="https://x.com/kawingt2">@EurekaLabsAI</a>
          <br />
          💻 And/or GitHub: <a href="https://github.com/louiskwt">EurekaLabsAI</a>
          <br />
        </p>
      </main>
    </>
  );
}
