const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
bodyElement.append(mainElement)
let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
       

        
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
      
    },
    toString: function() {
     coin.flip()
    if(this.state === 0){
        return 'Heads'
    }else{
        this.state === 1 
            return 'Tails'
        
    }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');
            if(this.state === 0) {
       image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7w6mqxiOrgRfxUsuSQv_IgHaHa%26pid%3DApi&f=1'
    } else {
        this.state === 1 
   
        image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3I1kZCsitwT1TV29KKTLKQHaHY%26pid%3DApi&f=1'
      }
      document.body.append(image)  
        
        
        
        /* 3. Set the properties of this image element to show either face-up
                  or face-down, depending on whether this.state is 0 or 1.*/
    }
                }; 

    
function display20Flips(){
    for(let index = 0; index < 20; index += 1){
       let flipped = coin.toString()
   document.body.append(flipped + ', ')
    
}

}
display20Flips()
console.log(coin.toString())

function display20Images(){
    for(let index = 0; index < 20; index += 1){
        coin.toHTML()
    }
}
display20Images()
