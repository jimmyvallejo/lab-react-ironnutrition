import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ name, image, calories, servings, setFoods, foods}) {

    console.log('Current foods array:', foods);
  
    const handleDelete = (name) => {
        console.log('Deleting food:', name);
        const newFoods = foods.filter((food) => food.name !== name);
        console.log('New foods array:', newFoods);
        setFoods(newFoods);
      }
  
    return (
    <Col className='foodbox'>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories:{ calories * servings} </b> kcal
        </p>
        <button onClick={() => handleDelete(name)}>Delete</button>
      </Card>
    </Col>
  );
}

export default FoodBox;