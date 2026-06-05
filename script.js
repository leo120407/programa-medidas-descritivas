function calcularMedia(nums) {
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });
    return sum / nums.length;
}

function calcularMediana(nums) {
    let mediana;
    nums.sort((a,b) => a - b);
    if (nums.length % 2 != 0) {
        if (nums.length == 1) {
            mediana = nums[0]
        } else {
            mediana = nums[(nums.length/2) - 0.5];
        }
    } else {
        mediana = nums[nums.length/2];
        mediana += nums[(nums.length/2)-1];
        mediana = mediana/2;
    }
    return mediana;
}

function calcularVariancia(nums) {
    if (nums.length == 0 || nums.length == 1) {
        return 0;
    }
    let media = calcularMedia(nums);
    let variancia = 0;
    nums.forEach(num => {
        variancia += (num - media)**2
    });
    variancia = variancia/(nums.length-1)
    return variancia;
}

function calcularCV(nums) {
    media = calcularMedia(nums);
    if (media == 0) {
        return 0;
    } 
    let CV = (Math.sqrt(calcularVariancia(nums))/media)*100
    return CV;
}

function calcularhomomogeneidade(CV) {
    let homogeneidade;
    if (CV <= 30) {
        homogeneidade = "Homogêneo"
    } else {
        homogeneidade = "Heterogêneo";
    }
    return homogeneidade;
}

let form = document.getElementById("numbers-form");
let cabecalho = document.getElementById("cabecalho");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numeros = document.getElementById("numbers").value
    numeros_array = numeros.replace(/\s/g, "");
    if (!/^[0-9,]+$/.test(numeros_array)) {
        return window.alert("Lista de números inválida")
    }
    numeros_array = numeros_array.split(",");
    numeros_array = numeros_array.map(Number);
    let calculos = {
        "numeros": numeros_array,
        "media": calcularMedia(numeros_array),
        "mediana": calcularMediana(numeros_array),
        "variancia": calcularVariancia(numeros_array),
        "DP": Math.sqrt(calcularVariancia(numeros_array)),
        "CV": calcularCV(numeros_array),
        "homogeneidade": calcularhomomogeneidade(calcularCV(numeros_array))
    }
    let newrow = document.createElement("tr");
    newrow.innerHTML = `
        <td class="text-wrap">${calculos.numeros}</td>
        <td>${calculos.media}</td>
        <td>${calculos.mediana}</td>
        <td>${calculos.variancia}</td>
        <td>${calculos.DP}</td>
        <td>${calculos.CV}</td>
        <td>${calculos.homogeneidade}</td>
    `
    cabecalho.insertAdjacentElement('afterend',newrow);
    console.log(calculos);
})