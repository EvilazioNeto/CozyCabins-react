import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./login.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
    return (
        <main className={styles.mainLogin}>
            <form className={styles.formLogin}>
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                <div className={styles.configLogin}>
                    <div>
                        <input type="checkbox" />
                        Lembrar
                    </div>
                    <label>Forgot Password</label>
                </div>

                <Link to="/" className={styles.fazerLogin}>
                    Login
                </Link>
                <p className={styles.configCad}>Não tem uma conta?</p>
                <Link to="/cadastrar-se" className={styles.fazerCadastro}>
                    Cadastre-se
                </Link>

            </form>
        </main>
    )
}

export default Login;
