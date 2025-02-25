import { Registry, collectDefaultMetrics, Histogram, Summary } from 'prom-client';

export interface IMetricsService {
    collectDefaultMetrics(): void;
    createHistogram(name: string, help: string, labelNames: string[]): Histogram<string>;
    createSummary(name: string, help: string, labelNames: string[]): Summary<string>;
  }