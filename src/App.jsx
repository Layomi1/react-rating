import "./App.css";
import StarRating from "./StarRating/StarRating";

function App() {
  return (
    <div className="app">
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
