import { Button, CardContent, Modal } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Film } from '../../../api/models/film';
import styles from './FilmMainInfo.module.css';

/** Props interface */
interface Props {
  /** Film */
  film: Film;
  /** Delete film func */
  deleteFilm: (id: string) => void;
}

/** Film main list component */
export const FilmMainInfo: React.FC<Props> = ({ film, deleteFilm }) => {
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [wasDelete, setWasDelete] = useState(false);

  /** Open alert func */
  const openAlert = (): void => {
    setAlertIsOpen(true);
  }

  /** Close alert func */
  const closeAlert = (): void => {
    setAlertIsOpen(false);
  }

  /** Delete film */
  const handleDeleteBtn = (): void => {
    setWasDelete(true);
    deleteFilm(film.id);
  }

  /** Redirect after delete */
  if (wasDelete) {
    return <Redirect to="/films" />
  }

  const release = film.release && <p className={styles.date}>
    <b>Relised:</b> {film.release.toString().slice(0, 10)}
  </p>;

  return (
    <>
      <div className={styles.controls}>
        <Button
          color="primary"
          component={NavLink}
          to={`/films/${film.id}/form`}
          variant="contained"
        >
          <span className={styles.btnText}>
            Edit
            </span>
          <EditIcon fontSize="small" />
        </Button>
        <Button color="secondary" onClick={openAlert} variant="contained">
          <span className={styles.btnText}>
            Delete
            </span>
          <DeleteForeverIcon />
        </Button>
      </div>

      <CardContent>
        <h2 className={styles.title}>
          {film.title}
        </h2>

        <ul className={styles.infoList}>
          <li>
            <h3 className={styles.subtitle}>Opening:</h3>
            <p className={styles.opening}>{film.opening}</p>
          </li>
          <li>
            <ul className={styles.charactersList}>
              <li>
                <h3 className={styles.subtitle}>Director:</h3>
                <p>{film.director}</p>
              </li>
              <li>
                <h3 className={styles.subtitle}>Producer:</h3>
                <p>{film.producer}</p>
              </li>
            </ul>
          </li>
        </ul>

        {release}

      </CardContent>

      <Modal onClose={closeAlert} open={alertIsOpen}>
        <div className={styles.alert}>
          <h2>Are you sure you want <br /> to delete this movie?</h2>

          <div className={styles.btnWrapper}>
            <Button onClick={closeAlert} variant="contained">
              No
            </Button>
            <Button color="secondary" onClick={handleDeleteBtn} variant="contained">
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
