# Metrics SDK

This project provides a Metrics SDK for collecting and managing application metrics using the `prom-client` library. The SDK includes a `MetricsService` class that allows you to create and manage various types of metrics such as counters, gauges, histograms, and summaries.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [MetricsService](#metricsservice)
    - [Constructor](#constructor)
    - [Methods](#methods)

## Installation

To install the Metrics SDK, clone the repository and install the dependencies:

```sh
git clone https://github.com/your-username/metrics-sdk.git
cd metrics-sdk
npm install
```

## Usage
To use the Metrics SDK in your application, follow these steps:

1- Import the MetricsService:
```sh
import { MetricsService } from 'metrics-sdk';
import { Registry } from 'prom-client';
```

2- Create an instance of MetricsService:
```sh
const register = new Registry();
const appName = 'your-app-name';
const metricsService = new MetricsService(register, appName);
```

3- Collect default metrics:
```sh
metricsService.collectDefaultMetrics();
```

4- Create and use metrics:
```sh
const httpRequestDurationMicroseconds = metricsService.createHistogram(
  'http_request_duration_ms',
  'Duration of HTTP requests in ms',
  ['method', 'route', 'code']
);

const httpRequestSummary = metricsService.createSummary(
  'http_request_summary',
  'Summary of HTTP requests',
  ['method', 'route', 'code']
);

const requestCounter = metricsService.createCounter(
  'http_requests_total',
  'Total number of HTTP requests',
  ['method', 'route', 'code']
);

const activeRequestsGauge = metricsService.createGauge(
  'active_requests',
  'Number of active HTTP requests',
  ['method', 'route']
);
```
## API
### MetricsService
### Constructor
Creates an instance of MetricsService.
```sh
constructor(register: Registry, appName: string)
```
- register: An instance of Registry from prom-client.
- appName: The name of your application.
### Methods

- collectDefaultMetrics: Collects default metrics.
```sh
public collectDefaultMetrics(): void
```

- createHistogram: Creates a histogram metric.
```sh
public createHistogram(name: string, help: string, labelNames: string[]): Histogram<string>
```

- createSummary: Creates a summary metric.
```sh
public createSummary(name: string, help: string, labelNames: string[]): Summary<string>
```

- createCounter: Creates a counter metric.
```sh
public createCounter(name: string, help: string, labelNames: string[] = []): Counter<string>
```

- createGauge: Creates a gauge metric.
```sh
public createGauge(name: string, help: string, labelNames: string[] = []): Gauge<string>
```


