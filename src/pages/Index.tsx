
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CateringServices from '../components/CateringServices';
import GrazingTable from '../components/GrazingTable';
import MissionVision from '../components/MissionVision';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main Content - Add top padding to account for fixed navigation */}
      <main className="pt-16">
        <Hero />
        <CateringServices />
        <GrazingTable />
        <MissionVision />
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
