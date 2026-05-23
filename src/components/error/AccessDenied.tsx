import ErrorPage from './ErrorPage';

export default function AccessDenied() {
  return (
    <ErrorPage
      code="401"
      title="ACCESS DENIED"
      description="Authentication required. You do not have permission to access this resource. Please verify your credentials."
      terminalLine="./auth --verify — access denied"
    />
  );
}
