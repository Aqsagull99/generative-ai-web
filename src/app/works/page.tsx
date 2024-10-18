// import Head from 'next/head';
//  import Header from '../component/Header';
//  import Footer from '../component/Footer';

// const HowItWorks = () => (
//   <>
//     <Head>
//       <title>How Generative AI Works</title>
//       <meta name="description" content="Learn how Generative AI models work" />
//     </Head>
//      <Header /> 
//     <main>
//       <section>
//         <h2>Understanding the Technology</h2>
//         <p>Generative AI uses neural networks to learn patterns and generate new content...</p>
      
//       </section>
//       <section>
//         <h3>Step 1: Training on Data</h3>
//         <p>Models like GPT are trained on large datasets...</p>
//       </section>
//     </main>
//      <Footer /> 
//   </>
// );

// export default HowItWorks;




import Head from 'next/head';
import Header from '../component/Header';
import Footer from '../component/Footer';

const HowItWorks = () => (
  <>
    <Head>
      <title>How Generative AI Works</title>
      <meta name="description" content="Learn how Generative AI models work" />
    </Head>
    <Header  />
    <main className="main-container">
      <section>
        <h2 className="section-title">Understanding the Technology</h2>
        <p className="paragraph">Generative AI uses neural networks to learn patterns and generate new content...</p>
      </section>
      <section>
        <h3 className="sub-title">Step 1: Training on Data</h3>
        <p className="paragraph">Models like GPT are trained on large datasets...</p>
      </section>

      <section>
    <h3 className="sub-title">Step 2: Model Fine-Tuning</h3>
    <p className="paragraph">After initial training, models undergo fine-tuning to improve performance on specific tasks...</p>
  </section>

  <section>
    <h3 className="sub-title">Step 3: Generating Outputs</h3>
    <p className="paragraph">Once trained, models can generate outputs by predicting the next words in a sequence...</p>
  </section>

  <section>
    <h3 className="sub-title">Step 4: Evaluation and Feedback</h3>
    <p className="paragraph">Generated content is evaluated based on various metrics, and feedback is used to improve future versions...</p>
  </section>

    </main>
    <Footer />
  </>
);

export default HowItWorks;

