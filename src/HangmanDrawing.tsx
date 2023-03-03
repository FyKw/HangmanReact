const HEAD = (
    <div style={{
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }} />
)
const BODY = (
    <div style={{
        height: "150px",
        width: "10px",
        position: "absolute",
        top: "120px",
        right: "0px",
        backgroundColor: "black"
    }} />
)
const RIGHT_ARM = (
    <div style={{
        height: "10px",
        width: "100px",
        position: "absolute",
        top: "150px",
        right: "-100px",
        backgroundColor: "black",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }} />
)
const LEFT_ARM = (
    <div style={{
        height: "10px",
        width: "100px",
        position: "absolute",
        top: "150px",
        right: "10px",
        backgroundColor: "black",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }} />
)
const LEFT_LEG = (
    <div style={{
        height: "10px",
        width: "100px",
        position: "absolute",
        top: "260px",
        right: "10px",
        backgroundColor: "black",
        rotate: "-50deg",
        transformOrigin: "right top"
    }} />
)
const RIGHT_LEG = (
    <div style={{
        height: "10px",
        width: "100px",
        position: "absolute",
        top: "260px",
        right: "-100px",
        backgroundColor: "black",
        rotate: "40deg",
        transformOrigin: "left top"
    }} />
)

type HangmanDrawingProps = {
    numberOfGuesses: number
}
const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative"}}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{ height: "50px", width: "10px", backgroundColor: "black", position: "absolute", top: 0, right: 0}} />
        <div style={{ height: "10px", width: "200px", backgroundColor: "black", marginLeft: "120px"}} />
        <div style={{ height: "400px", width: "10px", backgroundColor: "black", marginLeft: "120px"}} />
        <div style={{ height: "10px", width: "250px", backgroundColor: "black"}} />
    </div>
    )
}