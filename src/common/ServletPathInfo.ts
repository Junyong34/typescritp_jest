const pathInfo = {
    alertEvent: "/api/alert/events",
    alertGroup: "/api/config/alert/groups",
    alertRule: "/api/config/alert/rules",
    alertRuleMeta: "/api/config/alert/meta",
    authResource: "/api/config/auth_resources",
    alertTarget: "/api/config/alert/targets",
    alertWebHook: "/alert",
    auth: "/api/auth",
    event: "/api/event",
    healthIndicator: "/api/health_indicator",
    information: "/api/info",
    jobHistory: "/api/jobhistory",
    logViewer: "/api/log_viewer",
    metric: "/api/metric",
    // statisticsPerformanceTrend: "/api/statistics/performancetrend", // deprecated API
    serviceRelation: "/api/servicerelation",
    serviceTrace: "/api/servicetrace",
    sparseLog: "/api/sparse_log",
    statistics: "/api/statistics",
    user: "/api/config/users",
    userGroup: "/api/config/user_groups",
    userGroupPermission: "/api/config/user_groups",
    userPermission: "/api/config/users",
    menu: "/api/menu",
    management: "/api/management",
    dashboard: "/api/dashboard",
    report: "/api/report",
    cache: "/api/cache",
    profile: "/api/user/profileImage",
};

const restfulApi = {
    dashboard: {
        dashboard: pathInfo.dashboard,
    },
    alertEvent: {
        events: pathInfo.alertEvent,
        time_summary: `${pathInfo.alertEvent}/time_summary`,
        type_summary: `${pathInfo.alertEvent}/type_summary`,
    },
    alertGroup: {
        groups: pathInfo.alertGroup,
    },
    alertRule: {
        rule: pathInfo.alertRule,
    },
    alertRuleMeta: {
        meta: pathInfo.alertRuleMeta,
        // preview: pathInfo.alertRuleMeta,
    },
    alertTarget: {
        targets: pathInfo.alertTarget,
    },
    alertWebHook: {
        alert: pathInfo.alertWebHook,
    },
    auth: {
        login: `${pathInfo.auth}/login`,
    },
    authResource: {
        auth_resources: pathInfo.authResource,
    },
    event: {
        log: pathInfo.event,
        summary: `${pathInfo.event}/summary`,
        recent: `${pathInfo.event}/recent`,
    },
    healthIndicator: {
        counts: `${pathInfo.healthIndicator}/counts`,
        entities: `${pathInfo.healthIndicator}/entities`,
        metric_charts: `${pathInfo.healthIndicator}/metric_charts`,
        metrics: `${pathInfo.healthIndicator}/metrics`,
    },
    information: {
        controller: `${pathInfo.information}/controller`,
        cronjoblist: `${pathInfo.information}/cronjoblist`,
        daemonset: `${pathInfo.information}/daemonset`,
        datacenter: `${pathInfo.information}/datacenter`,
        deployment_pod_summary_by_node: `${pathInfo.information}/deployment_pod_summary_by_node`,
        deploymentlist: `${pathInfo.information}/deploymentlist`,
        image: `${pathInfo.information}/pathInfo`,
        joblist: `${pathInfo.information}/joblist`,
        namespacelist: `${pathInfo.information}/namespacelist`,
        node: `${pathInfo.information}/node`,
        cluster_summary: `${pathInfo.information}/cluster_summary`,
        nodelist: `${pathInfo.information}/nodelist`,
        pod: `${pathInfo.information}/pod`,
        podlist: `${pathInfo.information}/podlist`,
        pod_summary_by_node: `${pathInfo.information}/pod_summary_by_node`,
        pv: `${pathInfo.information}/pv`,
        pvc: `${pathInfo.information}/pvc`,
        replicaset: `${pathInfo.information}/replicaset`,
        running_pods_by_deployment: `${pathInfo.information}/running_pods_by_deployment`,
        service: `${pathInfo.information}/service`,
        statefulset: `${pathInfo.information}/statefulset`,
        top_resource: `${pathInfo.information}/top_resource`,
        topology: `${pathInfo.information}/topology`,
        workload: `${pathInfo.information}/workload`,
    },
    jobHistory: {
        summary: `${pathInfo.jobHistory}/summary`,
    },
    logViewer: {
        deletefile: `${pathInfo.logViewer}/deletefile`,
        directory: `${pathInfo.logViewer}/directory`,
        getfile: `${pathInfo.logViewer}/getfile`,
        log: `${pathInfo.logViewer}/log`,
        viewfile: `${pathInfo.logViewer}/viewfile`,
        viewfilelist: `${pathInfo.logViewer}/viewfilelist`,
    },
    metric: {
        base: `${pathInfo.metric}/base`,
        containers: `${pathInfo.metric}/containers`,
        meta: `${pathInfo.metric}/meta`,
        metaType: `${pathInfo.metric}/meta/type`,
        nodes: `${pathInfo.metric}/nodes`,
        pods: `${pathInfo.metric}/pods`,
        service_by_pod: `${pathInfo.metric}/service_by_pod`,
        chart: `${pathInfo.metric}/chart`,
    },
    // deprecated API
    // statisticsPerformanceTrend: {
    //     trendMetricData: `${pathInfo.statisticsPerformanceTrend}/trendMetricData`,
    // },
    serviceRelation: {
        summary: `${pathInfo.serviceRelation}/summary`,
    },
    serviceTrace: {
        traceTrend: `${pathInfo.serviceTrace}/tracetrend`,
        traceDetail: `${pathInfo.serviceTrace}/tracedetail`,
        httpSummary: `${pathInfo.serviceTrace}/httpsummary`,
        relation: `${pathInfo.serviceTrace}/relation`,
    },
    sparseLog: {
        sparseLog: pathInfo.sparseLog,
        info: `${pathInfo.sparseLog}/info`,
    },
    statistics: {
        job_stat_per_date: `${pathInfo.statistics}/job_stat_per_date`,
    },
    user: {
        users: pathInfo.user,
        // user_groups: pathInfo.user,
    },
    userGroup: {
        // users: pathInfo.userGroup,
        user_groups: pathInfo.userGroup,
    },
    userGroupPermission: {
        permission: pathInfo.userGroup,
    },
    userPermission: {
        permission: pathInfo.userPermission,
    },
    menu: {
        menu: pathInfo.menu,
    },
    management: {
        scale: `${pathInfo.management}/scale`,
        yaml: `${pathInfo.management}/yaml`,
    },
    report: {
        report: pathInfo.report,
        template: `${pathInfo.report}/template`,
    },
    cache: {
        invalidate: `${pathInfo.cache}/invalidate`,
    },
    profile: {
        profile: pathInfo.profile,
    },
};

export default restfulApi;
