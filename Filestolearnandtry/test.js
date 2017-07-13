var myApp = {
 
    id: 0,
 
    next: function() {
        return this.id++;   
    },
 
    reset: function() {
        this.id = 0;    
    }
}
window.console && console.log(
    myApp.next(),
    myApp.next(),
    myApp.reset(),
    myApp.next()
) //0, 1, undefined, 0
