import express, {Request, Response} from "express"
import router from "./routes/index.route"

const server = express();
server.use("/api", router)

server.get("/", (req: Request, res: Response) => {
    res.send("OK")
})

export default server