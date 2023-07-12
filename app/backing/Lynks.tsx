import {Data, Datum} from "@/app/backing/types";
import Lynk from "@/app/backing/Lynk";

type Props = {
    // data : Datum
    userFilter : null | string
}

async function getData() {
    const res = await fetch('https://raw.githubusercontent.com/wolflynxcat/wolflynxcat.github.io/main/test.json')
    return res.json()
}

export default async function Lynks(props : Props) {
    let data = await getData() as Data
    if (props.userFilter != null) {
        data = data.filter((datum) => {
            return datum.from === props.userFilter
        })
    }


    if (data.length == 0) {
        return <p>No lynks for this user!</p>
    }
    // const datum = data[0]

    // const d = props.data
    return  <>
        <p>links</p>
        <ul style={{}}>
            {data.map((datum) => {
                return <li>
                    <Lynk data={datum}/>
                </li>
            })}
        </ul>
    </>
}