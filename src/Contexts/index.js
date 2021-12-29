import AuthProvider from './Auth';

const combineProviders = (providers) =>
  providers.reduce((Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  ));

const ContextProviders = combineProviders([AuthProvider]);

export default ContextProviders;
