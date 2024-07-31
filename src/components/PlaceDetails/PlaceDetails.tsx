import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Places } from '../../constants';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './place.css';

const PlaceDetails: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const navigate = useNavigate();
  const place = Places.find((p) => p.link === placeId);

  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleChangeDay = (event: SelectChangeEvent<string>) => {
    setSelectedDay(event.target.value as string);
  };

  const handleChangeTime = (event: SelectChangeEvent<string>) => {
    setSelectedTime(event.target.value as string);
  };

  if (!place) {
    return <p>Место не найдено!</p>;
  }

  const handleConfirm = async () => {
    const response = await fetch('https://formspree.io/f/meojggyq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        place: place.name,
        day: selectedDay,
        time: selectedTime,
      }),
    });

    if (response.ok) {
      alert('Договорились');
      navigate('/');
    } else {
      alert('Ошибка при отправке данных.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="place-details">
      <button onClick={handleBack} className="back">
        Назад
      </button>
      <h2>{place.name}</h2>
      <div className="place-image">
        <img src={place.imgURL} alt={place.imgAlt} className="place-image" />
      </div>

      <div className="selection">
        <FormControl fullWidth>
          <InputLabel id="day-select-label">В какой день?</InputLabel>
          <Select
            labelId="day-select-label"
            id="day-select"
            value={selectedDay}
            label="В какой день?"
            onChange={handleChangeDay}
          >
            <MenuItem value={'Понедельник'}>Понедельник</MenuItem>
            <MenuItem value={'Вторник'}>Вторник</MenuItem>
            <MenuItem value={'Среда'}>Среда</MenuItem>
            <MenuItem value={'Четверг'}>Четверг</MenuItem>
            <MenuItem value={'Пятница'}>Пятница</MenuItem>
            <MenuItem value={'Суббота'}>Суббота</MenuItem>
            <MenuItem value={'Воскресенье'}>Воскресенье</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="time-select-label">В какое время?</InputLabel>
          <Select
            labelId="time-select-label"
            id="time-select"
            value={selectedTime}
            label="В какое время?"
            onChange={handleChangeTime}
          >
            <MenuItem value={'Утро'}>Утром с 11:00</MenuItem>
            <MenuItem value={'День'}>Днем c 15:00</MenuItem>
            <MenuItem value={'Вечер'}>Вечером c 18:00</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="confirmation">
        <p className="intro-text">
          Выбор: {place.name} {selectedDay}, {selectedTime}
        </p>
        <button onClick={handleConfirm}>Подтвердить</button>
      </div>
    </div>
  );
};

export default PlaceDetails;
