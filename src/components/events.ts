
// check if a menu is active
export let isMenuActive: boolean = false;



// event listeners only gang 
// ok but fr how do i make this cleaner wtf

export const Init = function() {
    // the thing that opens when you win
    const winModal = document.getElementById('w') as HTMLElement

    // right click dropdown
    const dropdown = document.getElementById('rightclick') as HTMLElement

    //when you press the x key
    const xkey = document.getElementById('x-key') as HTMLElement

    
    // when mouse leaves vicinity of a dropdown menu, close it. this is to mimic blender
    dropdown.addEventListener("mouseleave", function() {
        dropdown.classList.add("disable")
        isMenuActive = false
    })

    // close on click
    dropdown.addEventListener("mouseup",function() {
        if (isMenuActive) {
            dropdown.classList.add("disable")
            isMenuActive = false
        }
    })

    //same thing with xkey
    xkey.addEventListener("mouseleave", function() {
        xkey.classList.add("disable")
        isMenuActive = false
    })
    xkey.addEventListener("mouseup",function() {
        if (isMenuActive) {
            xkey.classList.add("disable")
            isMenuActive = false
        }
    })

     //disable default rightclick
    document.oncontextmenu = function() {
        return false;
    }


    return {winModal,  dropdown, xkey}
}

export const openMenu = function(element: HTMLElement, pos: Pos  | null= null) {
    element.classList.remove("disable")
    if (pos != null) {
        // sets the context menus at cusor position. the -48 value is an offset for the invisible padding
        element.style.setProperty("left", (pos.x - 48).toString() + "px")
        element.style.setProperty("top",  (pos.y - 48).toString() + "px")
    }
    isMenuActive = true
}
