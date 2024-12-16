const container = document.querySelector('.container');
let i = 0;

container.addEventListener('click',function(e){
    const isiX = document.querySelector('.x').innerHTML;
     const valueX = parseInt(isiX);
     const isiY = document.querySelector('.y').innerHTML;
     const valueY = parseInt(isiY);
     document.querySelector('.hasil').innerHTML = ''
    
   if(e.target.className == 'x-button'){
    document.querySelector('.x').innerHTML = valueX + 1
    
   }
   else if(e.target.className == 'min-x-button'){
    
       document.querySelector('.x').innerHTML = valueX - 1
   }
   if(e.target.className == 'y-button'){
    document.querySelector('.y').innerHTML = valueY + 1
    
   }
   else if(e.target.className == 'min-y-button'){
    
       document.querySelector('.y').innerHTML = valueY - 1
   }
   
});
const cari = document.querySelector('.cari');

cari.addEventListener('click',function(){
    const xPanel = parseInt(document.querySelector('.x').innerHTML);
    const yPanel = parseInt(document.querySelector('.y').innerHTML);
    const hasil = document.querySelector('.hasil');
    
    function quadrant(x,y){
        if(x>0&&y>0 )return '1'
        if(x<0&&y>0)return '2'
        if(x<0&&y<0)return '3'
        if(x>0&&y<0)return '4'
        if(x>0 && y == 0)return `1 dan 4`
        if(x<0 && y == 0) return '2 dan 3'
        if(x == 0 && y>0) return '1 dan 2'
        if(x == 0 && y<0) return '3 dan 4'
        if(y == 0 && x == 0){
            return `Tidak Termasuk kuadran Manapun`
        }
    }
   
    
    const quad = quadrant(xPanel,yPanel);
    
    hasil.innerHTML = quad
    
    



})    
