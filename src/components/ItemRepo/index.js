import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo({handleRemoveRepo, repo}) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositório</a><br />
        <a href='#' onClick={handleRemove} className='remover' rel='noreferrer'>Remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;