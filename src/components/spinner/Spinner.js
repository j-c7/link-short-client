import spinner from "./spinner.module.css";

const Spinner = () => {
    return (
        <div className={spinner.spinner}>
            <div className={spinner.rect1}></div>
            <div className={spinner.rect2}></div>
            <div className={spinner.rect3}></div>
            <div className={spinner.rect4}></div>
            <div className={spinner.rect5}></div>
        </div>
    )
}

export default Spinner