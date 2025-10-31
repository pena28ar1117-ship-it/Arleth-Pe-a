const tips = [
    "tener una dieta equilibrada, rica en frutas, verduras y fibra, y baja en grasas saturadas y azúcares.",
    "hacer ejercicio regularmente, idealmente la mayoría de los días de la semana.",
    "dormir lo suficiente y tener un horario de sueño constante.",
    "mantenerse hidratado, bebiendo suficiente agua durante el día.",
    " evitar hábitos nocivos como fumar, controlar el consumo de alcohol y mantener una buena higiene personal."
];

document.getElementById("btnConsejo").addEventListener("click", () => {
    const random = Math.floor(Math.random() * tips.length);
    document.getElementById("textoConsejo").textContent = "✅ " + tips[random];
});
