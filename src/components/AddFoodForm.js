import { Divider, Input } from 'antd';
import { useState } from 'react';
// Iteration 4
function AddFoodForm({foods, setFoods}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(1)
    const [servings, setServings] = useState(1)
    const [errorMessage, setErrorMessage] = useState(false)
    const clearForm = () => {
        setName("")
        setImage("")
        setCalories(1)
        setServings(1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = {name, image, calories, servings};
        if(!newFood.name || !newFood.image){
            setErrorMessage(!errorMessage)
            clearForm()
            return
        }
        let newFoods = [newFood, ...foods]
        setFoods(newFoods)
        clearForm()
    }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />
      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />
      <label>Servings</label>
      <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />
      <button type="submit">Create</button>
      {errorMessage && <p>All imputs are necessary</p>}
    </form>
  );
}
export default AddFoodForm;