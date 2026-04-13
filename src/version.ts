import packageJson from '../package.json';

export const APP_VERSION = packageJson.version;

console.info(
  `[Invetec] Versao ${APP_VERSION} - Build ${new Date().toLocaleString('pt-BR')}`
);
