import { JobEventTable } from './job';
import { PipelineEventTable } from './pipeline';

export type IntegrationEventsTable = {
  pipeline: PipelineEventTable;
  job: JobEventTable;
}
