import React, {useState, useEffect} from 'react';

import './App.css';

import api from './services/api';

function App(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
       api.get('projects').then(response => {
           setProjects(response.data);
       }); 
    } , []);

    async function handleAddProject(){
        const response = await api.post('projects', {
            title: `Projeto Novo ${Date.now()}`,
            owner: "Helio Lima"
        });
        
        setProjects([... projects, response.data]);
    }

    return (
        <>
            <ul>
                { projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}> Adicionar projeto</button>
        </>
    );
}

export default App;
