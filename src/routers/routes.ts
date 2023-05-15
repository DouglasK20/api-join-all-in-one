import 'express-async-errors'
import { Router } from "express";
import { buscarEmpregos } from "../controllers/buscarEmpregos";
import { buscarPessoas } from "../controllers/buscarPessoas";

const router = Router();

router.get("/buscaremprego", buscarEmpregos)
router.get("/buscarfamilia", buscarPessoas)

export default router;