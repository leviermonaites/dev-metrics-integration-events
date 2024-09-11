import { IntegrationEvent } from '../types';

export type JobIntegrationEvent<EventType extends `Job${string}`, Payload extends Record<string, unknown>, SchemaVersion extends number> = IntegrationEvent<EventType, string, Payload, 'Job', SchemaVersion, 'Lifecycle'>;

export type JobCreatedEvent = JobIntegrationEvent<'JobCreated', { commitSha: string; pipelineId: string; branch: string; createdAt: string }, 1>;
export type JobCanceledEvent = JobIntegrationEvent<'JobCanceled', { canceledAt: string; }, 1>;
export type JobFinishedEvent = JobIntegrationEvent<'JobFinished', { status: 'failed' | 'success'; duration: number; finishedAt: string; }, 1>;

export interface JobEventTable {
  JobCreatedEvent: JobCreatedEvent
  JobCanceledEvent: JobCanceledEvent
  JobFinishedEvent: JobFinishedEvent
}