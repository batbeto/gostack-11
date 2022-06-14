import React, { useState, useEffect } from 'react';
import './app.css';

import api from './services/api';

function App(){
  const [ projects, setProjects ] = useState([]);
  
  useEffect(()=>{
    api.get('/projects').then(r => {
      setProjects(r.data);
    });
  }, []);

  async function handleChange(){
    const response = await api.post('/projects', {
      title: `Só vamo ${Date.now()}`,
      owner: `Adalberto`
    });

    const project = response.data;

    setProjects([...projects, project]);
  };

  return (
    <>
      <header>Adalberto Maia</header>
      
      <ul>
        {projects.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>

      <button type='button' onClick={handleChange}>Adicionar Projeto</button>
    </>
    );
};



export default App;