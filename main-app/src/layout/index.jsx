import React, { useState } from 'react';
import { Search, Icon, Nav, Shell } from '@alifd/next';

const { SubNav, Item, Group, Divider } = Nav;
import styles from './index.module.scss';
export default function Layout({ children }) {
  console.log('children:', children);
  return (
    <div className={styles.container}>
      <Shell className={styles.iframe}>
        <Shell.Branding>
          <div className={styles.rectangular}></div>
          <span>App Name</span>
        </Shell.Branding>
        <Shell.Navigation trigger={null}>
          
        </Shell.Navigation>
        <Shell.Content className={styles.content}>
          <div className={styles.sub}></div>
        </Shell.Content>
      </Shell>
    </div>
  );
}
