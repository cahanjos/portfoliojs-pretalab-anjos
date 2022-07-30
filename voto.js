let idade = 75

if(18 <= idade && idade <= 60){
    console.log('Você pode votar e o voto é obrigatório')
}else if (idade >= 16 && idade < 18 || idade > 60 && idade <= 65){
    console.log('Você pode votar e o voto é opcional')
} else if (idade > 65){
    console.log('Você pode votar e receberá uma restituição')
}
else {
    console.log('Você não pode votar')
}