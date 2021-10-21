Examen Segundo Parcial Desarrollo Web
ITESM CEM
Miguel Jesús Torres Cárdenas
A01168868

Se usó MongoDb en la instancia EC2

Prueba:





Agregar lugar de interés:

POST: localhost:8081/lugar/agregar
JSON:
{
    "pais": "México",
    "lugar": "Tulum",
    "atractivo": "Playas maravillosas y ruinas Mayas."
}






Obtener información por país:

GET: localhost:8081/lugar/obtener/México

GET: localhost:8081/lugar/obtener/Alemania
