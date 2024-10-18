
import Head from 'next/head';
import Header from '../component/Header';
import Footer from '../component/Footer';

const About = () => (
  <>
    <Head>
      <title>About Generative AI</title>
      <meta name="description" content="What is Generative AI and its applications" />
    </Head>
    <Header />
    <main>
      <div className="about-container">
        <section>
          <h2>What is Generative AI?</h2>
          <p>Generative AI is a branch of artificial intelligence that focuses on creating content such as text, images, and more...</p>
        </section>
        <section>
          <h3>Applications</h3>
          <ul>
            <li>Image Generation (DALL·E)</li>
            <li>Text Generation (GPT models)</li>
            <li>And more...</li>
          </ul>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default About;




