import ErrorPage from './ErrorPage';

export default function BadGateway() {
  return (
    <ErrorPage
      code="502"
      title="BAD GATEWAY"
      description="The upstream server returned an invalid response. The proxy gateway lost connection to the origin server."
      terminalLine="nslookup upstream — connection refused"
    />
  );
}
