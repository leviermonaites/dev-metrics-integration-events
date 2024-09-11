import { IntegrationEvent } from '../types';

export type PipelineIntegrationEvent<EventType extends `Pipeline${string}`, Payload extends Record<string, unknown>, SchemaVersion extends number> = IntegrationEvent<EventType, string, Payload, 'Pipeline', SchemaVersion, 'Lifecycle'>;

export type PipelineCreatedEvent = PipelineIntegrationEvent<'PipelineCreated', { commitSha: string; branch: string; createdAt: string }, 1>;
export type PipelineCanceledEvent = PipelineIntegrationEvent<'PipelineCanceled', { canceledAt: string }, 1>;
export type PipelineFinishedEvent = PipelineIntegrationEvent<'PipelineFinished', { status: 'failed' | 'success'; finishedAt: string; }, 1>;

export type PipelineEventTable = {
  PipelineCreatedEvent: PipelineCreatedEvent
  PipelineCanceledEvent: PipelineCanceledEvent
  PipelineFinishedEvent: PipelineFinishedEvent
}