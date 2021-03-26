import { Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik, useFormikContext } from 'formik';
import React, { Dispatch, useEffect, useState } from 'react';
import { Prompt, Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { Film } from '../../api/models/film';
import { Characters } from '../../api/models/characters';
import { Planet } from '../../api/models/planet';
import { Species } from '../../api/models/species';
import { Starship } from '../../api/models/starship';
import { Vehicle } from '../../api/models/vehicle';
import { InputLabelControl, SelectLabelControl, TextareaLabelControl } from '../common/FormContols';
import styles from './FilmForm.module.css';

/** Add styles for material-ui components */
const useStyles = makeStyles({
  btn: {
    display: 'block',
    maxWidth: '200px',
    width: '100%',
    margin: '0 auto',
  },
});

/** Props interface */
interface Props {
  /** Start values */
  startValues?: Film;
  /** Characters */
  characters: Characters[];
  /** Planet */
  planets: Planet[];
  /** Species */
  species: Species[];
  /** Starship */
  starships: Starship[];
  /** Vehicle */
  vehicles: Vehicle[];
  /** Save film function */
  onSaveFilm: ((film: Film) => void) | ((film: Film, id: string) => void);
}

/** Form check diry interface */
interface CheckDirty {
  /** Set diry condition function */
  setIsDirty: Dispatch<any>;
}

/** Check dirty form values */
const CheckValues: React.FC<CheckDirty> = ({ setIsDirty }) => {
  const { dirty } = useFormikContext();

  useEffect(() => {
    setIsDirty(dirty);
  }, [dirty]);

  return null;
};

/** Film form component */
export const FilmForm: React.FC<Props> = ({
  startValues,
  characters,
  planets,
  species,
  starships,
  vehicles,
  onSaveFilm,
}) => {
  /** Material styles */
  const classes = useStyles();
  /** Dirty form condition */
  const [isDiry, setIsDirty] = useState();
  /** Sending condition */
  const [isSended, setIsSended] = useState(false);

  /** Create characters list */
  const charactersOptions = characters.map((person) => (
    <MenuItem key={person.pk} value={person.pk}>
      {person.name}
    </MenuItem>
  ));

  /** Create planets list */
  const planetsOptions = planets.map((planet) => (
    <MenuItem key={planet.pk} value={planet.pk}>
      {planet.name}
    </MenuItem>
  ));

  /** Create species list */
  const speciesOptions = species.map((speciesItem) => (
    <MenuItem key={speciesItem.pk} value={speciesItem.pk}>
      {speciesItem.name}
    </MenuItem>
  ));

  /** Create starships list */
  const starshipsOptions = starships.map((starship) => (
    <MenuItem key={starship.pk} value={starship.pk}>
      {starship.class} {starship.hyperdrive}
    </MenuItem>
  ));

  /** Create vehicles list */
  const vehiclesOptions = vehicles.map((vehicle) => (
    <MenuItem key={vehicle.pk} value={vehicle.pk}>
      {vehicle.class} {vehicle.pk}
    </MenuItem>
  ));

  /** Film form validators */
  const validations = Yup.object({
    title: Yup.string()
      .required('Required'),
    director: Yup.string()
      .required('Required'),
    opening: Yup.string()
      .required('Required'),
    producer: Yup.string()
      .required('Required'),
    release: Yup.date()
      .required('Required'),
    characters: Yup.array()
      .required('Required'),
    planets: Yup.array()
      .required('Required'),
    species: Yup.array()
      .required('Required'),
    starships: Yup.array()
      .required('Required'),
    vehicles: Yup.array()
      .required('Required'),
  });

  /** Correct start values */
  const correctStartValues = startValues ? {
    ...startValues,
    release: startValues?.release.toISOString().substr(0, 10),
  } : null;

  /** Form start values */
  const fields = correctStartValues || {
    title: '',
    director: '',
    opening: '',
    producer: '',
    release: '',
    characters: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  };

  /** Submit function */
  const handleSubmit = (filmData: any) => {
    if (startValues) {
      onSaveFilm(filmData, startValues.id);
    } else {
      onSaveFilm(filmData, '');
    }

    setIsSended(true)
  }

  /** Redirect after sending form */
  if (isSended) {
    return (
      <>
        { startValues ?
          <Redirect to={`/films/${startValues.id}`} /> :
          <Redirect to="/films" />
        }
      </>
    )
  }

  return (
    <div>
      <h2 className={styles.title}>
        Film form
      </h2>

      <Formik
        initialValues={fields}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form>
          <Field
            autoComplete="on"
            component={InputLabelControl}
            label="Title"
            name="title"
            type="text"
          />
          <Field
            autoComplete="on"
            component={InputLabelControl}
            label="Director"
            name="director"
            type="text"
          />
          <Field
            component={TextareaLabelControl}
            label="Opening"
            name="opening"
          />
          <Field
            component={InputLabelControl}
            label="Producer"
            name="producer"
            type="text"
          />
          <Field
            component={InputLabelControl}
            label="Release"
            name="release"
            type="date"
          />
          <Field
            component={SelectLabelControl}
            label="Characters"
            name="characters"
            multiple
          >
            {charactersOptions}
          </Field>
          <Field
            component={SelectLabelControl}
            label="Planets"
            name="planets"
            multiple
          >
            {planetsOptions}
          </Field>
          <Field
            component={SelectLabelControl}
            label="Species"
            name="species"
            multiple
          >
            {speciesOptions}
          </Field>
          <Field
            component={SelectLabelControl}
            label="Starships"
            name="starships"
            multiple
          >
            {starshipsOptions}
          </Field>
          <Field
            component={SelectLabelControl}
            label="Vehicles"
            name="vehicles"
            multiple
          >
            {vehiclesOptions}
          </Field>

          <Button
            className={classes.btn}
            color="secondary"
            disabled={!isDiry}
            type="submit"
            variant="outlined"
          >
            Save film
          </Button>
          <CheckValues setIsDirty={setIsDirty} />
        </Form>
      </Formik>

      <Prompt
        message="Are you sure? Your data has not been saved."
        when={isDiry}
      />
    </div>
  )
}
