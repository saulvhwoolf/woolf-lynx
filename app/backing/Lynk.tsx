import {Datum} from "@/app/backing/types";
import LynkBody from "@/app/backing/LynkBody";


type Props = {
    data : Datum
}

export default function Lynk(props : Props) {
    const d = props.data
    return  <>

        <p>{">"} {d.subject}<span className={'extraInfo'}>::: <i><a href={d.from}>{d.from}</a></i></span></p>
        <LynkBody body={d.body}/>
    </>
}