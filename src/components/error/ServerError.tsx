import ErrorPage from './ErrorPage';

export default function ServerError() {
  return (
    <ErrorPage
      code="500"
      title="INTERNAL SERVER ERROR"
      description="The server encountered an unexpected condition. Administrators have been notified automatically."
      terminalLine="systemctl status homelab — exit code 1"
    />
  );
}
