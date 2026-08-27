import { useState, useEffect } from 'react';
import styles from './Loader.module.css';

export default function Loader({ onDone }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const fadeOut = setTimeout(() => setHiding(true), 2400);
    const finish  = setTimeout(onDone, 3000);
    return () => { clearTimeout(fadeOut); clearTimeout(finish); };
  }, [onDone]);

  return (
    <div className={`${styles.loader}${hiding ? ` ${styles.hiding}` : ''}`}>
      <div className={styles.glow} />

      <div className={styles.ring}>
        <div className={styles.track} />
        <div className={styles.arc} />
        <div className={styles.initials}>
          SH
        </div>
      </div>

      <div className={styles.name}>
        Samni Hasnath
      </div>
    </div>
  );
}
