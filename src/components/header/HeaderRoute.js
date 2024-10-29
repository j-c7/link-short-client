import Link from "next/link"

const HeaderRoute = ({ route, name, target }) => {
    return (
        <Link
            href={route}
            className="text-xl font-bold hover:text-green-400 active:text-green-300"
            target={target}
        >
            {name}
        </Link>
    );
}

export default HeaderRoute;