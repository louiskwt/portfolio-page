import Meta from "../components/Meta";

const META = {
  title: "Louis Tsang - Software Engineer",
  desc: "A Professional Software Engineer based in Hong Kong specialised in developing web applications and web services. Always strive to deliver code that can bring joy to end users and make a impact.",
  canonical: "https://www.louistsang.me/",
};

export default function Home() {
  return (
    <>
      <Meta title={META.title} desc={META.desc} canonical={META.canonical} />
      <main id="container">
        <nav>
          <ul>
            <li>
              <a class="" href="/posts/">
                <i class="fa-li fa  fa-lg"></i>
                <span>Posts</span>
              </a>
            </li>

            <li>
              <a class="" href="/about/">
                <i class="fa-li fa  fa-lg"></i>
                <span>About Hugo</span>
              </a>
            </li>
          </ul>
        </nav>
        <h1>Hello</h1>
      </main>
    </>
  );
}
