let $text = document.getElementById('text')
let $btn = document.querySelectorAll('button')
for (let i = 0; i < $btn.length; i++){
    $btn[i].addEventListener('click', function(){

        switch(i){
            case 0:        
                format('#F1FFF2', '#314844','4px','double')
                borderRadius('5px','5px','5px','5px')
                borderColor('blue', 'blue', 'blue', 'blue')
            break
            case 1:        
                format('#FFE4E1', '#493C8A','6px','dashed')
                borderRadius('2px','2px','2px','2px')
                borderColor('#493C8A', '#493C8A', '#493C8A', '#493C8A')
            break
            case 2:        
                format('#D3D3D3', '#3249442','7px', 'dashed')
                borderRadius('20px','20px','2px','2px')
                borderColor('#686868', '#686868', '#686868', '#686868')
            break
            case 3:        
                format('#483D8B', '#1EAFEF','7px', 'solid')
                borderRadius('5px','20px','5px','20px')
                borderColor('#483D8B', '#05061A', '#05061A', '#483D8B')
            break
        }

    })
}
function format(bgColor, textColor, borderWidth, borderStyle){
    $text.style.backgroundColor = bgColor
    $text.style.color = textColor
    $text.style.borderWidth = borderWidth
    $text.style.borderStyle = borderStyle
    
}
function borderRadius(borderRadiusTR, borderRadiusBR, borderRadiusBL, borderRadiusTL){
    $text.style.borderTopRightRadius = borderRadiusTR
    $text.style.borderBottomRightRadius = borderRadiusBR
    $text.style.borderBottomLeftRadius = borderRadiusBL
    $text.style.borderTopLeftRadius = borderRadiusTL
}
function borderColor(topColor, rightColor, bottomColor, leftColor){
    $text.style.borderTopColor = topColor
    $text.style.borderRightColor = rightColor
    $text.style.borderBottomColor = bottomColor
    $text.style.borderLeftColor = leftColor
}