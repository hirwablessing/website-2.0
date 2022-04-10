export default function NavMenuIcon({
    style
}: {
    style: (light: string, dark: string) => string
}) {
    return (
        <svg
            version="1.1"
            className="h-6 w-6"
            id="Livello_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            enableBackground="new 0 0 24 24"
        >
            <path
                className={style('fill-neutrals-400', 'fill-white')}
                d="M3.25,6c0-0.414,0.336-0.75,0.75-0.75h16c0.414,0,0.75,0.336,0.75,0.75S20.414,6.75,20,6.75H4C3.586,6.75,3.25,6.414,3.25,6
	z"
            />
            <path
                className={style('fill-neutrals-400', 'fill-white')}
                d="M3.25,12c0-0.414,0.336-0.75,0.75-0.75h16c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75H4
	C3.586,12.75,3.25,12.414,3.25,12z"
            />
            <path
                className={style('fill-neutrals-400', 'fill-white')}
                d="M4,17.25c-0.414,0-0.75,0.336-0.75,0.75S3.586,18.75,4,18.75h16c0.414,0,0.75-0.336,0.75-0.75s-0.336-0.75-0.75-0.75H4z"
            />
        </svg>
    )
}
