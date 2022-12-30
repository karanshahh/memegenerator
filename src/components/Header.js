import troll from "../images/troll.png"

export default function Header() {
    return (
        <header className="header">
            <img src={troll} className="header--img"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--madeby">Built by Karan</h4>
        </header>
    )
}