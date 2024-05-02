import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './cadastro.module.css';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cadastro() {
    return (
        <main className={styles.mainCadastro}>
            <form className={styles.formCadastro}>
                <div className={styles.dadosProtegidos}>
                    <h2>Dados para acesso</h2>
                    <div>
                        <label><FontAwesomeIcon icon={faEnvelope} /> E-mail</label>
                        <input type="text" placeholder='Digite o seu email'/>
                    </div>
                    <div>
                        <label><FontAwesomeIcon icon={faLock} /> Senha</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label><FontAwesomeIcon icon={faLock} /> Confirmar Senha</label>
                        <input type="password" />
                    </div>
                </div>
                <div className={styles.dadosPessoais}>
                    <h2>Dados Pessoais</h2>
                    <label>Nome completo: <input type="text" /></label>
                    <label>CPF: <input type="text" placeholder='___.___.___-__'/></label>
                    <label>Celular: <input type="text" placeholder='(xx) x xxxx-xxxx'/></label>
                    <label>
                        Sexo:
                        <select name="" id="">
                            <option>Masculino</option>
                            <option >Feminino</option>
                        </select>
                    </label>
                    <Link to="/login" className={styles.btnCadastro}>Criar Conta</Link>
                </div>
            </form>
        </main>
    )
}

export default Cadastro;
