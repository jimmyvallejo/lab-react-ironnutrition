import { Card, Row, Col, Divider, Input, Button } from "antd";
import "./App.css";
import foodsData from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsData);

  const [query, setQuery] = useState("");

  const filteredFoods = foods.filter((food) => {
    if (query === "") {
      return true;
    } else {
      return food.name.toLowerCase().includes(query.toLowerCase());
    }
  });

  return (
    <div>
      <div className="App">
        <AddFoodForm foods={foods} setFoods={setFoods} />
        <Divider>Food List</Divider>
        <Input
          placeholder="Search food"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Row style={{ width: "100%", justifyContent: "center" }}>
          {filteredFoods.map((food) => (
            <FoodBox
              key={food.name}
              name={food.name}
              image={food.image}
              calories={food.calories}
              servings={food.servings}
              setFoods={setFoods}
              foods={foods}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;