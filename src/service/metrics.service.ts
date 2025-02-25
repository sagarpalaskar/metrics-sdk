// import { Counter, Gauge, Histogram, Summary, Registry } from 'prom-client';

// class MetricsService {
//   private register: Registry;

//   constructor() {
//     this.register = new Registry();
//     this.register.setDefaultLabels({
//       app: 'your-app-name'
//     });

//     // Enable the collection of default metrics
//     this.collectDefaultMetrics();
//   }

//   private collectDefaultMetrics() {
//     const client = require('prom-client');
//     client.collectDefaultMetrics({ register: this.register });
//   }

//   createCounter(name: string, help: string, labelNames: string[] = []): Counter<string> {
//     const counter = new Counter({
//       name,
//       help,
//       labelNames,
//       registers: [this.register]
//     });
//     return counter;
//   }

//   createGauge(name: string, help: string, labelNames: string[] = []): Gauge<string> {
//     const gauge = new Gauge({
//       name,
//       help,
//       labelNames,
//       registers: [this.register]
//     });
//     return gauge;
//   }

//   createHistogram(name: string, help: string, labelNames: string[] = []): Histogram<string> {
//     const histogram = new Histogram({
//       name,
//       help,
//       labelNames,
//       registers: [this.register]
//     });
//     return histogram;
//   }

//   createSummary(name: string, help: string, labelNames: string[] = []): Summary<string> {
//     const summary = new Summary({
//       name,
//       help,
//       labelNames,
//       registers: [this.register]
//     });
//     return summary;
//   }

//   async getMetrics(): Promise<string> {
//     return this.register.metrics();
//   }
// }

// export const metricsService = new MetricsService();

import { Registry, collectDefaultMetrics, Histogram, Summary, Counter, Gauge } from 'prom-client';
import { IMetricsService } from '../interface/metrics.interface';

export class MetricsService implements IMetricsService {
    private register: Registry;

    constructor(register: Registry, appName: string) {
        this.register = register;
        this.register.setDefaultLabels({
            app: appName
        });
    }

    public collectDefaultMetrics(): void {
        collectDefaultMetrics({ register: this.register });
    }

    public createHistogram(name: string, help: string, labelNames: string[]): Histogram<string> {
        const histogram = new Histogram({
            name,
            help,
            labelNames,
            registers: [this.register]
        });
        return histogram;
    }

    public createSummary(name: string, help: string, labelNames: string[]): Summary<string> {
        const summary = new Summary({
            name,
            help,
            labelNames,
            registers: [this.register]
        });
        return summary;
    }

    public createCounter(name: string, help: string, labelNames: string[] = []): Counter<string> {
        const counter = new Counter({
            name,
            help,
            labelNames,
            registers: [this.register]
        });
        return counter;
    }

    public createGauge(name: string, help: string, labelNames: string[] = []): Gauge<string> {
        const gauge = new Gauge({
            name,
            help,
            labelNames,
            registers: [this.register]
        });
        return gauge;
    }
}