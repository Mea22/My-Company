function newStyle(){
    let color = '';
    let font = '';
    let x =Math.floor(Math.random()*3);
    switch(x){
        case 0:
            color = 'blue';
            font = 'Times New Roman'; 
            break;
        case 1:
            color = 'red';
            fon = 'Florence, cursive';
            break;
        case 2:
            color = 'orange';
            font = 'Verdana';
            break;
    }
    var element = document.getElementById('header');
    element.style.color = color;
    element.style.fontFamily = font;
}
