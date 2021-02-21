import { FiChevronRight, FiChevronsLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Header, Issues, RepositoryInfo } from './styles';
interface RepositoryParams {
    repository:string;
}
const Repository:React.FC = () => {
const {params} = useRouteMatch<RepositoryParams>();
return (
    <>
    <Header>
        <img src={logoImg} alt="Github explorer"/>
        <Link to="/dashboard">
            <FiChevronsLeft size={16}/>
            Voltar
        </Link>
        </Header>
        <RepositoryInfo>
    <header>
        <img src="https://i.pinimg.com/474x/51/20/c1/5120c185fc9e2de84508f61938e6a7fd.jpg" alt="Um homem inteligente"/>
        <div>
            <strong>Mestre Saiajyn</strong>
            <p>Descrição de um homem integro.</p>
        </div>
    </header>
   
    <ul>
        <li>
            <strong>1808</strong>
            <span>stars</span>
        </li>
        
        <li>
            <strong>48 </strong>
            <span>Forks</span>
        </li>
        
        <li>
            <strong>67 </strong>
            <span>Issues</span>
        </li>
    </ul>

        </RepositoryInfo>
    <Issues>

    <Link to="dasd">
        
                <div>
                    <strong>puto1x</strong>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>

                </div>
                <FiChevronRight size={20}/>
        </Link>

    </Issues>
  </>
)

}
export default Repository;