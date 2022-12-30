import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const rndm = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[rndm].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form-input" 
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form-input" 
                    value={meme.bottomText}    
                    name="bottomText"
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">Get a new meme image!</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}