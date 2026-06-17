import Link from "next/link"

function Layout({ children }) {
    return (
        <>
            <header className="header">
                <h2>Fatemeh Bazgir CRM</h2>
                <Link href="/add-customer">Add Customer</Link>
            </header>
            <div className="main">{children}</div>
            <footer className="footer">
                <a href="https://github.com/fatemehbazgir/CRM-Next.js" target="_blank" rel="noreferrer">Developed with 💖 by Fatemeh Bazgir</a> &copy;
            </footer>
        </>
    )
}

export default Layout