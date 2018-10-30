import { alertActions } from './';
import {statisticsService} from '../_services';
import {statisticsConstants} from "../_constants/statisticsConstants";

export const statisticsActions = {
    getStatistics,insert
};

const stat= {
    "name": "WordCount3",
    "id": "WordCount3-1-1402960825",
    "workersTotal": 3,
    "window": "600",
    "status": "ACTIVE",
    "tasksTotal": 28,
    "executorsTotal": 28,
    "uptime": "29m 19s",
    "uptimeSeconds": 1759,
    "msgTimeout": 30,
    "windowHint": "10m 0s",
    "schedulerDisplayResource": true,
    "topologyStats": [
        {
            "windowPretty": "10m 0s",
            "window": "600",
            "emitted": 397960,
            "transferred": 213380,
            "completeLatency": "0.000",
            "acked": 213460,
            "failed": 0
        },
        {
            "windowPretty": "3h 0m 0s",
            "window": "10800",
            "emitted": 1190260,
            "transferred": 638260,
            "completeLatency": "0.000",
            "acked": 638280,
            "failed": 0
        },
        {
            "windowPretty": "1d 0h 0m 0s",
            "window": "86400",
            "emitted": 1190260,
            "transferred": 638260,
            "completeLatency": "0.000",
            "acked": 638280,
            "failed": 0
        },
        {
            "windowPretty": "All time",
            "window": ":all-time",
            "emitted": 1190260,
            "transferred": 638260,
            "completeLatency": "0.000",
            "acked": 638280,
            "failed": 0
        }
    ],
    "workers":[{
        "topologyName":"WordCount3",
        "topologyId":"WordCount3-1-1402960825",
        "host":"192.168.10.237",
        "supervisorId":"bdfe8eff-f1d8-4bce-81f5-9d3ae1bf432e-169.254.129.212",
        "uptime":"2m 47s",
        "uptimeSeconds":167,
        "port":6707,
        "workerLogLink":"http:\/\/192.168.10.237:8000\/log?file=WordCount3-1-1402960825%2F6707%2Fworker.log",
        "componentNumTasks": {
            "spout":5
        },
        "executorsTotal":8,
        "assignedMemOnHeap":704.0,
        "assignedCpu":130.0,
        "assignedMemOffHeap":80.0
    }],
    "spouts": [
        {
            "executors": 5,
            "emitted": 28880,
            "completeLatency": "0.000",
            "transferred": 28880,
            "acked": 0,
            "spoutId": "spout",
            "tasks": 5,
            "lastError": "",
            "errorLapsedSecs": null,
            "failed": 0
        }
    ],
    "bolts": [
        {
            "executors": 12,
            "emitted": 184580,
            "transferred": 0,
            "acked": 184640,
            "executeLatency": "0.048",
            "tasks": 12,
            "executed": 184620,
            "processLatency": "0.043",
            "boltId": "count",
            "lastError": "",
            "errorLapsedSecs": null,
            "capacity": "0.003",
            "failed": 0
        },
        {
            "executors": 8,
            "emitted": 184500,
            "transferred": 184500,
            "acked": 28820,
            "executeLatency": "0.024",
            "tasks": 8,
            "executed": 28780,
            "processLatency": "2.112",
            "boltId": "split",
            "lastError": "",
            "errorLapsedSecs": null,
            "capacity": "0.000",
            "failed": 0
        }
    ],
    "configuration": {
        "storm.id": "WordCount3-1-1402960825",
        "dev.zookeeper.path": "/tmp/dev-storm-zookeeper",
        "topology.tick.tuple.freq.secs": null,
        "topology.builtin.metrics.bucket.size.secs": 60,
        "topology.fall.back.on.java.serialization": true,
        "topology.max.error.report.per.interval": 5,
        "zmq.linger.millis": 5000,
        "topology.skip.missing.kryo.registrations": false,
        "storm.messaging.netty.client_worker_threads": 1,
        "ui.childopts": "-Xmx768m",
        "storm.zookeeper.session.timeout": 20000,
        "nimbus.reassign": true,
        "topology.trident.batch.emit.interval.millis": 500,
        "storm.messaging.netty.flush.check.interval.ms": 10,
        "nimbus.monitor.freq.secs": 10,
        "logviewer.childopts": "-Xmx128m",
        "java.library.path": "/usr/local/lib:/opt/local/lib:/usr/lib",
        "topology.executor.send.buffer.size": 1024,
        "storm.local.dir": "storm-local",
        "storm.messaging.netty.buffer_size": 5242880,
        "supervisor.worker.start.timeout.secs": 120,
        "topology.enable.message.timeouts": true,
        "nimbus.cleanup.inbox.freq.secs": 600,
        "nimbus.inbox.jar.expiration.secs": 3600,
        "drpc.worker.threads": 64,
        "topology.worker.shared.thread.pool.size": 4,
        "nimbus.seeds": [
            "hw10843.local"
        ],
        "storm.messaging.netty.min_wait_ms": 100,
        "storm.zookeeper.port": 2181,
        "transactional.zookeeper.port": null,
        "topology.executor.receive.buffer.size": 1024,
        "transactional.zookeeper.servers": null,
        "storm.zookeeper.root": "/storm",
        "storm.zookeeper.retry.intervalceiling.millis": 30000,
        "supervisor.enable": true,
        "storm.messaging.netty.server_worker_threads": 1
    },
    "replicationCount": 1
};
const stat1= {
    "name": "WordCount3",
    "id": "WordCount3-1-1402960825",
    "workersTotal": 3,
    "window": "600",
    "status": "ACTIVE",
    "tasksTotal": 28,
    "executorsTotal": 28,
    "uptime": "29m 19s",
    "uptimeSeconds": 1759,
    "msgTimeout": 30,
    "windowHint": "10m 0s",
    "schedulerDisplayResource": true,
    "topologyStats": [
        {
            "windowPretty": "10m 0s",
            "window": "600",
            "emitted": 397960,
            "transferred": 213380,
            "completeLatency": "0.000",
            "acked": 213460,
            "failed": 0
        },
        {
            "windowPretty": "3h 0m 0s",
            "window": "10800",
            "emitted": 1190260,
            "transferred": 638260,
            "completeLatency": "0.000",
            "acked": 638280,
            "failed": 0
        },
        {
            "windowPretty": "1d 0h 0m 0s",
            "window": "86400",
            "emitted": 1190260,
            "transferred": 638260,
            "completeLatency": "0.000",
            "acked": 638280,
            "failed": 0
        },
        {
            "windowPretty": "All time",
            "window": ":all-time",
            "emitted": 1190260,
            "transferred": 638260,
            "completeLatency": "0.3000",
            "acked": 638280,
            "failed": 0
        }
    ],
    "workers":[{
        "topologyName":"WordCount3",
        "topologyId":"WordCount3-1-1402960825",
        "host":"192.168.10.237",
        "supervisorId":"bdfe8eff-f1d8-4bce-81f5-9d3ae1bf432e-169.254.129.212",
        "uptime":"2m 47s",
        "uptimeSeconds":167,
        "port":6707,
        "workerLogLink":"http:\/\/192.168.10.237:8000\/log?file=WordCount3-1-1402960825%2F6707%2Fworker.log",
        "componentNumTasks": {
            "spout":5
        },
        "executorsTotal":8,
        "assignedMemOnHeap":704.0,
        "assignedCpu":130.0,
        "assignedMemOffHeap":80.0
    }],
    "spouts": [
        {
            "executors": 5,
            "emitted": 28880,
            "completeLatency": "0.000",
            "transferred": 28880,
            "acked": 0,
            "spoutId": "spout",
            "tasks": 5,
            "lastError": "",
            "errorLapsedSecs": null,
            "failed": 0
        }
    ],
    "bolts": [
        {
            "executors": 12,
            "emitted": 184580,
            "transferred": 0,
            "acked": 184640,
            "executeLatency": "0.048",
            "tasks": 12,
            "executed": 184620,
            "processLatency": "0.043",
            "boltId": "count",
            "lastError": "",
            "errorLapsedSecs": null,
            "capacity": "0.003",
            "failed": 0
        },
        {
            "executors": 8,
            "emitted": 184500,
            "transferred": 184500,
            "acked": 28820,
            "executeLatency": "0.024",
            "tasks": 8,
            "executed": 28780,
            "processLatency": "2.112",
            "boltId": "split",
            "lastError": "",
            "errorLapsedSecs": null,
            "capacity": "0.000",
            "failed": 0
        }
    ],
    "configuration": {
        "storm.id": "WordCount3-1-1402960825",
        "dev.zookeeper.path": "/tmp/dev-storm-zookeeper",
        "topology.tick.tuple.freq.secs": null,
        "topology.builtin.metrics.bucket.size.secs": 60,
        "topology.fall.back.on.java.serialization": true,
        "topology.max.error.report.per.interval": 5,
        "zmq.linger.millis": 5000,
        "topology.skip.missing.kryo.registrations": false,
        "storm.messaging.netty.client_worker_threads": 1,
        "ui.childopts": "-Xmx768m",
        "storm.zookeeper.session.timeout": 20000,
        "nimbus.reassign": true,
        "topology.trident.batch.emit.interval.millis": 500,
        "storm.messaging.netty.flush.check.interval.ms": 10,
        "nimbus.monitor.freq.secs": 10,
        "logviewer.childopts": "-Xmx128m",
        "java.library.path": "/usr/local/lib:/opt/local/lib:/usr/lib",
        "topology.executor.send.buffer.size": 1024,
        "storm.local.dir": "storm-local",
        "storm.messaging.netty.buffer_size": 5242880,
        "supervisor.worker.start.timeout.secs": 120,
        "topology.enable.message.timeouts": true,
        "nimbus.cleanup.inbox.freq.secs": 600,
        "nimbus.inbox.jar.expiration.secs": 3600,
        "drpc.worker.threads": 64,
        "topology.worker.shared.thread.pool.size": 4,
        "nimbus.seeds": [
            "hw10843.local"
        ],
        "storm.messaging.netty.min_wait_ms": 100,
        "storm.zookeeper.port": 2181,
        "transactional.zookeeper.port": null,
        "topology.executor.receive.buffer.size": 1024,
        "transactional.zookeeper.servers": null,
        "storm.zookeeper.root": "/storm",
        "storm.zookeeper.retry.intervalceiling.millis": 30000,
        "supervisor.enable": true,
        "storm.messaging.netty.server_worker_threads": 1
    },
    "replicationCount": 1
};

function insert(query,latency,emitted) {

    return dispatch => {
        statisticsService.insertStatistics(query, latency, emitted)
            .then(
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );

        function failure(error) {
            return {type: statisticsConstants.CREATE_FAILURE_INSERT, error}
        }
    };
}


function getStatistics() {

    return dispatch => {
        dispatch(request());
        let statistics=[];
       // statistics[0]= stat["topologyStats"][3];
        //statistics[1]=stat1["topologyStats"][3];
        //
        // console.log(statistics);
       // dispatch(success(statistics));

        statisticsService.getStatisticsTop1()
            .then(

                statisticsTop1=>{
                    //dispatch(success(statisticsTop1));
                    statistics[0]=statisticsTop1["topologyStats"][3];

                    statisticsService.getStatisticsTop2()
                        .then(

                            statisticsTop2=>{
                                statistics[1]=statisticsTop2["topologyStats"][3];
                                dispatch(success(statistics));
                            },
                            error => {
                                dispatch(failure(error));
                                dispatch(alertActions.error(error));
                            }
                        );



                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );




    };
    function request() { return { type: statisticsConstants.CREATE_REQUEST_TOP1 } }
    function success(statistics) { return { type: statisticsConstants.CREATE_SUCCESS_TOP1, statistics } }
    function failure(error) { return { type: statisticsConstants.CREATE_FAILURE_TOP1, error } }
}