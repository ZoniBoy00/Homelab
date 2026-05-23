import ErrorPage from './ErrorPage';

export default function ServiceUnavailable() {
  return (
    <ErrorPage
      code="503"
      title="SERVICE UNAVAILABLE"
      description="The service is temporarily unavailable. Scheduled maintenance is in progress. Please check back shortly."
      terminalLine="systemctl status — maintenance in progress"
    />
  );
}
