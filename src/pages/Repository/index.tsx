import React, { useEffect, useState } from 'react';
import { FiChevronsLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import api from '../../service/api';
import { Header, Issues, RepositoryInfo } from './styles';
interface RepositoryRouteParams {
    repository:string;
};
interface RepositoryParams {
    full_name:string;
    description:string;
    stargazers_count:number;
    forks_count:number;
    open_issues_count:number;
    owner: {
        login:string;
        avatar_url:string;
    }
}

interface Issue {
    id:number;
    title:string;
    html_url:string;
    user: {
        login:string;
    }
   
}
const Repository:React.FC = () => {
    const [repository,setRepository] = useState< RepositoryParams | null >(null);
    const [issues,setIssues] = useState<Issue[]>([]);
    const {params} = useRouteMatch<RepositoryRouteParams>();

    
    useEffect(() => {
     api.get(`repos/${params.repository}`).then((response) =>{
         setRepository(response.data);
     })
     api.get(`repos/${params.repository}/issues`).then((response) => {
         setIssues(response.data);
        console.log(response.data)
        })


        },[params.repository])
    return (
        <>
        <Header>
            <img src={logoImg} alt="Github explorer"/>
            <Link to="/dashboard">
                <FiChevronsLeft size={16}/>
                Voltar
            </Link>
            </Header>
            {
                repository && 
                (
            <RepositoryInfo>
            <header>
                <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                </div>
            </header>
        
                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>stars</span>
                    </li>
                    
                    <li>
                        <strong>{repository.forks_count} </strong>
                        <span>Forks</span>
                    </li>
                    
                    <li>
                        <strong>{repository.open_issues_count} </strong>
                        <span>Issues</span>
                    </li>
                </ul>

            </RepositoryInfo>

                )

            }

         
<Issues>

{issues.map((issue)=>{
   
   return (
<a key={issue.id} href={issue.html_url}>
        <div>
<strong>{issue.title}</strong>
<p>{issue.user.login}</p>
        </div>

    </a>
   
   )
})}
</Issues>  
           
    </>
    )

    }
export default Repository;