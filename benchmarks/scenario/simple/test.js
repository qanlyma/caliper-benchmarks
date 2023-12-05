'use strict';

const OperationBase = require('./utils/operation-base');
const SimpleState = require('./utils/simple-state');

class Test extends OperationBase {
    constructor() {
        super();
    }

    createSimpleState() {
        const accountsPerWorker = this.numberOfAccounts / this.totalWorkers;
        return new SimpleState(this.workerIndex, this.initialMoney, this.moneyToTransfer, accountsPerWorker);
    }

    // async submitTransaction() {
    //     // 生成一个 0 到 1 之间的随机数
    //     const randomProbability = Math.random();
    //     // 以 a 的概率执行 transfer，1 - a 的概率执行 raw2
    //     if (randomProbability < 0.85) {
    //         const transferArgs = this.simpleState.getTransferArguments();
    //         await this.sutAdapter.sendRequests(this.createConnectorRequest('transfer', transferArgs));
    //     } else {
    //         const raw2Args = this.simpleState.getRaw2Arguments();
    //         await this.sutAdapter.sendRequests(this.createConnectorRequest('raw2', raw2Args));
    //     }
    // }

    // async submitTransaction() {
    //     const raw2Args = this.simpleState.getRaw2Arguments();
    //     await this.sutAdapter.sendRequests(this.createConnectorRequest('raw2', raw2Args));
    // }
    async submitTransaction() {
        const r2w2Args = this.simpleState.getR2w2Arguments();
        await this.sutAdapter.sendRequests(this.createConnectorRequest('r2w2', r2w2Args));
    }
}

function createWorkloadModule() {
    return new Test();
}

module.exports.createWorkloadModule = createWorkloadModule;