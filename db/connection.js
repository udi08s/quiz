require("dotenv").config()
const mongoose = require("mongoose")
const {log} = require("mercedlogger")
const {DATABASE_URL} = process.env

mongoose.connect = mongoose.connect(DATABASE_URL)

mongoose.connection
    .on("open", () => log.green("DATABASE STATE", "Connection Open"))
    .on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
    .on("error", (error) => log.red("DATABASE STATE", error))

module.exports = mongoose
