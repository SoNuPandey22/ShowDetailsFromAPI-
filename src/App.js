import Header from './components/Header';
import Footer from './components/Footer'; 

import Details from './screen/details'


function App() {
  return (
     <>
      <Header />
      <main>

          <Details page={1}/>
      </main>
      <Footer />
     </>
  );
}

export default App;
