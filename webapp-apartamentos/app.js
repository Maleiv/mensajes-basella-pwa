// Apartment codes (equivalent to 'keys' in Python)
const keys = {
    "1A": "9856",
    "1B": "6248",
    "2A": "6574",
    "2B": "2584",
    "3A": "2784",
    "3B": "7447",
};

document.getElementById("generate").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const ap = document.getElementById("apartment").value;
    const special = document.getElementById("cider").value;
    
    if (!ap) {
        alert("Selecciona apartamento");
        return;
    }

    const password = keys[ap];
    let specific = "";
    
    if (ap === "1A") {
        specific = ` También tenéis colchonetas para el mobiliario exterior dentro del apartamento en el cuarto de la lavandería. 
        \nEl toldo de la pérgola se acciona con un mando a distancia que está en el salón. Tanto el toldo como los cojines rogamos se mantengan recogidos después de su uso, especialmente el toldo por la noche por seguridad.`;
    } else if (ap === "1B") {
        specific = ` También tenéis colchonetas para el mobiliario exterior en un contenedor en la terraza. 
        \nEl toldo de la pérgola se acciona con un mando a distancia que está en el salón. Tanto el toldo como los cojines rogamos se mantengan recogidos después de su uso, especialmente el toldo por la noche por seguridad.`;
    }

    let message = `Hola ${name} tu apartamento es el ${ap}. Entras con este código: ${password}✅, que también abre el portal utilizando el teclado negro. La wifi es cualquiera de las "puertobasella" y la contraseña es "lobeira14".
    \nEn el salón hay una carpeta de color marrón que contiene información, sugerencias y recomendaciones de restaurantes y servicios en la zona.
    \nHay artículos de limpieza en un armario fuera del apartamento, al lado del ascensor, por si los necesitáis.${specific}
    \nCualquier cosa que necesitéis, decídmelo. Mañana por la mañana andará por ahí mi empleada Mary Carmen. Espero que paséis una buena estancia.`;
    
    if (special === "SI") {
        message += "\nOs hemos dejado una sidra natural artesanal que elaboramos en nuestra aldea de la provincia de Lugo con nuestras propias manzanas. Tomadla fría, como si fuera un vino blanco, sin escanciar. Espero que os guste.";
    }
    
    document.getElementById("message").value = message;
});

document.getElementById("copy").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.select();
    document.execCommand("copy");
    alert("Mensaje copiado al portapapeles!");
});

document.getElementById("booking").addEventListener("click", function() {
    window.open("https://admin.booking.com/hotel/hoteladmin/extranet_ng/manage/search_reservations.html?upcoming_reservations=1&source=nav&hotel_id=260913&lang=es", "_blank");
});