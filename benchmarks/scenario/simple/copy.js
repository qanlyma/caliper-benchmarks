'use strict';

const OperationBase = require('./utils/operation-base');
const SimpleState = require('./utils/simple-state');

class Copy extends OperationBase {
    constructor() {
        super();
    }

    createSimpleState() {
        const accountsPerWorker = this.numberOfAccounts / this.totalWorkers;
        return new SimpleState(this.workerIndex, this.initialMoney, this.moneyToTransfer, accountsPerWorker);
    }

    async submitTransaction() {
        // const copyArgs = this.simpleState.getCopyArguments();
        const copyArgs = {
            source: "A",
            target: "B"
        };
        await this.sutAdapter.sendRequests(this.createConnectorRequest('copy', copyArgs));
    }
}

function createWorkloadModule() {
    return new Copy();
}

module.exports.createWorkloadModule = createWorkloadModule;