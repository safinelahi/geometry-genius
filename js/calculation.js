//triangle
// global triangle value 
let triangleArea = 0
function triangleCalculate(){
    //console.log('done')
    // triangle base value
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseInputValue = triangleBaseInput.value
    //console.log(triangleBaseValue)
    const triangleBase = parseFloat(triangleBaseInputValue)
    console.log(triangleBase)

    // triangle height value
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightInputValue= triangleHeightInput.value
    const triangleHeight = parseFloat(triangleHeightInputValue)
    console.log(triangleHeight)
    // calculation triangle area
     triangleArea = 0.5 * triangleBase * triangleHeight
    //console.log(triangleArea)
    // display triangle are 
    const displayTriangleArea = document.getElementById('display-triangle-area')
    //console.log(displayTriangleArea)
    displayTriangleArea.innerText = triangleArea
}
// convert cm to m in triangle area
document.getElementById('convert-triangle-area').addEventListener('click',function(){
    //console.log(triangleArea)
    const convertTriangleArea = triangleArea / 100
    const displayConvertTriangleArea = document.getElementById('display-triangle-area')
    displayConvertTriangleArea.innerText = convertTriangleArea
})

// Rectangle
//global Rectangle area 
let rectangleArea = 0

function rectangleCalculation(){
    //console.log('hello')
    // rectangle Wight value
    const rectangleWightInput = document.getElementById('rectangle-wight')
    const rectangleWightValue = rectangleWightInput.value
    //console.log(rectangleWightValue)
    const rectangleWight = parseInt(rectangleWightValue)
    console.log(rectangleWight)

    // rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const rectangleLengthValue = rectangleLengthInput.value
    const rectangleLength = parseInt(rectangleLengthValue)
    console.log(rectangleLength)

    // Calculation rectangle Area 
    rectangleArea = rectangleWight * rectangleLength
    console.log(rectangleArea)

    // display rectangle area 
    const displayRectangleArea = document.getElementById('display-rectangle-area')
    displayRectangleArea.innerText = rectangleArea
}

// convert cm to m in rectangle-area
document.getElementById('convert-rectangle-area').addEventListener('click', function(){
    const convertRectangleArea= document.getElementById('display-rectangle-area')
    convertRectangleArea.innerText= rectangleArea / 100
})

// Parallelogram
// global Parallelogram area 
let parallelogramArea = 0

// now used same type of repetition function and usable 
function parallelogramCalculation(){
    // parallelogram Base value 
    const parallelogramBase = getInputValueById('parallelogram-base')
   // console.log(parallelogramBase)

   // parallelogram Height value 
    const parallelogramHeight = getInputValueById('parallelogram-height')
    //console.log(parallelogramHeight)

    // parallelogram area calculation
    parallelogramArea = parallelogramBase * parallelogramHeight
    console.log(parallelogramArea)
    setDisplayTextById('display-parallelogram-area')
}
// convert parallelogram  area in cm to m 
document.getElementById('convert-parallelogram-area').addEventListener('click', function(){
    setConvertAreaValue('display-parallelogram-area')
})

// re-usable function for user input 
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValue = inputField.value
    const inputValue = parseInt(inputFieldValue)
    return inputValue
    
}

// re-usable function for set area value in display
function setDisplayTextById(elementId){
    const displayText = document.getElementById(elementId)
    displayText.innerText = parallelogramArea
}

// re-usable function for convert cm to m value 
function setConvertAreaValue(elementId){
    const convertAreaValue = document.getElementById(elementId)
    convertAreaValue.innerText = parallelogramArea / 100
}