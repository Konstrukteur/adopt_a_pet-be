import { Router } from "express";
import {
  getAnimalType,
  getAnimalTypes,
  getAnimal,
} from "../controllers/animals.mjs";

const router = Router();

router.route("/animals").get(getAnimalTypes);

router.route("/animals/:pet_type").get(getAnimalType);

router.route("/animals/:pet_type/:pet_id").get(getAnimal);

export default router;
