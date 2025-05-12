import React from 'react';
import styles from './PageWrapper.module.scss';

export default function PageWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={`${styles.page} p-4`}>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
