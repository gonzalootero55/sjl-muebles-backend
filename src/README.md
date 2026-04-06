## SJL Muebles

Aplicación web de catálogo de muebles desarrollada como trabajo práctico de la diplomatura en desarrollo web.

## Tecnologías utilizadas

### Frontend
React
CSS

### Backend
Node.js
Express

### Base de datos
MongoDB Atlas

### Otros
Cloudinary (para imágenes)

### Funcionalidades
Ver catálogo de productos
Crear productos
Editar productos
Eliminar productos
Asociar productos a categorías
Visualizar categorías en el frontend

### Esquema de Base de Datos
Product
name: String
description: String
price: Number
stock: Number
image: String
category: ObjectId (referencia a Category)
Category
name: String

### Endpoints
Productos
GET /products → obtener todos los productos
POST /products → crear producto
PUT /products/:id → actualizar producto
DELETE /products/:id → eliminar producto
Categorías
GET /categories → obtener categorías
POST /categories → crear categoría

### Cómo ejecutar el proyecto
# Backend

cd backend
node app.js

# Frontend

npm start

### Ejemplo de request POST

{
"name": "Mesa industrial",
"description": "Mesa de madera y hierro",
"price": 100,
"stock": 5,
"image": "https://res.cloudinary.com/dnfuhp0s1/image/upload/v1775487593/4_yd7llu.jpg",
"category": "ID_DE_CATEGORIA"
}

### Autor

Gonzalo Otero