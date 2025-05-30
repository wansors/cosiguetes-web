import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [

  {
    title: 'Dinamització d’espais',
    imageUrl: '/img/education9.png',
    href: "/docs/tallers_families",
    description: (
      <>
        Xerrades i tallers en petits grups, creant espais de reflexió i diàleg enfocats en promoure que els infants i joves visquin des de la salut i l’autocura la seva sexualitat.
      </>
    ),
  },
  {
    title: 'Educació',
    imageUrl: '/img/education.png',
    href:"/docs/tallers_aula",
    description: (
      <>
        Tallers i xerrades destinats a l'alumnat dels cicles d'educació infantil, primària i secundària, adaptats a les necessitats de cada etapa madurativa.       
      </>
    ),
  },
  {
    title: 'Acompanyament i celebracions',
    imageUrl: '/img/education12.png',
    href:"/docs/acompanyament_i_celebracions",
    description: (
      <>
        Propostes adaptades a grups de confiança (familiars o d’amics) per acompanyar i celebrar juntes els canvis vitals com la menàrquia.
      </>
    ),
  },
];

function Feature({Svg, title, description,imageUrl,href}) {
  return (
    <div className={clsx('col col--4')}>
      <Link href={href} className="feature-link">
      <div className="text--center">
        <img src={imageUrl} role="img" style={{           
            width: '160px',  // Adjust size as needed
            height: '160px',
            objectFit: 'cover' // Ensures image fills the circle
          }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
