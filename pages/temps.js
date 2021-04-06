function Temps(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dynamique)</div>
            <div>{props.staticDateString} (static)</div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Temps