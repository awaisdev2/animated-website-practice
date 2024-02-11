import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectCards from './components/ProjectCards';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className='flex items-center justify-center my-5'>
        <ProjectCards cardTitle='The Aims School' cardSubTitle='I am absolutely thrilled with the website created by Awais for The Aims School. From the initial consultation to the final launch, the experience was seamless and professional. The design perfectly encapsulates the ethos of our institution, blending professionalism with a warm and welcoming atmosphere. The layout is intuitive, making navigation a breeze for our students, parents, and staff alike. One of the standout features of the website is its responsiveness. Whether accessed on a desktop, tablet, or smartphone, the site adapts beautifully, ensuring a consistent and enjoyable user experience across all devices.' />
        <ProjectCards cardTitle='Tani the Expert' cardSubTitle={`I am delighted to share my experience working with Awais, the mastermind behind Expert Switches and Sockets. Awais's expertise and dedication have truly transformed our electrical solutions. From the outset, Awais demonstrated a deep understanding of our needs and provided valuable insights into the latest trends and innovations in the industry. Their professionalism to detail were evident in every aspect of the project. The website Awais created for us is nothing short of exceptional. It effortlessly combines with aesthetics, making it easy for us customers to browse through our extensive range of products.`} />
        <ProjectCards cardTitle='BuyA2z' cardSubTitle={`The design of the BuyA2z website is exceptional. It perfectly captures our brand identity and provides an intuitive user experience. The layout is clean, modern, and visually appealing. Overall, the website functions smoothly and effectively. However, there were a few minor glitches initially, but they were promptly addressed by the development team. The website's performance is top-notch. It loads quickly, even on slower connections, and we haven't experienced any downtime since its launch. They were responsive to our inquiries and always available to address any concerns or requests promptly.`} />
      </div>
    </div>
  );
}

export default App;
