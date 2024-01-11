import { Fragment } from "react"
import Footer from "./Footer"
import "./container.scss"

const Container = ({ children }) => {
    return (
        <Fragment>
            <main className="main">
                {children}
            </main>
            <div className="footer">
                <Footer />
            </div>
        </Fragment>
    )
}

export default Container