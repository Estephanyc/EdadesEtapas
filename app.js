var age = prompt("Ingresa tu edad");
if (age != null & age != 0 & age % 1 === 0) 
{
  if (age <= 2)
  {
    alert("Estas en la etapa Toddler");
  }
  if (age == 3) {
      alert("Estas en la etapa Toddler pasando a la etapa Preschooler");
  }
  if (age >3 & age <5) 
  {
      alert("Estas en la etapa Preschooler");
  }
  if (age == 5) {
      alert("Estas en la etapa Preschooler pasando a la etapa Gradeschooler");
  }
  if (age > 5 & age < 12) 
  {
      alert("Estas en la etapa Gradeschooler");
  }
  if (age == 12) {
      alert("Estas en la etapa Gradeschooler pasando a la etapa  Teenager");
  }
  if (age > 12 & age < 18)
  {
      alert("Estas en la etapa Teenager");
  }
  if (age == 18) {
      alert("Estas en la etapa Teenager pasando a la etapa young");
  }
  if (age > 18 & age < 21)
  {
      alert("Estas en la etapa young");
  }
  if (age == 21) {
      alert("Estas en la etapa young pasando a la etapa adult");
  }
  if (age > 21) {
        alert("Estas en la etapa adult");
  }
}
else
{
alert("ingrese un dato valido");
}