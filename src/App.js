import './App.css';
import Hero from '../src/components/Hero'
import BackToTop from './components/BackToTop';
import Platform from './components/Platform';
import RevenueForcasting from './components/RevenueForcasting';
import FrequentlyAskQuestions from './components/FrequentlyAskQuestions';

function App() {
  return (
    <div>
      <Hero />
      <BackToTop />
      <Platform />
      <RevenueForcasting />
      <FrequentlyAskQuestions/>
    </div>
  );
}

export default App;
