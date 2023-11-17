'use client';

import { useState } from 'react';
import { Character } from './Character';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button/Button';

const initialCharacters = [
  { id: 1, name: 'Character1', level: 1 },
  { id: 2, name: 'Character2', level: 5 },
  { id: 3, name: 'Character3', level: 5 },
  { id: 4, name: 'Character4', level: 8 },
  { id: 5, name: 'Character5', level: 8 },
  { id: 6, name: 'Character6', level: 9 },
];

export const CharacterList = () => {
  const [newCharacterName, setNewCharacterName] = useState('');
  const [characters, setCharacters] = useState(initialCharacters);
  const [selectedId, setSelectedId] = useState(1);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCharacterName(event.target.value);
  };

  const handleCharacterCreation = () => {
    const newCharacter = {
      id: characters.length + 1,
      name: newCharacterName,
      level: 1,
    };
    setCharacters([...characters, newCharacter]);
    setNewCharacterName('');
  };

  const handleCharacterClick = (index: number) => {
    setSelectedId(index);
  };

  return (
    <div>
      {characters.length > 0 &&
        characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            level={character.level}
            selected={character.id === selectedId}
            onClick={() => handleCharacterClick(character.id)}
          />
        ))}
      <Input
        text={newCharacterName}
        onTextChange={handleNameChange}
        onButtonClick={handleCharacterCreation}
      />
      <Button content={'Enter Game'} />
    </div>
  );
};
