import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../service/api';
import { Error, Form, Repositories, Title } from './styles';
interface Repository {
    full_name:string;
    owner: {
        login:string;
        avatar_url:string;
    };
    description: string;   
};


const Dashboard:React.FC = () => {
    const [newRepo,setNewRepo] = useState('');
    const [repositories,setRepositories] = useState<Repository[]>(()=>{
        const storagedRepositories = localStorage.getItem('@GithubExplorer:Repositories');
        if(storagedRepositories){
            return JSON.parse(storagedRepositories);
        }
        else {
            return [];
        }
    });
    const [inputError,setInputError] = useState('');

    useEffect(() => {
    localStorage.setItem('@GithubExplorer:Repositories',JSON.stringify(repositories));
    },[repositories])
   

    async function handleAddRepository(event:FormEvent<HTMLFormElement>):Promise<void>  {
        event.preventDefault();
        if(!newRepo){
        setInputError('Digite o autor/nome do repositorio');
        return;
         }
    try {
        const response = await api.get<Repository>(`repos/${newRepo}`);
    
        const repository = response.data;
        
        setRepositories([...repositories,repository]);
        setNewRepo('');
        setInputError('');
    }
    catch(err){
        setInputError('Erro na busca do repositorio');
    }
    
   
}
return (
    <>
    <img src={logoImg} alt="Github explorer"/>
    <Title>Explore repositorios no Github</Title>
    <Form  onSubmit={handleAddRepository}>
        <input
        placeholder="Digite o nome do repositorio"
        value={newRepo}
        onChange={({target})=>setNewRepo(target.value)}
    />
    <button type="submit">Pesquisar</button>
    </Form>
    {inputError &&
        <Error>
            {inputError}
        </Error>
    }
    <Repositories>

        {repositories.map(({full_name,owner,description})=>(

        <Link key={full_name} to="/repository">
        <img 
                src={owner.avatar_url}
                alt={owner.login}/>
                <div>
                    <strong>{owner.login}</strong>
                    <p>{description}</p>

                </div>
                <FiChevronRight size={20}/>
        </Link>
         ))}
       
    </Repositories>
    </>
)
}
export default Dashboard;