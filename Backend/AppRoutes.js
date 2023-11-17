import express from "express";
const nameroute = express.Router();

nameroute.get("/", async (req, res) => {
  let Tab = [
    "jhony",
    "Helenn",
    "Triple H",
    "Mazouni",
    "Elon musk",
    "Bassem",
    "Peaky Blinders",
    "NoName",
    "Aicha",
    "Hanane",
  ];
  let a = Math.floor(Math.random() * 10);
  console.log(a);
  return res.json({ object: Tab[a], message: "succes" });
});

export default nameroute;
