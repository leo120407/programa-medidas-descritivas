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
        mediana = nums[(nums.length/2) + 0.5];
    } else {
        mediana = nums[nums.length/2];
        mediana += nums[(nums.length/2)-1];
        mediana = mediana/2;
    }
    return mediana;
}

function teste() {
    
}