askSomeQuestion("Вы согласны, что скоро сессия?", yesFunction, noFunction);
function askSomeQuestion(question, yes, no) {
if(confirm(question)) {
yes();
} else { 
no();
}
}
function yesFunction() {
alert("вы согласились.");
}
function noFunction() {
alert("вы не согласны.");
}