import { ApiDocsViewer } from '@/components/ApiDocsViewer';
import { AppShell } from '@/components/AppShell';

export default function ApiDocsPage() {
  return (
    <AppShell>
      <div className="api-docs-frame" data-testid="api-docs-frame">
        <ApiDocsViewer />
      </div>
    </AppShell>
  );
}
