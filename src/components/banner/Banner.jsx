import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import banner from '../../assets/banner1.png'; 

function Banner({ card, categoryLookup }) {
    const [showDescription, setShowDescription] = useState(false);

    if (!card || !card.category || !categoryLookup || !categoryLookup[card.category]) {
        return null;
    }

    const { title, link, description } = card;
    const { name, primaryColor } = categoryLookup[card.category];

    const titleStyle = {
        backgroundColor: primaryColor,

    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <main id="banner" className={styles.layer} style={{ backgroundImage: `url(${banner})`, '--primary-color': primaryColor }}>
            <div className={styles.gradient}></div> 
            <section className={styles.content}>
                <h1 className={styles.name} style={titleStyle}>{name}</h1>
                <h2 className={styles.title}>Challenge React</h2>
                <p className={styles.subtitle}>
                    A través de estechallenge tendremos un aprendizaje más profundo. En el consuguimos comprometernos en la resolución de problemas para poder aplicar todos los conocimientos adquiridos en la formación React, en la formación de Front End y los inicios de de la formacíon principiante en programación ya que cada uno de ellos influye para poder terminar este challenge.
                </p>
                <button onClick={toggleDescription} className={styles.toggleButton}>
                    {showDescription ? 'Ocultar descripción' : 'Ver descripción...'}
                </button>
                {showDescription && (
                    <div className={styles.description}>
                        <h2 className={styles.title2}>{title}</h2>
                        <p className={styles.subtitle2}>{description}</p>
                    </div>
                )}
            </section>
            <section className={styles.containerBanner}>
                <iframe
                    src={link}
                    title={title}
                    className={styles.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </main>
    );
}

Banner.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    categoryLookup: PropTypes.object.isRequired,
};

export default Banner;
