async function va(){
  console.log("hello");
  let result= await frun();
  console.log(result);
  console.log("hello2");
}
function frun(){
  return "done";
}
va();