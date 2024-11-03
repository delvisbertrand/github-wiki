import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles'
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`, {validateStatus: () => true});

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
      }
      return;
    }
    alert('Repositório não encontrado');
  }

  const handleRemoveRepo = (id) => {
    if(window.confirm("Deseja realmente remover este repositório?")) setRepos(repos.filter(repo => repo.id !== id));
  }
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github logo'/>
      <Input value={currentRepo} onChange={event => setCurrentRepo(event.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
