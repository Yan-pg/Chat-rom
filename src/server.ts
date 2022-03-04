import { server } from "./http";
import "./websocket/ChatService";

server.listen(3000, () => console.log("Server is runnig on port 3000 🔥"));
