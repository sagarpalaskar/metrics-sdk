
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
