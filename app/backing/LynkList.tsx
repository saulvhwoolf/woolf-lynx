import {Data} from "@/app/backing/types";
import Lynk from "@/app/backing/Lynk";

type Props = {
    // data : Datum
    userFilter : null | string
}

async function getData() {
    const res = await fetch('https://raw.githubusercontent.com/wolflynxcat/wolflynxcat.github.io/main/gmail_data.json', { cache: 'no-store' })
    // const res = await fetch('https://raw.githubusercontent.com/wolflynxcat/wolflynxcat.github.io/main/test.json', { cache: 'no-store' })
    return res.json()
}

export default async function LynkList(props : Props) {
    let data = await getData() as Data
    if (props.userFilter != null) {
        data = data.filter((datum) => {
            return datum.from === props.userFilter
        })
    }

    if (data.length == 0) {
        return <p>No lynks for this user!</p>
    }

    return  <>
        <ul style={{}}>
            {data.map((datum) => {
                return <li>
                    <Lynk data={datum}/>
                </li>
            })}
        </ul>
        <p>fin</p>
    </>
}