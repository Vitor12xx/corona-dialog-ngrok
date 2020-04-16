module.exports = {
    selectAny: (phrases) => {
        return phrases.length > 0 ? phrases[Math.floor(Math.random() * phrases.length)] : null    
    } 
}