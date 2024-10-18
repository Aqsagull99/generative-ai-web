import Head from 'next/head';
 import Header from '../component/Header';
 import Footer from '../component/Footer';
 import ContactForm from '../component/ContactForm';

const Contact = () => (
  <>
    <Head>
      <title>Contact Us</title>
      <meta name="description" content="Get in touch with us about Generative AI" />
    </Head>
     <Header /> 
    <main>
      <h2 className='contact-us'>Contact Us</h2>
       <ContactForm /> 
    </main>
     <Footer /> 
  </>
);

export default Contact;



