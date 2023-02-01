interface props {
    color: string
}

export default function ColorBox({color}: props) {
    return (
        <div className={'color-box'} style={{backgroundColor: color}}/>
    )
}