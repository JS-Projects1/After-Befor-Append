let after = document.getElementById('after');
let befor = document.getElementById('befor');
let append = document.getElementById('append');
let content = document.getElementById('content');
let container = document.getElementById('container');

container.style.width = '500px';
container.style.height = '100px';
container.style.backgroundColor = '#ffa';


after.onclick = function(){
    container.after(content);
}
befor.onclick = function(){
    container.before(content);
}
append.onclick = function(){
    container.append(content);
}


