import ErrorPage from './ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="RESOURCE NOT FOUND"
      description="The requested resource does not exist or has been moved. Check the URL and try again."
      terminalLine="curl -I https://homelab.cfd/missing — 404"
      primaryAction={{ label: '[ GO_BACK ]', href: '/' }}
      secondaryAction={{ label: '[ RETRY ]', onClick: () => location.reload() }}
    />
  );
}
