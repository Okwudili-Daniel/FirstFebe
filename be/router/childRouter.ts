import { Router } from "express";
import { createChild, readChild, readChilds } from "../controller/childContoller";

const router: Router = Router();

router.route("/create").post(createChild)
router.route("/read").get(readChilds)
router.route("/sorted").get(readChild)

export default router