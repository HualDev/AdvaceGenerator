const getAdvice = async () => {
    const result = await fetch("https://api.adviceslip.com/advice")
    const data = await result.json() 
    
    document.getElementById("tittle").innerHTML = `Advice #${data.slip.id}`
    document.getElementById("text").innerHTML = `"${data.slip.advice}"`
}

document.getElementById('circle').addEventListener('click',()=>{
    getAdvice()
})