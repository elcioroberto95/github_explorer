import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Form, Repositories, Title } from './styles';

const Dashboard:React.FC = () => (
<>
<img src={logoImg} alt="Github explorer"/>
<Title>Explore repositorios no Github</Title>
<Form>
    <input placeholder="Digite o nome do repositorio" />
    <button type="submit">Pesquisar</button>
</Form>

<Repositories>
    <a href="teste">
        <img 
        src="https://avatars.githubusercontent.com/u/65626953?s=460&u=f9cfba58acb8d2920c230e2c8aa0a9ddc48b705b&v=4"
        alt="Elcio R"/>
        <div>
            <strong>elcioroberto95</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in!!</p>
        </div>
        <FiChevronRight size={20}/>
    </a>

    <a href="teste">
        <img 
        src="https://avatars.githubusercontent.com/u/65626953?s=460&u=f9cfba58acb8d2920c230e2c8aa0a9ddc48b705b&v=4"
        alt="Elcio R"/>
        <div>
            <strong>elcioroberto95</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in!!</p>
        </div>
        <FiChevronRight size={20}/>
    </a>

    <a href="teste">
        <img 
        src="https://avatars.githubusercontent.com/u/65626953?s=460&u=f9cfba58acb8d2920c230e2c8aa0a9ddc48b705b&v=4"
        alt="Elcio R"/>
        <div>
            <strong>elcioroberto95</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in!!</p>
        </div>
        <FiChevronRight size={20}/>
    </a>

</Repositories>
</>
)
export default Dashboard;