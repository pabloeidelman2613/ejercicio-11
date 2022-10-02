import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import imagesData from './data/images.json';

function App() {
  return (
    <div className="App">
      {imagesData.filter(image => image.showImage === true).map(img => <Image src={img.source}/>)}
    </div>
  );
}

export default App;
