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
}