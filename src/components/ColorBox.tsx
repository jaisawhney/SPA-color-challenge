interface props {
    color: string,
    onClick: (color: string) => void;
}

export default function ColorBox({color, onClick}: props) {
    return (
        <div onClick={() => onClick(color)} className={'color-box'} style={{backgroundColor: color}}/>
    )
}