function area_triangulo(){
    // tomamos el 'id' de los input de entrada de base y altura en una variable
    let base_triangulo=document.getElementById("base_triangulo").value;
    let altura_triangulo=document.getElementById("altura_triangulo").value;
    //Calculamos el resultado
    let resultado_area_triangulo=(base_triangulo*altura_triangulo)/2;
    //ahora imprimimos en el resultado del área del triángulo
    document.getElementById("resultado_area_triangulo").value=resultado_area_triangulo;
}