import { Router } from 'express';

const router = Router();


router.post('/', async (req, res,next) => {
    res.json("post hola")
});


router.get("/", async (req, res,next) => {

    res.json("get hola")
   
});

router.put("/", async (req, res,next) => {

    res.json("put hola")
   
});

export default router;