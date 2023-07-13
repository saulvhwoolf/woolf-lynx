

type Props = {
    body : string
}

export default function LynkBody(props:Props) {
    const bodySections = splitByUrl(props.body)

    return bodySections.map((section : BodySection) => {
        if (section.isLink ){
            return <a href={section.text}>{section.text}</a>
        } else {
            return <>{section.text}</>
        }
    })
}



type BodySection = {
    text : string,
    isLink : boolean
}

function splitByUrl(text : string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((str) => {
        return {text: str, isLink: urlRegex.test(str)}
    })
}