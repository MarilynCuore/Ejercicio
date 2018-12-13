const express = require("express")
let mongoose = require("mongoose")
const app = express()
mongoose.connect("mongodb://localhost/primera")
//Objeto JSON => JavaScript Object Notation
let productSchema = {
    title: String,
    description: String,
    imageUrl: String,
    pricing: Number
}
let product = mongoose.model("product", productSchema)
app.set("view engine", "pug")
app.use(express.static("public"))

app.get("/",(req,res)=>{

    /*var data = {
        title: "Mi primer súper producto",
        description: "Una mega compra",
        imageUrl: "data.png",
        pricing: 10
    }
    let product = new product(data)
    product.save(function(err){
        console.log(product)
    })*/ 
    res.render("index") 
})
app.post("/menu/new", (req,res)=>{
    console.log(solicitud)
    respuesta.render("menu/new")
})
app.get("/menu/new", (req,res)=>{
    res.render("menu/new")
})
app.get("/contacto",(req,res)=>{
    res.render("contacto")
})   

app.get("/acerca",(req,res)=>{
    res.render("acerca")
})

app.get("*",(req,res)=>{
    res.render("404")
})


app.listen(8080, () => console.log("El servidar esta corriendo en el puerto 8080"))  