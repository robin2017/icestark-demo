import React, { useState } from 'react';
import { Search, Icon, Nav, Shell } from '@alifd/next';

const { Item, Group, Divider } = Nav;
import LeftNav from './leftNav'
import styles from './index.module.scss';
export default function Layout({ children }) {
  console.log('children:', children);
  return (
    <div className={styles.container}>
      <Shell className={styles.iframe}>
        {/* 1、头部 */}
        <Shell.Branding>
          <div className={styles.rectangular}></div>
          <span>App Name</span>
        </Shell.Branding>
        {/* 2、侧边栏 */}
        <Shell.Navigation trigger={null}>
          <LeftNav />
        </Shell.Navigation>
        {/* 3、内容区 */}
        <Shell.Content className={styles.content}>
          <div className={styles.sub_app}>{children}</div>
        </Shell.Content>
      </Shell>
    </div>
  )
}
