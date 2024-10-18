"use client";
import Image from "next/image";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <div className="home-container">
        {/* Text Content */}
        <motion.div className="home-text"
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.2, duration: 1.2 }}>
          <h1>Welcome to Our Website</h1>
          <p>Your success starts here.</p>
      
        </motion.div>

        {/* Vector Image */}
        <motion.div
          className="home-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          <Image
            src="/vector.png"
            alt="Vector Graphic"
            width={400}
            height={500}
            className="vector-image"
          />
        </motion.div>
      </div>

<div className="cards-container">
{/* Cards Section */}
<div className="cards-section">
  {[
    "Generative AI",
    "AI Applications",
    "Get Started with AI",
    "AI for Business",
    "AI in Healthcare",
    "AI and Future Trends"
  ].map((title, index) => (
    <div key={index} className="card">
      <h2>{title}</h2>
       <p>Learn more about {title.toLowerCase()}.</p> 
    </div>
  ))}
</div>
</div>

      {/* Footer */}
      <Footer />
    </>
  );
}




