import Link from "next/link";
import { Url } from "url";

interface Props {
    classes: string
    text: string
    route: Url | any
}

const LinkButton: React.FC<Props> = (props) => {

    const { classes, text, route } = props;

    return (
        <Link href={route}>
            <button
                className={classes}
            >{text}</button>
        </Link>
    );
}

export default LinkButton;