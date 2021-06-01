// import Furniture from "../models/Furniture";
const Furniture = require("../models/Furniture");

const allFurnitures = async (req, res) =>{
  const furnitures = await Furniture.find();
  res.status(200).json({furnitures})
}

const getFurniture = async (req, res) =>{
    const id = req.params.id;
    const furniture = await Furniture.findById(id);
    res.status(200).json({furniture})
}

const createFurniture = async (req, res) => {
   const name = req.body.name;
   const price = req.body.price;
   const quantity = req.body.quantity;
   const description = req.body.description;

  const furniture = await Furniture.create({name, price, quantity, description})

  res.status(201).json({furniture})
};

const updateFurniture = async (req, res) => {
  const id = req.params.id;
  constfurniture = await Furniture.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({Furniture});
};

const deleteFurniture = async (req, res) => {
  const id = req.params.id;
  await Furniture.findByIdAndDelete(id);
  res.status(204);
};

export default {
    allFurnitures,
    getFurniture,
    createFurniture,
    updateFurniture,
    deleteFurniture
};