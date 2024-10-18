import Head from 'next/head';
import Header from '../component/Header';
import Footer from '../component/Footer';
 import Card from '../component/Card';

const UseCases = () => (
  <>
    <Head>
      <title>Generative AI Use Cases</title>
      <meta name="description" content="Explore real-world applications of Generative AI" />
    </Head>
    <Header /> 
    <main>
      <section>
        <h2>Generative AI Use Cases</h2>
        <div className="card-grid">
          <Card title="Content Creation" description="Automatically generate articles, blogs, and social media posts." image="/content_creation.jpg" />
          <Card title="Image Generation" description="Create unique images or art based on textual descriptions." image="/image_generation.jpg" />
          <Card title="Music Composition" description="Compose original music tracks using AI algorithms." image="/music_composition.jpg" />
          <Card title="Video Generation" description="Generate videos and animations from text prompts or scripts." image="/video_generation.jpg" />
          <Card title="Chatbots and Virtual Assistants" description="Build conversational agents that can interact naturally with users." image="/chatbots.jpg" />
          <Card title="Code Generation" description="Automate the creation of code snippets or entire applications from specifications." image="/code_generation.jpg" />
          <Card title="Game Design" description="Create dynamic game content, including levels and character designs." image="/game_design.jpg" />
          <Card title="Personalization" description="Tailor recommendations for users based on their preferences and behavior." image="/personalization.jpg" />
        </div>
      </section>
    </main>
    <Footer /> 
  </>
);

export default UseCases;









