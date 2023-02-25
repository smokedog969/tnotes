import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">STS-Notes!</span></h1>
            </header>
            <main className="public__main">
                <p>This App was greated to store all notes and todos</p>
                {/* <address className="public__addr">
                    Dan D. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address> */}
                <br />
                <p>Owner: STS APPS by Steffen Schafrik</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public