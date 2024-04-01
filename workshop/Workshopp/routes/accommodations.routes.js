import { Router } from "express";
import { Accommodation } from "../AccommodationEntity";

const AccommondationsRouter = Router();
const acc=new Accommodation();



let accommodations = [];


AccommondationsRouter.post('/accommodations', (req, res) => {
  const newAccommodation = req.body;
  accommodations.push(newAccommodation);
  res.status(201).json(newAccommodation);
});


AccommondationsRouter.get('/accommodations', (req, res) => {
  res.json(accommodations);
});


AccommondationsRouter.get('/accommodations/:id', (req, res) => {
  const id = req.params.id;
  const accommodation = accommodations.find(acc => acc.id === id);
  if (!accommodation) {
    return res.status(404).json({ error: 'Accommodation not found' });
  }
  res.json(accommodation);
});


AccommondationsRouter.delete('/accommodations/:id', (req, res) => {
  const id = req.params.id;
  accommodations = accommodations.filter(acc => acc.id !== id);
  res.sendStatus(204);
});


AccommondationsRouter.put('/accommodations/:id', (req, res) => {
  const id = req.params.id;
  const updatedAccommodation = req.body;
  accommodations = accommodations.map(acc => {
    if (acc.id === id) {
      return { ...acc, ...updatedAccommodation };
    }
    return acc;
  });
  res.json(updatedAccommodation);
});



AccommondationsRouter.listen(3000, () => {
  console.log(`Server is running `);
});
export default AccommondationsRouter;
