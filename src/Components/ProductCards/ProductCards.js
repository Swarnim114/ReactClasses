import './ProductCard.css'; // Use the correct file name
import { useRef  , useState} from 'react';


function ProductCards({ title, price }) {
  const pRef = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  let [inputV, setInputV] = useState('class');

  function togglePrice() {
    if (pRef.current.style.display === 'none') {
      pRef.current.style.display = 'block';
    } else {
      pRef.current.style.display = 'none';
    }
  }
  function printInput() {
    // outputRef.current.innerText = `Output Here: ${inputRef.current.value}`;    
    setInputV(inputRef.current.value);
  }
  
  return (
    <div className="product-card">
      <h3 onClick={togglePrice}>Product Name:--{title}</h3>
      <h3 ref={pRef}>Product Price:--{price}</h3>
      <input type="text" value={inputV} onChange={printInput} ref={inputRef}></input>
      <p ref={outputRef}>Output Here: {inputV}</p>
      
    </div>
  );
}

export default ProductCards;
//desturctruing 