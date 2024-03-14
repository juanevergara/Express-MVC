let express = require('express');
let autos = require('../db/index')

let controladores = {
    lista: {
        index: function(req, res){
            return res.render('products', {
                lista: autos.lista,
                titulo: "Menu"
            })
        },
        marca: function(req, res){
            let rta=[]
            for (let i = 0; i < autos.lista.length; i++) {
                if(autos.lista[i].marca === req.params.idMarca){
                    rta.push(autos.lista[i])
                }}
            if(rta.length === 0){
                return res.send (`No se encontraron autos de la marca ${req.params.idMarca}` )
            } 
            else{  
                return res.render('products', {
                    lista: rta,
                    titulo: `Buscaste la marca ${req.params.idMarca}`
                    
                })
            }
            },
        color: function(req, res){
            let rta=[]
            for (let i = 0; i < autos.lista.length; i++) {
                if(autos.lista[i].color === req.params.idColor.toLowerCase()){
                    rta.push(autos.lista[i])
                }}
            if(rta.length === 0){
                return res.send (`No se encontraron autos del color ${req.params.idColor}`)
            } 
            else{  
                return res.render('products', {
                    lista: rta,
                    titulo: `buscaste por color: ${req.params.idColor}`
                })
            }

        },
        anio: function(req, res){
            let rta=[]
            for (let i = 0; i < autos.lista.length; i++) {
                if(autos.lista[i].anio == req.params.idAnio){
                    rta.push(autos.lista[i])
                }}
            if(rta.length === 0){
                return res.send (`No se encontraron autos de ${req.params.idAnio}`)
            } 
            else{  
                return res.render('products', {
                    lista: rta,
                    titulo: `se muestran autos de ${req.params.idAnio}`                                
                })
            }
            

        },
    }   

}

module.exports = controladores
