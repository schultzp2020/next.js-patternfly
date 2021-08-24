import styles from './Footer.module.css';
import type { Link } from 'custom-types';
import devfileLogo from '@public/images/devfileLogo.svg';
import { Grid, GridItem, Text, TextContent, TextVariants, Brand } from '@patternfly/react-core';

const footerLinks: Link[] = [
  { name: 'Devfile.io', link: 'https://docs.devfile.io/landing-page' },
  { name: 'GitHub', link: 'https://github.com/devfile' }
];

export const Footer: React.FC = () => (
  <footer>
    <div className={styles.footer}>
      <Grid className={styles.footerGrid}>
        <GridItem span={12} sm={6} className={styles.footerGridItem}>
          <div className={styles.title}>
            <Brand src={devfileLogo} alt="Devfile Registry Logo" className={styles.logo} />
            <TextContent>
              <Text component={TextVariants.h1} className={styles.text}>
                Devfile Registry
              </Text>
            </TextContent>
          </div>
        </GridItem>
        <GridItem span={12} sm={6} className={styles.footerGridItem}>
          <div>
            <TextContent>
              <Text component={TextVariants.h2} className={styles.text}>
                Links
              </Text>
            </TextContent>
            <ul>
              {footerLinks.map((footerLink) => (
                <li key={footerLink.name}>
                  <a target="_blank" rel="noreferrer" href={footerLink.link}>
                    {footerLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </GridItem>
      </Grid>
    </div>
  </footer>
);
Footer.displayName = 'Footer';
