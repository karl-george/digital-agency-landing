import {
  Brands,
  Features,
  Footer,
  Future,
  Header,
  Help,
  MediaSection,
  Navbar,
  Subscribe,
  Testimonial,
} from './components/';
import './App.css';

function App() {
  return (
    <div className='da'>
      <Navbar />
      <Header />
      <Brands />
      <Features />
      <Help />
      <MediaSection />
      <Future />
      {/* <Testimonial />
      <Subscribe />
      <Footer /> */}
    </div>
  );
}

export default App;
