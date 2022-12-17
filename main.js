
let container = document.querySelector('.container');
for(let i = 1; i <= 100; i++){
    let dot = document.createElement('div');
    dot.classList.add('element');
    container.appendChild(dot);
}

 let dotAll = document.querySelectorAll('.element');
 let animation = anime.timeline({
    targets: dotAll,
    easing: 'easeInOutExpo',
    loop:true,
    delay: anime.stagger(100,{grid:[10,10], from:'center'})
 })

 animation
 .add({
    rotateX:180,
    translateY: anime.stagger(0,{grid:[10,10], from:'center',axis:'y'}),
    translateX: anime.stagger(0,{grid:[10,10], from:'center',axis:'X'}),
    opacity:1,
 })

 .add({
    borderRadious:50,
 })

 .add({
   scale:0.5,
   opacity:0,
 })

 animation
 .add({
    rotateZ:180,
    translateY: anime.stagger(0,{grid:[10,10], from:'center',axis:'y'}),
    translateX: anime.stagger(0,{grid:[10,10], from:'center',axis:'X'}),
    opacity:0.7,
 })

 .add({
    scale:1.48,
    borderRadious:0,
    opacity:0.5
  })

  .add({
    rotateZ:-90,
  })
 
 
