import {Datum} from "@/app/backing/types";


type Props = {
    data : Datum
}

export default function Lynk(props : Props) {
    const d = props.data
    return  <>

        <p> {">"} <span className={'extraInfo'}>{d.id} ::: {d.to} ::: {d.from}</span></p>
        <p><a href={d.body}>{d.body}</a></p>
    </>
}