import express from "express"
import ExampleController from "../controllers/ExampleController";
import {Http2ServerResponse} from "http2";
const router = express.Router();

router.get('/', async (req : express.Request , res : express.Response) =>  {
    let number = await ExampleController.exampleMethod();
    res.json(number);
});

export default router;
module.exports = router;

