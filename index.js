const express =  require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());



app.get("/usuario" ,function(req,res){
    res.json({
        Primernombre:"edwin",
        Segundonombre:"ernesto",
        Rrimerapellido:"flamemco",
        Segundoapellido:"flores",
        Fechadenacimiento:"14/6/2000",
        Estadofamiliar:"soltero",
        Residencia:"la libertad",
        Profesion:"camionero mecanico",
        Estatura: 1.78,
        Peso: 80 ,
        Colorpiel:"moreno",
        Colorojos:"cafe o negro",
        Colorcabello:"negro",
        Ultimosempleos:[{
            Empresa: "",
            Departamento : "sala de venta",
            Dirrecion:"la libertad",
            Cargo:"ventas - caja",
            Desde:"2011-01-01",
            Hasta:"2011-12-31"
         },{
                Empresa: "transflores",
                Departamento : "camionero",
               
                Dirrecion:"la libertad",
                Cargo:"camionero",
                Desde:"2011-01-01",
                Hasta:"2011-12-31"
            }]

        


    });
});

app.get('/genero',function(req,res){
    res.jsonp([
     {id:1, genero:'maculino'},
     {id:1, genero:'femenino'},

    ]);
});

app.get('/tipo_documento',function(req,res){
    res.jsonp([
        {id:1, tipo_documento:'DUI'},
        {id:2, tipo_documento:'NIT'},
        {id:3, tipo_documento:'ISS'},
        {id:4, tipo_documento:'PASSAPORTE'},
    ]);
});

app.get('/departamento',function(req,res){
    res.jsonp([
    
        {id:1, tipo_departamento:'Ahuachapan'},
        {id:2, tipo_departamento:'Santa ana'},
        {id:3, tipo_departamento:'Sonsonate'},
        {id:4, tipo_departamento:'La Libertad'},
        {id:5, tipo_departamento:'San Salvador'},
        {id:6, tipo_departamento:'Cuscatlan'},
        {id:7, tipo_departamento:'Caba;as'},
        {id:8, tipo_departamento:'La Paz'},
        {id:9, tipo_departamento:'San Vicente'},
        {id:10, tipo_departamento:'Usulutan'},
        {id:11, tipo_departamento:'San Miguel'},
        {id:12, tipo_departamento:'Morazan'},
        {id:13, tipo_departamento:'La Union'},
        {id:14, tipo_departamento:'Chalantengo'},

    ]);
});




        app.get('/municipio',function(req,res){
            res.json([
                {id:1,departamento:"Ahuachapan"},
                {id:2,departamento:"Metapan"},
                {id:3,departamento:"Izalco"},
                {id:4,departamento:"Dulce Nombre"},
                {id:5,departamento:"Comasagua"},
                {id:6,departamento:"San Salvador"},
                {id:7,departamento:"Cojutepeque"},
                {id:8,departamento:"apastepeque"},
                {id:9,departamento:"Olocuilta"},
                {id:10,departamento:"Victoria"},
                {id:11,departamento:"Jucuapa"},
                {id:12,departamento:"Perkin"},
                {id:13,departamento:"Barrios"},
                {id:14,departamento:"Poloros"},
        
       

    ]);
});

//GET HTTP://www.algo.com/sumar?campo1=3.56&campo2=9.13
app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1)+parseFloat(req.query.campo2);
    res.json({
        respuesta:resultado
    });
});

app.get('/login',function(req,res){
    console.log(req.query.email);
    console.log(req.query.password);

});

app.listen(puerto,function(req,res){
    console.log("EL SERVIDOR ESTA COORIENDO EN EL PUERTO NO.3000");
});