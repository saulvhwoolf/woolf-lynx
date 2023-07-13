import {Datum} from "@/app/backing/types";


type Props = {
    data : Datum
}

export default function Lynk(props : Props) {
    const d = props.data
    return  <>

        <p>{">"} {d.subject}<span className={'extraInfo'}>::: <i><a href={d.from}>{d.from}</a></i></span></p>
        <p><a href={d.body}>{d.body}</a></p>
    </>
}