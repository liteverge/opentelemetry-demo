// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

const pino = require('pino')

const logger = pino({
    mixin() {
        return {
            'service.name': process.env['OTEL_SERVICE_NAME'],
        }
    },
    transport: {
        targets: [
            {
                target: 'pino/file',
                options: {destination: '/logs/application.log', mkdir: false},
                level: 'info',
            },
            {
                target: 'pino/file',
                options: {destination: 1}, // stdout
                level: 'info', // explicitly set level if required
            },
        ],
    },
});

module.exports = logger;
