const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubMenue()

}

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenue()
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubMenue(){
     // all open drop downs in form of array
     Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}


