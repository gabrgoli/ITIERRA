import {Router} from "express";
import { v4 as uuidv4 } from 'uuid';

//import entrys from "./entrys";

// const router = Router();

// router.use("/entries", entrys)

let entries =
  [{
    _id: uuidv4(),
    nombre:'Gabriel',
    telefono:'1544494024',
    status:'nuevo',
    email: 'Gabriel@yahoo.com',
  },
  {
    _id: uuidv4(),
    nombre:'Bernardo',
    telefono:'42154587',
    status:'nuevo',
    email: 'bernardo@yahoo.com',
  }]

const router = Router();

router.get("/entrys", async (req, res,next) => {
    try {
        res.status(200).json(entries) 
    } catch (error) {
        res.send(error)
    }
   
});

router.post('/entrys', async (req, res,next) => {
    try {
        const input = req.body;
        entries.push(input);
        res.status(201).json(entries)
    } catch (error) {
        res.send(error)
    }

});


router.put("/entrys", async (req, res,next) => {
    try {
        const entry = req.body;
    
        entries=entries.map((e) => {
            if(e._id === entry._id){
                e.status = entry.status;
                return e;
            }
            return e;
        });
    
        res.status(200).json(entries)
        
    } catch (error) {
        res.send(error)
    }
   
});

export default router