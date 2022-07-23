import * as React from 'react';
import { BottomButtons, Card, IconButton, Text } from '../../StyledComponents';
import TrashIcon from '../../assets/Icon-trash.png';
import EditIcon from '../../assets/Icon-edit.png';
type PokeCardProps = {
  image: string;
  desc: string;
}

export default function PokeCard(props: PokeCardProps) {

  return (
    <Card pb='100px'>
      <img src={props.image} style={{ borderRadius: '50%', marginTop: '15%' }} />
      <Text ta='center' lh="22px" mt='20px' color='#263238'>{props.desc}</Text>
      <BottomButtons>
        <IconButton>
          <img src={TrashIcon} />
          <Text lh="22px" size='15px' color='#263238'>Excluir</Text>
        </IconButton>
        <IconButton>
          <img src={EditIcon} />
          <Text lh="22px" size='15px' color='#263238'>Editar</Text>
        </IconButton>
      </BottomButtons>
    </Card>
  )
}