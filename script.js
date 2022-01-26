// document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
           //document.querySelector('.ham').style.display = 'inline';
           // document.querySelector('.cross').style.display = 'none';
    }else {
           //document.querySelector('.cross').style.display = 'inline';
        setTimeout(() => {
           // document.querySelector('.ham').style.display = 'none';
        },100)
    }
})


function expandIntroSkill(){
    
       if(document.querySelector('.skillContainer').style.display == 'block'){
        document.querySelector('.skillContainer').style.display = 'none';
       } else{
        document.querySelector('.skillContainer').style.display = 'block';
       }
    
}