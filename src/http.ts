import "reflect-metadata";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.connect("mongodb://localhost/socket");

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket", socket.id);
});

export { server, io };
